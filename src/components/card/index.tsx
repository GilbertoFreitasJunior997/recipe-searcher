import { FC } from "react";
import { CardProps } from "./types";

export const Card: FC<CardProps> = (props) => {
    const { header, footer, className, onClick } = props;

    return (
        <div className={`w-full h-56 flex flex-col shadow-lg ${className}`} onClick={onClick}>
            <div className="h-44 w-full">
                {header}
            </div>

            <div className="flex-grow">
                {footer}
            </div>
        </div>
    )
}