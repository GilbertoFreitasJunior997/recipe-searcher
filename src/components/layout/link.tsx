import { FC } from "react";
import { LinkProps } from "./types";

const SELECTED_CLASSES = 'text-blue-500 underline underline-offset-4';

const UNSELECTED_CLASSSES = 'hover:text-blue-400'

export const Link: FC<LinkProps> = (props) => {
    const { text, isSelected = false } = props;

    return (
        <a href="#" title="Sample Navbar link" className={`font-bold transition-colors ${isSelected ? SELECTED_CLASSES : UNSELECTED_CLASSSES}`}> {text} </a>
    )
}