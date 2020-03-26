import React, { FC } from "react";
import { styled } from "linaria/react";
import { useTheme } from "../general/theming";
import { motion } from "framer-motion";

interface ButtonWrapProps {
    font: string;
    bgColor: string;
    textColor: string;
    disabled: boolean;
}

const ButtonWrap = styled.div<ButtonWrapProps>`
    width: fit-content;

    padding: 0.6rem 1.8rem;
    font-size: 1rem;
    font-family: ${props => props.font};
    background-color: ${props => (props.disabled ? "#6b8582" : props.bgColor)};
    color: ${props => props.textColor};
    transition: 0.3s;
    :hover {
        cursor: pointer;
        /* filter: brightness(110%); */
    }
`;

interface ButtonProps {
    primary?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    children: any;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const theme = useTheme();
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            onClick={props.onClick}
        >
            <ButtonWrap
                bgColor={theme.primaryColor}
                textColor={"#202020"}
                font={theme.fontFamilyNormal}
                disabled={props.disabled}
            >
                {props.children}
            </ButtonWrap>
        </motion.div>
    );
};

export default Button;
