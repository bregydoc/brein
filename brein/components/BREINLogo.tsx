import React, { FC } from "react";
import { useTheme } from "../general/theming";
import { motion } from "framer-motion";

interface BREINLogo {
    width?: string;
    height?: string;
}

const BREINLogo: FC<BREINLogo> = (props: BREINLogo) => {
    const theme = useTheme();

    return (
        <motion.svg
            width={`${props.width || "252"}`}
            height={`${props.height || "103"}`}
            viewBox="0 0 252 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                animate={{ fill: theme.textColor }}
                initial={{ fill: theme.primaryColor }}
                transition={{ type: "spring", delay: 0.3 }}
                d="M118.569 102.438C110.123 102.161 96.6617 102.438 96.6617 102.438V56.0986H119.688C153.669 56.0986 137.402 0.611184 168.054 1.45265C175.064 1.6451 180.931 1.45265 180.931 1.45265V11.026H169.576C137.743 11.026 153.282 66.0074 119.688 66.0074H108.335V74.1475C108.335 74.1475 115.255 74.2558 119.688 74.1475C153.576 73.3201 137.337 18.888 170.286 18.888H180.931V28.7343H168.054C143.167 28.7343 149.177 84.5726 121.926 84.5726H108.335V92.6835H119.688C153.769 92.6835 141.644 36.7733 165.261 36.7733H180.931V46.4711H169.576C138.107 46.4711 159.28 103.772 118.569 102.438Z"
                // fill={theme.textColor}
            />
            <motion.path
                animate={{ fill: theme.textColor }}
                initial={{ fill: theme.primaryColor }}
                transition={{ type: "spring", delay: 0.4 }}
                d="M200.075 0.708942H187.249V46.8416H200.075V0.708942Z"
                // fill={theme.textColor}
            />
            <motion.path
                animate={{ fill: theme.textColor }}
                initial={{ fill: theme.primaryColor }}
                transition={{ type: "spring", delay: 0.5 }}
                d="M217.452 0.502075H205.867V47.0485H219.107V21.1894L240.66 47.0485H252V0.502075H240.001V27.8093L217.452 0.502075Z"
                // fill={theme.textColor}
            />
            <motion.path
                animate={{ fill: theme.textColor }}
                initial={{ fill: theme.primaryColor }}
                transition={{ type: "spring", delay: 0.1 }}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.9625 102.618H6.10352e-05V56.0888H23.7671C33.3746 56.0888 40.8124 59.4406 40.8124 68.2164C40.8124 76.2516 34.5699 77.765 34.5699 77.765C34.5699 77.765 42.4182 80.3811 42.4182 89.3506C42.4182 100.189 32.3416 102.618 24.9625 102.618ZM11.6609 73.9464V66.3677L22.8862 66.3677C25.1748 66.3677 28.8853 66.944 28.8853 70.0094C28.8853 71.9779 27.2692 73.8143 25.1748 73.8143C19.3677 73.8143 11.6609 73.9464 11.6609 73.9464ZM11.6609 84.0017V92.5522C11.6609 92.5522 20.3558 92.4031 26.9075 92.4031C29.2704 92.4031 31.0937 90.3313 31.0937 88.1104C31.0937 84.652 26.9075 84.0017 24.3255 84.0017L11.6609 84.0017Z"
                // fill={theme.textColor}
            />
            <motion.path
                animate={{ fill: theme.textColor }}
                initial={{ fill: theme.primaryColor }}
                transition={{ type: "spring", delay: 0.2 }}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.7161 56.1211H74.2029C84.1584 56.1211 91.02 62.5365 91.02 72.6932C91.02 82.8498 80.1299 86.0964 80.1299 86.0964L93.1143 102.222H78.2451L66.5172 86.8958H61.2816V102.222H48.7161V56.1211ZM61.1988 66.3677V77.2715H73.4148C77.3798 77.2715 79.0065 74.3581 79.0065 72.1372C79.0065 68.1214 75.9565 66.3677 72.2383 66.3677H61.1988Z"
                // fill={theme.textColor}
            />
        </motion.svg>
    );
};

export default BREINLogo;
