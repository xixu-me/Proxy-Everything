const HTML_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxy Everything</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 90vh;
            margin: 0;
        }
        .footer {
            text-align: center;
            position: fixed;
            bottom: 5%;
            width: 100%;
        }
    </style>
</head>
<body>
    <h1>Proxy Everything</h1>
    <form id="proxyForm">
        <label for="urlInput">Enter URL:</label>
        <input type="text" id="urlInput" name="url" required>
        <button type="submit">Proxy it!</button>
    </form>
    <script>
        document.getElementById('proxyForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let url = document.getElementById('urlInput').value;
            if (!url.includes('://'))
                url = 'http://' + url;
            window.location.href = \`/?url=\${encodeURIComponent(url)}\`;
        });
    </script>
    <div class="footer">
        This service is built from the GitHub repository <a
            href="https://github.com/xixu-me/proxy-everything">xixu-me/proxy-everything</a>.
    </div>
</body>
</html>
`;

const SECURITY_HEADERS = {
    'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; frame-ancestors 'none';",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Referrer-Policy': 'no-referrer',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};

const PROXY_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (compatible; MyProxyBot/1.0; +http://www.example.com/bot.html)',
    'Referer': '',
    'X-Forwarded-For': '0.0.0.0'
};

const ERROR_MESSAGES = {
    INVALID_URL: 'Invalid URL provided.',
    INTERNAL_URL: 'Access to internal URLs is not allowed.',
    FETCH_ERROR: 'Error fetching the requested URL: '
};

function generateHtml() {
    return new Response(HTML_TEMPLATE);
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function isInternalUrl(url) {
    const internalPatterns = [
        /^localhost$/,
        /^127\.\d+\.\d+\.\d+$/,
        /^192\.168\.\d+\.\d+$/,
        /^10\.\d+\.\d+\.\d+$/,
        /^172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+$/
    ];
    return internalPatterns.some(pattern => pattern.test(url.hostname));
}

function logRequest(request) {
    console.log(`Request URL: ${request.url}`);
    console.log(`Request Method: ${request.method}`);
    console.log(`Request Headers: ${JSON.stringify([...request.headers])}`);
}

function logError(error) {
    console.error(`Error: ${error.message}`);
}

async function handleRequest(request) {
    logRequest(request);
    const url = new URL(request.url);
    let targetUrl = url.searchParams.get('url');
    if (!targetUrl) {
        return generateHtml();
    }

    if (!isValidUrl(targetUrl)) {
        return new Response(ERROR_MESSAGES.INVALID_URL, { status: 400 });
    }

    const targetUrlObj = new URL(targetUrl);
    if (isInternalUrl(targetUrlObj)) {
        return new Response(ERROR_MESSAGES.INTERNAL_URL, { status: 403 });
    }

    const modifiedRequest = new Request(targetUrl, {
        method: request.method,
        headers: PROXY_HEADERS
    });

    try {
        const response = await fetch(modifiedRequest);
        const modifiedResponse = new Response(response.body, response);
        modifiedResponse.headers.set('X-Proxy-By', 'Cloudflare Worker');
        modifiedResponse.headers.set('Cache-Control', 'max-age=3600');
        return modifiedResponse;
    } catch (error) {
        logError(error);
        return new Response(`${ERROR_MESSAGES.FETCH_ERROR}${error.message}`, { status: 500 });
    }
}

export default {
    fetch: handleRequest
};
