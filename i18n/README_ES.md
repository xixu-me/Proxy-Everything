<div align="center">

<a href="README_ZH.md">汉语</a> ｜ <a href="/README.md">English</a> ｜ <a href="README_RU.md">Русский</a> ｜ <a href="README_FR.md">Français</a> ｜ Español ｜ <a href="README_DE.md">Deutsch</a> ｜ <a href="README_KO.md">한국어</a>

# Proxy Everything - Open Source (PE-OS)

</div>

# NOTA: Este repositorio ya no se mantiene, consulte [Xget](https://github.com/xixu-me/Xget).

## Descripción

Este repositorio (PE-OS) es una implementación de código abierto de [Xi Xu's Proxy Everything](https://proxy.xi-xu.me). PE-OS tiene como objetivo proporcionar a los desarrolladores una solución de servicio de proxy simple, rápida y gratuita que pueda utilizar como proxy cualquier URL y, al mismo tiempo, proteger la privacidad del usuario.

## Demostración

[Demostración oficial de PE-OS](https://pe-os.xi-xu.me).

## Implementación

### 1. Regístrese para obtener una cuenta de Cloudflare

Visite [Cloudflare](https://dash.cloudflare.com/sign-up) para registrarse para obtener una cuenta.

### 2. Implementar en Cloudflare Workers

Después de iniciar sesión en su cuenta, haga clic en [![Implementar en Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xixu-me/Proxy-Everything).

Haga clic en "Autorizar Workers" e inicie sesión en su cuenta de Github para autorizar GitHub en Workers.
![image-20240308100821060](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/241edb52-b1ef-4a2c-8525-bfa3d148391b)

Haga clic en "Tengo una cuenta".
![image-20240308100942925](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/219fc538-e412-4a52-913c-6c4878d50325) Haga clic en "Panel de control de trabajadores".
![image-20240308101056834](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4b4a96be-90b3-40cc-9b50-b214980f2ab2) Copie "ID de cuenta".
![image-20240308101224693](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/da6f8b64-f6e1-40c0-b812-54f86d8b97c0)

Péguelo en el cuadro de entrada "ID de cuenta".
![image-20240308101342895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4df45a68-855f-4acd-a9be-6d0da63a49a5)

Haga clic en "Mi perfil".
![image-20240308101452825](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4d21f38a-f313-4d66-baf9-83ce1df93f02)

Haga clic en "Crear token".
![image-20240308101620496](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/41e82d1b-27ea-44a0-8cfe-ae66233544ad)

Haga clic en "Usar plantilla" en el cuarto elemento "Editar trabajadores de Cloudflare".
![image-20240308101741689](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/3974817c-2787-4148-95f9-96f58ef78aee)

Seleccione el valor de `Recurso de cuenta` en `Su cuenta` y `Recurso de región` en `Todas las regiones`.
![image-20240308102630538](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/cd20fa0a-b75d-489d-85c0-49a063abea8a)

Haga clic en "Continuar para mostrar el resumen".
![image-20240308102827159](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/9d91e08b-743b-476a-b74e-5b2f46b97ac2)

Haga clic en "Crear token".
![image-20240308103110802](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/db6cde35-cf88-4fde-a58a-d3b204dabc17)

Haga clic en "Copiar".
![image-20240308103153901](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/0309e295-d77a-4d27-918e-706e2169347f)

Péguelo en el cuadro de entrada "Token de API" y haga clic en "Conectar cuenta".
![aac580cdb2ba5305991c02e46baea0de](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/eb3bb593-13df-4a67-976d-4fbb5f369e51) Haga clic en "Bifurcar el repositorio" -> "Acciones del repositorio" -> "Entiendo mis flujos de trabajo, continúe y habilítelos" para habilitar la Acción de Github.
![image-20240308103835724](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/a0d89011-edb5-4622-9bb0-c40f6420e936)

Vuelva a la página anterior y haga clic en "Flujos de trabajo habilitados" -> "Implementar" en secuencia.
![image-20240308104056663](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/d29844b4-6eda-4da1-984c-3f4507e1c213)
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/63691c2a-b26d-48cd-9c42-6fd74e44694b)

Regrese al repositorio Fork, haga clic en "Acciones" y la implementación será exitosa si se obtiene el siguiente resultado.
![image-20240308104412895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/ae35e302-c3cf-4662-badb-926b56b19565)

### 3. Obtener el enlace de acceso

Busque el enlace a continuación en el panel de control de Worker.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/8fef9dd4-285e-414a-9237-5378e981b96c)

### 4. Actualizaciones posteriores

En la dirección del proyecto Fork, haga clic en "Sync Fork" y espere a que las acciones se implementen automáticamente.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/16ca803a-fe4b-431e-97b0-f04b8a217220)

### 5. Nombre de dominio personalizado (opcional)

En el panel de Worker, seleccione "Activador" y haga clic en "Agregar dominio personalizado" para implementar un nombre de dominio personalizado
![d64fcdab4dc44504909cc6faa86ae8a1](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/6f0de2c5-1dd4-4801-b163-6d485836c73d)

## Declaración

Este repositorio (PE-OS) es solo para aprendizaje y comunicación. Está estrictamente prohibido utilizarlo con fines comerciales o incluso ilegales. Los usuarios deben cumplir con las leyes y regulaciones locales, de lo contrario, lo harán bajo su propio riesgo.

## Licencia

Copyright &copy; [Xi Xu](https://xi-xu.me). Todos los derechos reservados.

Licenciado bajo la licencia [GPL-3.0](https://github.com/xixu-me/Proxy-Everything/blob/main/LICENSE).
