import { AppProps } from "next/app";
import { ThemeProvider } from "../general/theming";

const CustomApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default CustomApp;
