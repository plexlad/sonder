import type { LinksFunction } from "@remix-run/node";
import {
	Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
		{ rel: "stylesheet", href: stylesheet },
];

export default function App() {
	// Default tailwind styling for links
	const linkStyling = "m-5 hover:underline decoration-zinc-600 decoration-2 underline-offset-4 text-zinc-300";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&family=Rubik+Vinyl&display=swap" rel="stylesheet" />
				<Meta />
        <Links />
      </head>
      <body>
				<div>
					<header className="fixed flex w-screen z-50">
						<nav className="fixed flex w-screen z-50 bg-zinc-100">
							<Link to=".." className={linkStyling}>Home</Link>
							<div className="flex flex-1 justify-center">
								<Link to="app" className={linkStyling}>App</Link>
								<Link to="help" className={linkStyling}>Help</Link>
								<Link to="about" className={linkStyling}>About</Link>
								<Link to="contact" className={linkStyling}>Contact</Link>
							</div>
							<Link to="#" className={linkStyling}>
								Sign-in
							</Link>
						</nav>
					</header>
					<main>
						<Outlet />
					</main>
					<footer>
					</footer>
				</div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
