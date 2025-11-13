import {
 Links,
 Meta,
 Outlet,
 Scripts,
 ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";

export const links: Route.LinksFunction = () => [
 { rel: "preconnect", href: "https://fonts.googleapis.com" },
 {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous",
 },
 {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
 },
 { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="es">
   <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta />
    <Links />
   </head>
   <body className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
    {children}
    <ScrollRestoration />
    <Scripts />
   </body>
  </html>
 );
}

export default function Root() {
 return <Outlet />;
}