# To-Do App con Usuarios - React + Electron

Este proyecto es una aplicación simple de lista de tareas, pero con un twist: permite múltiples usuarios, y cada uno tiene su propia lista guardada localmente. La app está hecha con React para la interfaz web, y también está preparada para funcionar con Electron como una app de escritorio.

---

## ¿Qué hace esta app?

- Puedes elegir tu usuario (simulando un login sencillo, sin backend).
- Cada usuario tiene su propia lista de tareas que se guarda en el navegador (`localStorage`).
- Puedes añadir, tachar y eliminar tareas.
- Puedes cerrar sesión para cambiar de usuario.
- Preparada para correr en web y en Electron (para desktop).

---

## Cómo funciona

La idea principal fue practicar el manejo de estados y persistencia local en React, además de integrar Electron para darle un plus de app de escritorio.

- **Gestión de usuarios:** En lugar de usar bases de datos o Firebase, creé un contexto React para manejar el usuario actual.
- **Persistencia:** Cada usuario tiene su lista guardada en `localStorage` bajo una clave que incluye su nombre, así la lista es independiente.
- **Interfaz sencilla:** Todo hecho con JSX y React hooks, buscando claridad y facilidad para seguir el código.
- **Electron:** La app está lista para ser empaquetada con Electron, lo que abre la puerta a futuras mejoras de escritorio.

---

## ¿Qué aprendí con este proyecto?

- A manejar el contexto para controlar sesión de usuario sin complicaciones.
- A guardar datos por usuario en `localStorage` y sincronizar el estado con React.
- A modularizar la aplicación en componentes y páginas.
- A integrar React con Electron para dar soporte a escritorio.
- A entender mejor la diferencia entre apps web y de escritorio, y cómo adaptarlas.

---

## Próximos pasos (por hacer)

- Añadir edición directa de tareas.
- Mejorar la experiencia con filtros o reordenamiento.
- Empaquetar y distribuir la app con Electron (quizás con protocolo personalizado para abrir desde web).
- Añadir autenticación real con backend o Firebase (para llevarlo un paso más allá).

---

## Cómo usarlo

1. Clona este repositorio.
2. Instala dependencias con `npm install`.
3. Corre la app en modo web con `npm start`.
4. Selecciona un usuario para entrar.
5. Añade y gestiona tus tareas.
6. Cuando quieras cambiar de usuario, usa el botón “Cerrar sesión”.

---

## Extras

Si te interesa, la app puede ser fácilmente preparada para empaquetar con Electron y convertirla en una app de escritorio.

---

¡Gracias por pasar por aquí! Si quieres ver más proyectos o detalles, échale un vistazo a mi portafolio.
