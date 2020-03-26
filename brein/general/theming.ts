import { createTheming } from "@callstack/react-theme-provider";
import themes from "./themes";

const { ThemeProvider, useTheme } = createTheming(themes.dark);

export { ThemeProvider, useTheme };
