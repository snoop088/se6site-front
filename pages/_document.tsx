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
      <Head></Head>
      <body>
        {typeof window !== "undefined" && disableReactDevTools()}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
