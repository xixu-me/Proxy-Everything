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

function generateHtml() {
    return HTML_TEMPLATE;
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

export default {
    async fetch(request) {
        const url = new URL(request.url);
        let targetUrl = url.searchParams.get('url');
        if (!targetUrl) {
            return new Response(generateHtml(), { headers: { 'Content-Type': 'text/html' } });
        }

        if (!isValidUrl(targetUrl)) {
            return new Response('Invalid URL provided.', { status: 400 });
        }

        const headers = new Headers({
            'User-Agent': 'Mozilla/5.0 (compatible; MyProxyBot/1.0; +http://www.example.com/bot.html)',
            'Referer': '',
            'X-Forwarded-For': '0.0.0.0'
        });

        const modifiedRequest = new Request(targetUrl, {
            method: request.method,
            headers: headers
        });

        try {
            const response = await fetch(modifiedRequest);
            const modifiedResponse = new Response(response.body, response);
            modifiedResponse.headers.set('X-Proxy-By', 'Cloudflare Worker');
            modifiedResponse.headers.set('Cache-Control', 'max-age=3600');
            return modifiedResponse;
        } catch (error) {
            return new Response(`Error fetching the requested URL: ${error.message}`, { status: 500 });
        }
    }
};
