# 🐱 Cat Breeds App

Aplicación móvil y web desarrollada con **Ionic 8** y **Angular 19**, que permite visualizar información detallada sobre distintas razas de gatos: características, país de origen, inteligencia, esperanza de vida y más.

---

## 🚀 Tecnologías usadas

- [Ionic 8](https://ionicframework.com/)
- [Angular 19](https://angular.io/)
- [Capacitor](https://capacitorjs.com/) (para integraciones nativas)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) (opcional si se está usando)
- API de razas de gatos (opcional, si es integrada)

---

## 📲 Características principales

- Listado de razas de gatos con imagen.
- Vista detallada de cada raza.
- Búsqueda en tiempo real con `ion-searchbar`.
- Splash screen personalizado.
- Diseño responsive adaptable a dispositivos móviles y web.
- Soporte para scroll y layout responsivo con imágenes fijas o adaptables.

---

## ⚙️ Instalación del proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/cat-breeds-app.git
cd cat-breeds-app
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Si usas Capacitor, instala también las plataformas nativas:

```bash
npx cap add android
npx cap add ios
```

> Asegúrate de tener Android Studio o Xcode configurado si vas a correrlo en dispositivos.

---

## ▶️ Ejecución en desarrollo (modo web)

```bash
ionic serve
```

---

## 📱 Ejecución en dispositivo móvil

1. Compila el proyecto:

```bash
ionic build
```

2. Sincroniza con Capacitor:

```bash
npx cap sync
```

3. Abre el proyecto nativo:

```bash
npx cap open android
# o
npx cap open ios
```

4. Ejecuta desde Android Studio o Xcode.

---

## 📦 Recursos personalizados

- `resources/icon.png`: Ícono de la app (1024x1024px)
- `resources/splash.png`: Imagen del splash screen (2732x2732px)

Para generar los recursos:

```bash
npm install -g cordova-res
cordova-res android --icon --splash --copy
cordova-res ios --icon --splash --copy
```

> Requiere tener instalada la carpeta `resources/` en la raíz del proyecto.

---

## 📁 Estructura básica

```
src/
├── app/
│   └── pages/
│       └── home/
│       └── breed-details/
├── assets/
│   └── images/
├── theme/
├── index.html
├── main.ts
```

---

## 📝 Créditos

Inspirado en el uso de [TheCatAPI](https://thecatapi.com/) y la comunidad de desarrolladores Ionic.

---

## 📄 Licencia

MIT
