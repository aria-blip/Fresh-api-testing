import { type PageProps } from "$fresh/server.ts";
export default function App({ Component ,url }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ninja tracker</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <h2> {url.href } </h2>
        <Component />
      </body>
    </html>
  );
}
