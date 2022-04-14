import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const disableReactDevTools = (): void => {
    const noop = (): void => undefined;
    const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (typeof DEV_TOOLS === "object") {
      for (const [key, value] of Object.entries(DEV_TOOLS)) {
        DEV_TOOLS[key] = typeof value === "function" ? noop : null;
      }
    }
  };

  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        {typeof window !== "undefined" && disableReactDevTools()}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
