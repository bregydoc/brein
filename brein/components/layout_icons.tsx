import { FC } from "react";
import { useTheme } from "../general/theming";

interface IconProps {
    color?: string;
}
export const DollarIcon: FC<IconProps> = props => {
    const theme = useTheme();
    return (
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.00073 1.66663V23.6666M12.0007 5.66663H4.50073C3.57247 5.66663 2.68224 6.03538 2.02586 6.69175C1.36948 7.34813 1.00073 8.23837 1.00073 9.16663C1.00073 10.0949 1.36948 10.9851 2.02586 11.6415C2.68224 12.2979 3.57247 12.6666 4.50073 12.6666H9.50073C10.429 12.6666 11.3192 13.0354 11.9756 13.6918C12.632 14.3481 13.0007 15.2384 13.0007 16.1666C13.0007 17.0949 12.632 17.9851 11.9756 18.6415C11.3192 19.2979 10.429 19.6666 9.50073 19.6666H1.00073"
                stroke={props.color || theme.textColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const PeopleIcon: FC<IconProps> = props => {
    const theme = useTheme();
    return (
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.0007 19.0597V17.0597C17.0007 15.9988 16.5793 14.9814 15.8292 14.2313C15.079 13.4811 14.0616 13.0597 13.0007 13.0597H5.00073C3.93987 13.0597 2.92245 13.4811 2.17231 14.2313C1.42216 14.9814 1.00073 15.9988 1.00073 17.0597V19.0597M23.0007 19.0597V17.0597C23.0001 16.1734 22.7051 15.3125 22.1621 14.612C21.6191 13.9115 20.8589 13.4113 20.0007 13.1897M16.0007 1.18969C16.8611 1.40999 17.6238 1.91039 18.1684 2.612C18.713 3.31361 19.0086 4.17652 19.0086 5.06469C19.0086 5.95286 18.713 6.81577 18.1684 7.51738C17.6238 8.21899 16.8611 8.71939 16.0007 8.93969M13.0007 5.05969C13.0007 7.26883 11.2099 9.05969 9.00073 9.05969C6.79159 9.05969 5.00073 7.26883 5.00073 5.05969C5.00073 2.85055 6.79159 1.05969 9.00073 1.05969C11.2099 1.05969 13.0007 2.85055 13.0007 5.05969Z"
                stroke={props.color || theme.textColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const TrendIcon: FC<IconProps> = props => {
    const theme = useTheme();
    return (
        <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.576 1.05957L14.076 10.5596L9.07599 5.55957L1.57599 13.0596M23.576 1.05957H17.576M23.576 1.05957V7.05957"
                stroke={props.color || theme.textColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
