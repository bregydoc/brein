import React, { FC } from "react";
import { styled } from "linaria/react";
import { useTheme } from "../general/theming";
import { motion } from "framer-motion";
import { css } from "linaria";

// interface ButtonContainerProps {
//     bgColor: string;
// }

const buttonContainer = css`
    background-size: 200% 100%;
    background-image: linear-gradient(to right, var(--bg-color) 50%, var(--sec-color) 50%);
    /* background-color: var(--bg-color); */
    display: flex;
    padding: 0.6rem 2rem;
    align-items: center;
    user-select: none;
    -webkit-touch-callout: none;
    :hover {
        cursor: pointer;
    }
`;

interface ButtonGithubProps {
    loading?: boolean;
    onClick?: () => void;
}

const GithubButton: FC<ButtonGithubProps> = (props: ButtonGithubProps) => {
    const theme = useTheme();

    return (
        <motion.div whileHover={{ scale: 1.1 }} onClick={props.onClick}>
            <motion.div
                className={buttonContainer}
                animate={
                    props.loading && {
                        backgroundPosition: "100% 0"
                    }
                }
                transition={{ type: "spring", damping: 0 }}
                //@ts-ignore
                style={{ "--bg-color": theme.textColor, "--sec-color": theme.secondaryColor }}
            >
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.1875 22.5106V18.6406C15.225 18.1638 15.1606 17.6844 14.9985 17.2344C14.8364 16.7844 14.5804 16.374 14.2475 16.0306C17.3875 15.6806 20.6875 14.4906 20.6875 9.03062C20.6872 7.63445 20.1502 6.29182 19.1875 5.28062C19.6434 4.05913 19.6111 2.70897 19.0975 1.51062C19.0975 1.51062 17.9175 1.16062 15.1875 2.99062C12.8955 2.36944 10.4795 2.36944 8.1875 2.99062C5.4575 1.16062 4.2775 1.51062 4.2775 1.51062C3.76388 2.70897 3.73164 4.05913 4.1875 5.28062C3.21763 6.29932 2.68002 7.65408 2.6875 9.06062C2.6875 14.4806 5.9875 15.6706 9.1275 16.0606C8.7985 16.4006 8.54476 16.806 8.38281 17.2505C8.22085 17.6951 8.15431 18.1687 8.1875 18.6406V22.5106M8.1875 19.5106C3.1875 21.0106 3.1875 17.0106 1.1875 16.5106L8.1875 19.5106Z"
                        stroke={theme.backgroundColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div
                    style={{
                        color: theme.backgroundColor,
                        fontFamily: theme.fontFamilyNormal,
                        fontWeight: "bold",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        marginLeft: "1rem"
                    }}
                >
                    INGRESS WITH GITHUB
                </div>
            </motion.div>
        </motion.div>
    );
};

export default GithubButton;
