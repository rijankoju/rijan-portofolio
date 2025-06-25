import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../src/theme";
import { GlobalStyles } from "../src/global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "../src/portfolio";
import "../src/index.css";
import "../src/assests/font-awesome/css/all.css";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
  );
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Component {...pageProps} theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Component {...pageProps} theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}
