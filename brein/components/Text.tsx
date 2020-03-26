import React, { FC } from "react";
import { useTheme } from "../general/theming";

interface TextProps {
    type: "title" | "subtitle" | "body";
    size?: string | number;
    font?: "sans" | "mono";
    color?: string;
    children?: any;
}

const Text: FC<TextProps> = (props: TextProps) => {
    const theme = useTheme();

    const fontMap = {
        sans: theme.fontFamilyNormal,
        mono: theme.fontFamilyMono
    };

    const size = props.size || "1rem";
    const font = props.font || "sans";
    const color = props.color || theme.textColor;

    const style = {
        fontSize: size,
        fontFamily: fontMap[font],
        color: color
    };

    if (props.type === "title") {
        return <h1 style={{ margin: 0, fontWeight: "normal", ...style }}>{props.children}</h1>;
    }

    if (props.type === "subtitle") {
        return <h2 style={{ margin: 0, fontWeight: "normal", ...style }}>{props.children}</h2>;
    }

    if (props.type === "body") {
        return <p style={{ margin: 0, fontWeight: "normal", ...style }}>{props.children}</p>;
    }

    throw "invalid type";
};

export default Text;
