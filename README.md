# 💬 Sistema de Chat Colaborativo (WebSocket)

Este proyecto es una implementación de un sistema de mensajería instantánea en tiempo real utilizando **WebSockets**. Permite a múltiples usuarios conectarse simultáneamente, enviar mensajes y recibir notificaciones de estado sin necesidad de recargar la página (evitando long-polling).

## 🚀 Funcionalidades Principales

* **Comunicación Bidireccional en Tiempo Real:** Uso del protocolo WebSocket para mensajería instantánea.
* **Multiusuario:** Soporte para múltiples conexiones simultáneas.
* **Identidad Temporal:** Asignación automática de nombres de usuario (ej. `Usuario_4921`) al conectarse.
* **Notificaciones del Sistema:** Alertas visuales cuando un usuario se une (`🟢`) o abandona (`🔴`) el chat.
* **Historial de Sesión:** Los mensajes se acumulan en la vista del cliente mientras dura la sesión.
* **Despliegue en la Nube:** Servidor optimizado para correr en Render/Nube.

---

## 🛠️ Tecnologías Utilizadas

* **Backend:** Node.js
* **Protocolo:** WebSocket (Librería `ws`) + Servidor HTTP nativo.
* **Frontend:** HTML5, CSS3 y JavaScript (Vanilla).
* **Despliegue:** Render.
* **Diseño:** Modelo C4 (Contexto, Contenedores y Componentes).

---

## 📂 Arquitectura del Sistema

El sistema fue diseñado siguiendo el modelo C4 para asegurar una estructura escalable.

1.  **Cliente Web (SPA):** Interfaz de usuario que establece la conexión WebSocket.
2.  **Servidor WebSocket:** Orquestador central que gestiona las conexiones y realiza el *broadcast* de mensajes.

*(Aquí puedes insertar tus imágenes de los diagramas C4 si las exportaste)*

---

## 🔧 Instalación y Ejecución Local

Si deseas correr este proyecto en tu propia computadora:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/dorritonachito/chat-colaborativo-ws.git](https://github.com/dorritonachito/chat-colaborativo-ws.git)
    cd chat-colaborativo-ws
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor:**
    ```bash
    node server.js
    ```

4.  **Abrir el cliente:**
    Abre tu navegador y ve a: `http://localhost:8080`

---

## 📝 Estructura del Proyecto

```text
chat-colaborativo-ws/
├── node_modules/    # Dependencias del proyecto
├── index.html       # Interfaz de usuario (Cliente)
├── server.js        # Lógica del servidor y WebSockets
├── package.json     # Configuración de Node.js
└── .gitignore       # Archivos ignorados por Git


Desarrollado por: dorritonachito
