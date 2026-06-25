import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-cream">Página no encontrada</h2>
        <p className="mt-2 text-sm text-slate">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-soft"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-cream">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-slate">
          Algo salió mal de nuestro lado. Probá refrescar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-soft"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-white/5"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "JH Broker" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "JH Broker" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0F172A" },
      { title: "broker de seguros" },
      { property: "og:title", content: "broker de seguros" },
      { name: "twitter:title", content: "broker de seguros" },
      { name: "description", content: "JH Broker Elevate is a premium, ultra-modern, high-conversion landing page for an insurance broker." },
      { property: "og:description", content: "JH Broker Elevate is a premium, ultra-modern, high-conversion landing page for an insurance broker." },
      { name: "twitter:description", content: "JH Broker Elevate is a premium, ultra-modern, high-conversion landing page for an insurance broker." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4dbd67f0-bb67-48b6-820e-af3527e7d8bb/id-preview-3ba856bc--c928e9b0-d3a5-4b6a-a6a2-d2c4ef4adb8d.lovable.app-1782261054940.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4dbd67f0-bb67-48b6-820e-af3527e7d8bb/id-preview-3ba856bc--c928e9b0-d3a5-4b6a-a6a2-d2c4ef4adb8d.lovable.app-1782261054940.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,500;1,9..144,700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
