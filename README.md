# Proxy Everything

## 描述

Proxy Everything 是一款多功能工具，旨在满足您的所有代理需求。无论您是想管理网络流量、增强安全性还是提高性能，此存储库都能提供全面的解决方案。它易于使用且可高度定制，非常适合开发人员和网络管理员。

## 部署

### 1. 注册 Cloudflare 账户

访问 [Cloudflare](https://dash.cloudflare.com/sign-up) 注册账户。

### 2. 部署至 Cloudflare Workers

登录账户后, 点击按钮。
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xixu-me/Proxy-Everything)

点击「Authorize Workers」, 登录 Github 账户向 Workers 授权 GitHub。
![image-20240308100821060](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/241edb52-b1ef-4a2c-8525-bfa3d148391b)

点击「I have a account」。
![image-20240308100942925](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/219fc538-e412-4a52-913c-6c4878d50325)

点击「Worker Dashboard」。
![image-20240308101056834](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4b4a96be-90b3-40cc-9b50-b214980f2ab2)

复制 「Account ID」。
![image-20240308101224693](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/da6f8b64-f6e1-40c0-b812-54f86d8b97c0)

粘贴至「Account ID」输入框中。
![image-20240308101342895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4df45a68-855f-4acd-a9be-6d0da63a49a5)

点击「My Profile」。
![image-20240308101452825](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4d21f38a-f313-4d66-baf9-83ce1df93f02)

点击「创建令牌」。
![image-20240308101620496](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/41e82d1b-27ea-44a0-8cfe-ae66233544ad)

点击第四项「编辑 Cloudflare Workers」的「使用模板」。
![image-20240308101741689](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/3974817c-2787-4148-95f9-96f58ef78aee)

选择`账户资源`的值为`你的账号`, `区域资源`为`所有区域`。
![image-20240308102630538](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/cd20fa0a-b75d-489d-85c0-49a063abea8a)

点击「继续以显示摘要」。
![image-20240308102827159](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/9d91e08b-743b-476a-b74e-5b2f46b97ac2)

点击「创建令牌」。
![image-20240308103110802](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/db6cde35-cf88-4fde-a58a-d3b204dabc17)

点击「Copy」。
![image-20240308103153901](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/0309e295-d77a-4d27-918e-706e2169347f)

粘贴至「API Token」输入框中，点击「Connect account」。
![aac580cdb2ba5305991c02e46baea0de](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/eb3bb593-13df-4a67-976d-4fbb5f369e51)

依次点击「Fork the repository」-> 「Repository Actions」->「I understand my workflows, go ahead and enable them」, 以启用 Github Action。
![image-20240308103835724](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/a0d89011-edb5-4622-9bb0-c40f6420e936)

回到上级页面, 依次点击「Workflows enabled」->「Deploy」。
![image-20240308104056663](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/d29844b4-6eda-4da1-984c-3f4507e1c213)
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/63691c2a-b26d-48cd-9c42-6fd74e44694b)

回到 Fork 的仓库中, 点击「Actions」, 有如下结果即部署成功。
![image-20240308104412895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/ae35e302-c3cf-4662-badb-926b56b19565)

### 3. 获取访问链接

在 Workers 控制台找到下面的链接即可。
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/8fef9dd4-285e-414a-9237-5378e981b96c)

### 4. 后续升级

在 Fork 的项目地址中, 点击「Sync Fork」, 等待 Actions 自动部署完成后即可。
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/16ca803a-fe4b-431e-97b0-f04b8a217220)

### 5. 自定义域名（可选）

在 Workers 控制台中, 选择「触发器」，点击「添加自定义域」即可实现自定义域名
![d64fcdab4dc44504909cc6faa86ae8a1](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/6f0de2c5-1dd4-4801-b163-6d485836c73d)

## 声明

本项目仅供学习交流使用，严禁用于非法用途，否则后果自负。

## 许可证

Copyright © 2024 Xi Xu, all rights reserved.

Licensed under the [GPL-3.0](https://github.com/xixu-me/Proxy-Everything/blob/main/LICENSE) license.
