import React, { FC } from "react";

import { styled } from "linaria/react";
import Text from "./Text";
import { useTheme } from "../general/theming";
import BREINLogo from "./BREINLogo";
import { DollarIcon, PeopleIcon, TrendIcon } from "./layout_icons";

interface MainGridProps {
    bgColor: string;
}
const MainGrid = styled.div<MainGridProps>`
    display: grid;
    background-color: ${props => props.bgColor};
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
    @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Sidebar = styled.div`
    grid-area: 1 / 1 / 10 / 2;
    @media only screen and (max-width: 800px) {
        display: none;
    }
    /* border-right: solid 1px #6f7f7d; */
`;

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    grid-area: 1 / 2 / 2 / 10;
    max-height: 4.2rem;
    @media only screen and (max-width: 800px) {
        grid-area: 1 / 1 / 1 / 10;
    }
`;

const Content = styled.div`
    grid-area: 2 / 2 / 10 / 10;
    padding: 2rem;
    @media only screen and (max-width: 800px) {
        grid-area: 2 / 1 / 10 / 10;
    }
    overflow: scroll;
`;

interface OptionProps {
    bgColor: string;
    hoverColor: string;
    active?: boolean;
}

const Option = styled.div<OptionProps>`
    display: flex;
    align-items: center;
    padding-left: 4rem;
    margin-bottom: 1rem;
    background-color: ${props => props.bgColor};
    transition: 0.3s;
    user-select: none;
    -webkit-touch-callout: none;
    :hover {
        cursor: pointer;
        background-color: ${props => (props.active ? props.bgColor : props.hoverColor)};
    }
`;

export interface UserInformation {
    picture: string;
    name: string;
    role: string;
    sub: string;
}

interface LayoutProps {
    user: UserInformation;
    children?: any;
    title?: string;
    selected?: number;
    onSelect?: (key: number) => void;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
    const theme = useTheme();

    const options = [
        { icon: DollarIcon, title: "SALES" },
        { icon: PeopleIcon, title: "VISITS" },
        { icon: TrendIcon, title: "FINANCIAL" }
    ];

    return (
        <MainGrid bgColor={theme.backgroundColor}>
            <TopBar>
                <div style={{ marginRight: "auto", marginLeft: "2.4rem" }}>
                    <div>
                        <Text type={"title"} size={"1.2rem"}>
                            {props.title}
                        </Text>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        <Text type="title" size={"0.875rem"} color={theme.textColor}>
                            {props.user.name}
                        </Text>
                        <Text type="body" font="sans" size={"0.75rem"} color={theme.primaryColor}>
                            role: {props.user.role}
                        </Text>
                    </div>
                    <img
                        style={{
                            marginLeft: "1rem",
                            marginRight: "1rem",
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%"
                        }}
                        src={props.user.picture}
                    />
                </div>
            </TopBar>
            <Sidebar>
                <div>
                    <div style={{ marginTop: "2rem" }}>
                        <BREINLogo width={"auto"} height={"60"} />
                    </div>
                    <div style={{ marginTop: "4rem" }}>
                        {options.map((option, i) => {
                            return (
                                <Option
                                    key={i}
                                    bgColor={props.selected === i ? theme.primaryColor : theme.backgroundColor}
                                    hoverColor={theme.inputColor}
                                    onClick={() => props.onSelect(i)}
                                    active={i === props.selected}
                                >
                                    <div style={{ minWidth: "3rem" }}>
                                        <option.icon
                                            color={i === props.selected ? "#121212" : theme.textColor}
                                        ></option.icon>
                                    </div>
                                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                                        <Text
                                            type="subtitle"
                                            font="sans"
                                            color={i === props.selected ? "#121212" : theme.textColor}
                                        >
                                            {option.title}
                                        </Text>
                                    </div>
                                </Option>
                            );
                        })}
                    </div>
                </div>
            </Sidebar>
            <Content>{props.children}</Content>
        </MainGrid>
    );
};

export default Layout;
