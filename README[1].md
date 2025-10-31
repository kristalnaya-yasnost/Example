# GlobalTrans — внутренний портал (шаблон)

Это простой статический шаблон внутреннего портала для компании "ГлобалТранс".
Включает:
- index.html — главная страница с модальным окном авторизации (клиентская часть только)
- styles.css — базовые стили (адаптивные)
- script.js — простая логика открытия модалки и мок-логина

## Как запустить локально
1. Распакуйте содержимое.
2. Откройте `index.html` в браузере (или используйте локальный сервер, например `python3 -m http.server`).
3. Для входа в демо: логин `admin`, пароль `password` (это только демонстрация — небезопасно для реального использования).

## Размещение на GitHub Pages
1. Инициализируйте репозиторий:
```bash
git init
git add .
git commit -m "Initial commit - static portal shell"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
2. В настройках репозитория GitHub: Pages -> выберите ветку `main` и папку `/ (root)` -> Save.
3. Через пару минут сайт будет доступен по `https://<your-username>.github.io/<repo-name>/`

## Что дальше (планы интеграции backend)
Для полноценного портала (проверка прав, редактирование новостей, управлением водителями, рейсами, отчётами):
- Выбрать backend (Node.js/Express, Python Flask/Django, Go, .NET и т.д.).
- БД: PostgreSQL или MySQL для транзакций; MongoDB — если нужен гибкий документный формат. Для простой интеграции — PostgreSQL.
- Аутентификация: JWT или сессионные куки (HTTPS обязательно). Для корпоративного портала подумайте об интеграции с LDAP/Active Directory / SSO (SAML/OAuth2).
- API endpoints (REST или GraphQL): для CRUD новостей, пользователей, рейсов, транспорта.
- Панель администратора: React/Vue/Angular или server-rendered templates.
- Хостинг: VDS / cloud (DigitalOcean, AWS, GCP, Azure). CI/CD: GitHub Actions для деплоя и миграций.

## Структура предложенного проекта
- /index.html
- /styles.css
- /script.js
- /README.md

---
Это простая оболочка. Для следующего шага я могу подготовить пример backend-а (Express + sqlite/postgres) с базовым API и примером авторизации, а также объяснить, как развернуть всё это на сервере и подключить к GitHub Actions.
