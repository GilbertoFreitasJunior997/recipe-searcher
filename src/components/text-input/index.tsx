import { ChangeEvent, FC } from "react"
import { TextInputProps } from "./types"

export const TextInput: FC<TextInputProps> = (props) => {
    const { onChange, label, ...defaultProps } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value || '';

        onChange?.(newValue);
    }

    const Input = (
        <input
            onChange={handleChange}
            className="border border-blue-200 rounded-md px-2 py-1 bg-gray-800/50 outline-none focus:border-blue-500 transition-all w-full"
            {...defaultProps}
        />
    )



    return (
        <>
            {label
                ? <label className="flex flex-col cursor-pointer w-full">
                    {label}
                    {Input}
                </label>
                : Input}
        </>
    );
}