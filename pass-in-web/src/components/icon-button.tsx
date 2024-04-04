import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
    transparente?: boolean
}

export function IconButton({transparente,  ...props} : IconButtonProps){
    return(
        <button
            {...props }
            className={twMerge(
                "border border-white/10 rounded-md p-1.5",
                transparente ? "bg-black/20" : "bg-white/10 border",
                props.disabled ? "opacity-50" : null,
            )}
        />
    )
} 