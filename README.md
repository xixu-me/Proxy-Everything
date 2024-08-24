<a href="https://star-history.com/#xixu-me/Proxy-Everything&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=xixu-me/Proxy-Everything&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=xixu-me/Proxy-Everything&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=xixu-me/Proxy-Everything&type=Date" />
 </picture>
</a>

<p align="left">
    <a href="README_ZH.md">汉语</a> ｜ English ｜ <a href="README_RU.md">Русский</a> ｜ <a href="README_FR.md">Français</a> ｜ <a href="README_ES.md">Español</a> ｜ <a href="README_DE.md">Deutsch</a> ｜ <a href="README_KO.md">한국어</a>
</p>

# Proxy Everything - Open Source (PE-OS)

## Description

This repository (PE-OS) is an open source implementation of [Xi Xu's Proxy Everything](https://proxy.xi-xu.me). PE-OS aims to provide developers with a simple, fast, and free proxy service solution that can proxy any URL while protecting user privacy.

## Demo

[Official demo of PE-OS](https://pe-os.xi-xu.me).

## Deployment

### 1. Sign up for a Cloudflare account

Visit [Cloudflare](https://dash.cloudflare.com/sign-up) to sign up for an account.

### 2. Deploy to Cloudflare Workers

After logging into your account, click [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xixu-me/Proxy-Everything).

Click "Authorize Workers" and log in to your Github account to authorize GitHub to Workers.
![image-20240308100821060](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/241edb52-b1ef-4a2c-8525-bfa3d148391b)

Click "I have a account".
![image-20240308100942925](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/219fc538-e412-4a52-913c-6c4878d50325) Click "Workers Dashboard".
![image-20240308101056834](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4b4a96be-90b3-40cc-9b50-b214980f2ab2) Copy "Account ID".
![image-20240308101224693](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/da6f8b64-f6e1-40c0-b812-54f86d8b97c0)

Paste it into the "Account ID" input box.
![image-20240308101342895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4df45a68-855f-4acd-a9be-6d0da63a49a5)

Click "My Profile".
![image-20240308101452825](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4d21f38a-f313-4d66-baf9-83ce1df93f02)

Click "Create Token".
![image-20240308101620496](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/41e82d1b-27ea-44a0-8cfe-ae66233544ad)

Click "Use Template" in the fourth item "Edit Cloudflare Workers".
![image-20240308101741689](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/3974817c-2787-4148-95f9-96f58ef78aee)

Select the value of `Account Resource` to `Your Account`, and `Region Resource` to `All Regions`.
![image-20240308102630538](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/cd20fa0a-b75d-489d-85c0-49a063abea8a)

Click "Continue to display summary".
![image-20240308102827159](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/9d91e08b-743b-476a-b74e-5b2f46b97ac2)

Click "Create Token".
![image-20240308103110802](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/db6cde35-cf88-4fde-a58a-d3b204dabc17)

Click "Copy".
![image-20240308103153901](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/0309e295-d77a-4d27-918e-706e2169347f)

Paste it into the "API Token" input box and click "Connect account".
![aac580cdb2ba5305991c02e46baea0de](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/eb3bb593-13df-4a67-976d-4fbb5f369e51) Click "Fork the repository" -> "Repository Actions" - > "I understand my workflows, go ahead and enable them" to enable Github Action.
![image-20240308103835724](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/a0d89011-edb5-4622-9bb0-c40f6420e936)

Return to the previous page and click "Workflows enabled" -> "Deploy" in sequence.
![image-20240308104056663](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/d29844b4-6eda-4da1-984c-3f4507e1c213)
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/63691c2a-b26d-48cd-9c42-6fd74e44694b)

Return to the Fork repository, click "Actions", and the deployment is successful if the following result is obtained.
![image-20240308104412895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/ae35e302-c3cf-4662-badb-926b56b19565)

### 3. Get access link

Find the link below in the Worker dashboard.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/8fef9dd4-285e-414a-9237-5378e981b96c)

### 4. Subsequent upgrades

In the Fork project address, click "Sync Fork" and wait for Actions to be automatically deployed.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/16ca803a-fe4b-431e-97b0-f04b8a217220)

### 5. Custom domain name (optional)

In the Worker dashboard, select "Trigger" and click "Add custom domain" to implement a custom domain name
![d64fcdab4dc44504909cc6faa86ae8a1](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/6f0de2c5-1dd4-4801-b163-6d485836c73d)

## Statement

This repository (PE-OS) is for learning and communication only. It is strictly prohibited to use it for commercial or even illegal purposes. Users must comply with local laws and regulations, otherwise they will be at their own risk.

## License

Copyright © 2024 [Xi Xu](https://xi-xu.me), all rights reserved.

Licensed under the [GPL-3.0](https://github.com/xixu-me/Proxy-Everything/blob/main/LICENSE) license.
