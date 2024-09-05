<div align="center">

<a href="README_ZH.md">汉语</a> ｜ <a href="README.md">English</a> ｜ <a href="README_RU.md">Русский</a> ｜ Français ｜ <a href="README_ES.md">Español</a> ｜ <a href="README_DE.md">Deutsch</a> ｜ <a href="README_KO.md">한국어</a>

# Proxy Everything - Open Source (PE-OS)

</div>

## Description

Ce référentiel (PE-OS) est une implémentation open source de [Proxy Everything de Xi Xu](https://proxy.xi-xu.me). PE-OS vise à fournir aux développeurs une solution de service proxy simple, rapide et gratuite qui peut proxyer n'importe quelle URL tout en protégeant la confidentialité des utilisateurs.

## Démo

[Démo officielle de PE-OS](https://pe-os.xi-xu.me).

## Déploiement

### 1. Créez un compte Cloudflare

Visitez [Cloudflare](https://dash.cloudflare.com/sign-up) pour créer un compte.

### 2. Déployer sur Cloudflare Workers

Après vous être connecté à votre compte, cliquez sur [![Déployer sur Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xixu-me/Proxy-Everything).

Cliquez sur « Autoriser les Workers » et connectez-vous à votre compte Github pour autoriser GitHub sur les Workers.
![image-20240308100821060](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/241edb52-b1ef-4a2c-8525-bfa3d148391b)

Cliquez sur « J'ai un compte ».
![image-20240308100942925](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/219fc538-e412-4a52-913c-6c4878d50325) Cliquez sur « Tableau de bord des travailleurs ».
![image-20240308101056834](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4b4a96be-90b3-40cc-9b50-b214980f2ab2) Copiez « ID de compte ».
![image-20240308101224693](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/da6f8b64-f6e1-40c0-b812-54f86d8b97c0)

Collez-le dans la zone de saisie « ID de compte ».
![image-20240308101342895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4df45a68-855f-4acd-a9be-6d0da63a49a5)

Cliquez sur « Mon profil ».
![image-20240308101452825](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4d21f38a-f313-4d66-baf9-83ce1df93f02)

Cliquez sur « Créer un jeton ».
![image-20240308101620496](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/41e82d1b-27ea-44a0-8cfe-ae66233544ad)

Cliquez sur « Utiliser le modèle » dans le quatrième élément « Modifier les agents Cloudflare ».
![image-20240308101741689](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/3974817c-2787-4148-95f9-96f58ef78aee)

Sélectionnez la valeur de « Ressource de compte » sur « Votre compte » et « Ressource de région » sur « Toutes les régions ».
![image-20240308102630538](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/cd20fa0a-b75d-489d-85c0-49a063abea8a)

Cliquez sur « Continuer pour afficher le résumé ».
![image-20240308102827159](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/9d91e08b-743b-476a-b74e-5b2f46b97ac2)

Cliquez sur « Créer un jeton ».
![image-20240308103110802](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/db6cde35-cf88-4fde-a58a-d3b204dabc17)

Cliquez sur « Copier ».
![image-20240308103153901](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/0309e295-d77a-4d27-918e-706e2169347f)

Collez-le dans la zone de saisie « Jeton API » et cliquez sur « Connecter le compte ».
![aac580cdb2ba5305991c02e46baea0de](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/eb3bb593-13df-4a67-976d-4fbb5f369e51) Cliquez sur « Fork the repository » -> « Repository Actions » -> « Je comprends mes flux de travail, allez-y et activez-les » pour activer Github Action.
![image-20240308103835724](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/a0d89011-edb5-4622-9bb0-c40f6420e936)

Revenez à la page précédente et cliquez sur « Workflows activés » -> « Déployer » dans l'ordre.
![image-20240308104056663](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/d29844b4-6eda-4da1-984c-3f4507e1c213)
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/63691c2a-b26d-48cd-9c42-6fd74e44694b)

Retournez au référentiel Fork, cliquez sur « Actions » et le déploiement est réussi si le résultat suivant est obtenu.
![image-20240308104412895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/ae35e302-c3cf-4662-badb-926b56b19565)

### 3. Obtenir le lien d'accès

Retrouvez le lien ci-dessous dans le tableau de bord Worker.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/8fef9dd4-285e-414a-9237-5378e981b96c)

### 4. Mises à niveau ultérieures

Dans l'adresse du projet Fork, cliquez sur « Synchroniser Fork » et attendez que les actions soient automatiquement déployées.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/16ca803a-fe4b-431e-97b0-f04b8a217220)

### 5. Nom de domaine personnalisé (facultatif)

Dans le tableau de bord Worker, sélectionnez « Déclencheur » et cliquez sur « Ajouter un domaine personnalisé » pour implémenter un nom de domaine personnalisé
![d64fcdab4dc44504909cc6faa86ae8a1](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/6f0de2c5-1dd4-4801-b163-6d485836c73d)

## Déclaration

Ce référentiel (PE-OS) est destiné uniquement à l'apprentissage et à la communication. Il est strictement interdit de l'utiliser à des fins commerciales ou même illégales. Les utilisateurs doivent se conformer aux lois et réglementations locales, sinon ils seront à leurs propres risques.

## Licence

Copyright © 2024 [Xi Xu](https://xi-xu.me), tous droits réservés.

Sous licence [GPL-3.0](https://github.com/xixu-me/Proxy-Everything/blob/main/LICENSE).
