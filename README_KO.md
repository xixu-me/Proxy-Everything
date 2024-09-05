<div align="center">

<a href="README_ZH.md">汉语</a> ｜ <a href="README.md">English</a> ｜ <a href="README_RU.md">Русский</a> ｜ <a href="README_FR.md">Français</a> ｜ <a href="README_ES.md">Español</a> ｜ <a href="README_DE.md">Deutsch</a> ｜ 한국어

# Proxy Everything - Open Source (PE-OS)

</div>

## 설명

이 저장소(PE-OS)는 [Xi Xu의 Proxy Everything](https://proxy.xi-xu.me)의 오픈 소스 구현입니다. PE-OS는 개발자에게 사용자 개인 정보를 보호하면서 모든 URL을 프록시할 수 있는 간단하고 빠르며 무료 프록시 서비스 솔루션을 제공하는 것을 목표로 합니다.

## 데모

[PE-OS의 공식 데모](https://pe-os.xi-xu.me).

## 배포

### 1. Cloudflare 계정에 가입하세요

[Cloudflare](https://dash.cloudflare.com/sign-up)를 방문하여 계정에 가입하세요.

### 2. Cloudflare Workers에 배포

계정에 로그인한 후 [![Cloudflare Workers에 배포](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xixu-me/Proxy-Everything)를 클릭합니다.

"Workers 승인"을 클릭하고 Github 계정에 로그인하여 GitHub을 Workers에 승인합니다.
![image-20240308100821060](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/241edb52-b1ef-4a2c-8525-bfa3d148391b)

"계정이 있습니다"를 클릭합니다.
![image-20240308100942925](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/219fc538-e412-4a52-913c-6c4878d50325) "근로자 대시보드"를 클릭합니다.
![image-20240308101056834](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4b4a96be-90b3-40cc-9b50-b214980f2ab2) "계정 ID"를 복사합니다.
![image-20240308101224693](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/da6f8b64-f6e1-40c0-b812-54f86d8b97c0)

"계정 ID" 입력란에 붙여넣습니다.
![image-20240308101342895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4df45a68-855f-4acd-a9be-6d0da63a49a5)

"내 프로필"을 클릭합니다.
![image-20240308101452825](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4d21f38a-f313-4d66-baf9-83ce1df93f02)

"토큰 만들기"를 클릭합니다.
![image-20240308101620496](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/41e82d1b-27ea-44a0-8cfe-ae66233544ad)

네 번째 항목 "Cloudflare Workers 편집"에서 "템플릿 사용"을 클릭합니다.
![image-20240308101741689](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/3974817c-2787-4148-95f9-96f58ef78aee)

`계정 리소스` 값을 `귀하의 계정`으로, `지역 리소스` 값을 `모든 지역`으로 선택합니다.
![image-20240308102630538](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/cd20fa0a-b75d-489d-85c0-49a063abea8a)

"요약을 표시하려면 계속"을 클릭합니다.
![image-20240308102827159](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/9d91e08b-743b-476a-b74e-5b2f46b97ac2)

"토큰 생성"을 클릭합니다.
![image-20240308103110802](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/db6cde35-cf88-4fde-a58a-d3b204dabc17)

"복사"를 클릭합니다.
![image-20240308103153901](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/0309e295-d77a-4d27-918e-706e2169347f)

"API 토큰" 입력란에 붙여넣고 "계정 연결"을 클릭합니다.
![aac580cdb2ba5305991c02e46baea0de](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/eb3bb593-13df-4a67-976d-4fbb5f369e51) "저장소 포크" -> "저장소 작업" -> "작업 흐름을 이해했으므로 계속 진행하여 활성화"를 클릭하여 Github 작업을 활성화합니다.

![image-20240308103835724](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/a0d89011-edb5-4622-9bb0-c40f6420e936)

이전 페이지로 돌아가서 "Workflows enabled" -> "Deploy"를 순서대로 클릭합니다.
![image-20240308104056663](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/d29844b4-6eda-4da1-984c-3f4507e1c213)
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/63691c2a-b26d-48cd-9c42-6fd74e44694b)

Fork 저장소로 돌아가서 "Actions"를 클릭하면 다음 결과가 나오면 배포가 성공한 것입니다.
![image-20240308104412895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/ae35e302-c3cf-4662-badb-926b56b19565)

### 3. 액세스 링크 가져오기

Worker 대시보드에서 아래 링크를 찾으세요.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/8fef9dd4-285e-414a-9237-5378e981b96c)

### 4. 후속 업그레이드

Fork 프로젝트 주소에서 "Sync Fork"를 클릭하고 작업이 자동으로 배포될 때까지 기다립니다.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/16ca803a-fe4b-431e-97b0-f04b8a217220)

### 5. 사용자 정의 도메인 이름(선택 사항)

Worker 대시보드에서 "Trigger"를 선택하고 "Add custom domain"을 클릭하여 사용자 정의 도메인 이름을 구현합니다.
![d64fcdab4dc44504909cc6faa86ae8a1](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/6f0de2c5-1dd4-4801-b163-6d485836c73d)

## Statement

이 저장소(PE-OS)는 학습 및 커뮤니케이션 전용입니다. 상업적 또는 불법적 목적으로 사용하는 것은 엄격히 금지되어 있습니다. 사용자는 현지 법률 및 규정을 준수해야 하며, 그렇지 않을 경우 본인의 책임입니다.

## 라이선스

저작권 © 2024 [Xi Xu](https://xi-xu.me), 모든 권리 보유.

[GPL-3.0](https://github.com/xixu-me/Proxy-Everything/blob/main/LICENSE) 라이선스에 따라 라이선스가 부여되었습니다.
