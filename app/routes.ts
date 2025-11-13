import {
 type RouteConfig,
 index,
 route,
} from "@react-router/dev/routes";

export default [
 index("routes/home.tsx"),
 route("gatitos", "routes/gatitos.tsx"),
 route("sobre-nosotros", "routes/sobre-nosotros.tsx"),
 route("proceso-adopcion", "routes/proceso-adopcion.tsx"),
 route("contacto", "routes/contacto.tsx"),
 route("gatitos/:id", "routes/gatito-detalle.tsx"),
] satisfies RouteConfig;