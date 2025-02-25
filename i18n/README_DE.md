<div align="center">

<a href="README_ZH.md">汉语</a> ｜ <a href="/README.md">English</a> ｜ <a href="README_RU.md">Русский</a> ｜ <a href="README_FR.md">Français</a> ｜ <a href="README_ES.md">Español</a> ｜ Deutsch ｜ <a href="README_KO.md">한국어</a>

# Proxy Everything - Open Source (PE-OS)

</div>

# HINWEIS: Dieses Repository wird nicht mehr gepflegt. Bitte sehen Sie sich [Xget](https://github.com/xixu-me/Xget) an.

## Beschreibung

Dieses Repository (PE-OS) ist eine Open-Source-Implementierung von [Xi Xu's Proxy Everything](https://proxy.xi-xu.me). PE-OS zielt darauf ab, Entwicklern eine einfache, schnelle und kostenlose Proxy-Service-Lösung bereitzustellen, die jede URL als Proxy verwenden kann und gleichzeitig die Privatsphäre der Benutzer schützt.

## Demo

[Offizielle Demo von PE-OS](https://pe-os.xi-xu.me).

## Bereitstellung

### 1. Registrieren Sie sich für ein Cloudflare-Konto

Besuchen Sie [Cloudflare](https://dash.cloudflare.com/sign-up), um sich für ein Konto zu registrieren.

### 2. Bereitstellen für Cloudflare Workers

Nachdem Sie sich bei Ihrem Konto angemeldet haben, klicken Sie auf [![Bereitstellen für Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xixu-me/Proxy-Everything).

Klicken Sie auf „Workers autorisieren“ und melden Sie sich bei Ihrem Github-Konto an, um GitHub für Workers zu autorisieren.
![image-20240308100821060](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/241edb52-b1ef-4a2c-8525-bfa3d148391b)

Klicken Sie auf „Ich habe ein Konto“.
![image-20240308100942925](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/219fc538-e412-4a52-913c-6c4878d50325) Klicken Sie auf „Workers Dashboard“.
![image-20240308101056834](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4b4a96be-90b3-40cc-9b50-b214980f2ab2) Kopieren Sie „Konto-ID“.
![image-20240308101224693](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/da6f8b64-f6e1-40c0-b812-54f86d8b97c0)

Fügen Sie es in das Eingabefeld „Konto-ID“ ein.
![image-20240308101342895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4df45a68-855f-4acd-a9be-6d0da63a49a5)

Klicken Sie auf „Mein Profil“.
![image-20240308101452825](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/4d21f38a-f313-4d66-baf9-83ce1df93f02)

Klicken Sie auf „Token erstellen“.
![image-20240308101620496](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/41e82d1b-27ea-44a0-8cfe-ae66233544ad)

Klicken Sie im vierten Punkt „Cloudflare Workers bearbeiten“ auf „Vorlage verwenden“.
![image-20240308101741689](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/3974817c-2787-4148-95f9-96f58ef78aee)

Wählen Sie den Wert von „Kontoressource“ auf „Ihr Konto“ und „Regionsressource“ auf „Alle Regionen“.
![image-20240308102630538](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/cd20fa0a-b75d-489d-85c0-49a063abea8a)

Klicken Sie auf „Weiter, um Zusammenfassung anzuzeigen“.
![image-20240308102827159](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/9d91e08b-743b-476a-b74e-5b2f46b97ac2)

Klicken Sie auf „Token erstellen“.
![image-20240308103110802](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/db6cde35-cf88-4fde-a58a-d3b204dabc17)

Klicken Sie auf „Kopieren“.
![image-20240308103153901](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/0309e295-d77a-4d27-918e-706e2169347f)

Fügen Sie es in das Eingabefeld „API-Token“ ein und klicken Sie auf „Konto verbinden“.
![aac580cdb2ba5305991c02e46baea0de](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/eb3bb593-13df-4a67-976d-4fbb5f369e51) Klicken Sie auf „Repository forken“ -> „Repository-Aktionen“ -> „Ich verstehe meine Workflows, fahren Sie fort und aktivieren Sie sie“, um Github Action zu aktivieren.
![image-20240308103835724](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/a0d89011-edb5-4622-9bb0-c40f6420e936)

Kehren Sie zur vorherigen Seite zurück und klicken Sie nacheinander auf „Workflows aktiviert“ -> „Bereitstellen“.
![image-20240308104056663](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/d29844b4-6eda-4da1-984c-3f4507e1c213)
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/63691c2a-b26d-48cd-9c42-6fd74e44694b)

Kehren Sie zum Fork-Repository zurück, klicken Sie auf „Aktionen“ und die Bereitstellung ist erfolgreich, wenn das folgende Ergebnis erzielt wird.
![image-20240308104412895](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/ae35e302-c3cf-4662-badb-926b56b19565)

### 3. Zugriffslink erhalten

Den Link finden Sie unten im Worker-Dashboard.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/8fef9dd4-285e-414a-9237-5378e981b96c)

### 4. Nachfolgende Upgrades

Klicken Sie in der Fork-Projektadresse auf „Fork synchronisieren“ und warten Sie, bis die Aktionen automatisch bereitgestellt werden.
![image](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/16ca803a-fe4b-431e-97b0-f04b8a217220)

### 5. Benutzerdefinierter Domänenname (optional)

Wählen Sie im Worker-Dashboard „Trigger“ aus und klicken Sie auf „Benutzerdefinierte Domäne hinzufügen“, um einen benutzerdefinierten Domänennamen zu implementieren
![d64fcdab4dc44504909cc6faa86ae8a1](https://github.com/Harry-zklcdc/go-proxy-bingai/assets/21104213/6f0de2c5-1dd4-4801-b163-6d485836c73d)

## Statement

Dieses Repository (PE-OS) dient nur zum Lernen und zur Kommunikation. Es ist strengstens verboten, es für kommerzielle oder sogar illegale Zwecke zu verwenden. Benutzer müssen die örtlichen Gesetze und Vorschriften einhalten, andernfalls handeln sie auf eigenes Risiko.

## Lizenz

Copyright &copy; [Xi Xu](https://xi-xu.me). Alle Rechte vorbehalten.

Lizenziert unter der Lizenz [GPL-3.0](https://github.com/xixu-me/Proxy-Everything/blob/main/LICENSE).
