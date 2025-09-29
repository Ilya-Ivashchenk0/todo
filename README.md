## Todo (React + TypeScript + Vite)

Короткая инструкция по запуску и работе с проектом.

### Требования
- Node.js >= 18
- npm >= 9

### Деплой проекта
- Открыть: [todo-55yd.vercel.app](https://todo-55yd.vercel.app)

Проверить версии:

```bash
node -v
npm -v
```

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Vite выведет адрес, например `http://localhost:5173`. Откройте его в браузере.

### Сборка production-версии

```bash
npm run build
```

Готовые файлы будут в директории `dist/`.

### Локальный предпросмотр собранной версии

```bash
npm run preview
```

### Проверка качества кода

- Линтинг (ESLint):

```bash
npm run lint
```

- Форматирование (Prettier):

```bash
npm run fix
```

### Полезное
- Точка входа: `src/main.tsx`
- Корневой компонент: `src/app.tsx`
- Конфиги TypeScript/Vite находятся в корне репозитория (`tsconfig*.json`, `vite.config.ts`).

Если что-то не запускается, удалите `node_modules` и `package-lock.json`, затем переустановите зависимости:

```bash
rimraf node_modules package-lock.json && npm install
```
