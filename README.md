# Sistema de Gestión de Usuarios

Un sistema moderno de gestión de usuarios basado en React con autenticación y operaciones CRUD.

## Descripción del Proyecto

Esta es una aplicación web full-stack construida con React que proporciona funcionalidad de gestión de usuarios, incluyendo:
- Autenticación de usuarios (inicio de sesión/registro)
- Listado de usuarios
- Creación y edición de usuarios
- Rutas protegidas

## Tecnologías Utilizadas

- **Framework Frontend**: React 19
- **Biblioteca UI**: Material-UI (MUI) v7
- **Enrutamiento**: React Router DOM v7
- **Manejo de Formularios**: Formik con validación Yup
- **Cliente HTTP**: Axios
- **Autenticación**: JWT (JSON Web Tokens)

## Estructura del Proyecto

```
src/
├── components/     # Componentes UI reutilizables
├── context/       # Proveedores de contexto React
├── hooks/         # Hooks personalizados de React
├── pages/         # Componentes de página
├── services/      # Servicios de API y autenticación
├── styles/        # Archivos CSS y estilos
└── App.js         # Componente principal de la aplicación
```

## Características

- **Autenticación**
  - Funcionalidad de inicio de sesión
  - Sistema de registro
  - Rutas protegidas
  - Autenticación basada en JWT

- **Gestión de Usuarios**
  - Listar todos los usuarios
  - Crear nuevos usuarios
  - Editar usuarios existentes
  - Validación de formularios

## Comenzando

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm test`: Inicia el ejecutor de pruebas
- `npm run build`: Construye la aplicación para producción
- `npm run eject`: Expulsa de Create React App

## Variables de Entorno

Crea un archivo `.env` en el directorio raíz con las siguientes variables:

```
REACT_APP_API_URL=tu_url_api
```

## Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/IncreibleCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna IncreibleCaracteristica'`)
4. Haz push a la rama (`git push origin feature/IncreibleCaracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
