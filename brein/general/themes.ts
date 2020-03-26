// import {ThemingType} from '@callstack/react-theme-provider'

interface Theme {
    backgroundColor: string;
    textColor: string;
    inputColor: string;
    inputFocusColor: string;
    inputPlaceholderColor: string;
    inputPlaceholderFocusColor: string;
    primaryColor: string;
    secondaryColor: string;
    fontFamilyMono: string;
    fontFamilyNormal: string;
}

interface BREINThemes {
    light: Theme;
    dark: Theme;
}

const themes: BREINThemes = {
    light: {
        backgroundColor: "#FFFFFF",
        textColor: "#202020",

        inputColor: "#e0f8f1",
        inputFocusColor: "#a3ebd5",
        inputPlaceholderColor: "#95a49f",
        inputPlaceholderFocusColor: "#86BAA9",

        primaryColor: "#A3EBD5",
        secondaryColor: "#2d3243",
        fontFamilyMono: `"PT Mono", monospace`,
        fontFamilyNormal: `'Open Sans', sans-serif`
    },
    dark: {
        backgroundColor: "#121212",
        textColor: "#FFFFFF",

        inputColor: "#4f4f4f",
        inputFocusColor: "#6B8582",
        inputPlaceholderColor: "#858585",
        inputPlaceholderFocusColor: "#4A6360",

        primaryColor: "#78F6D0",
        secondaryColor: "#E1E7F8",
        fontFamilyMono: `"PT Mono", monospace`,
        fontFamilyNormal: `'Open Sans', sans-serif`
    }
};

export default themes;
