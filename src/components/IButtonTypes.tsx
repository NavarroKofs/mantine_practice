import { MantineNumberSize, ButtonProps } from "@mantine/core";

export interface IButtonTypes {
    id: number,
    text: string,
    variant: "outline" | "gradient" | "subtle" | "filled" | "light" | "white" | "default" | undefined,
    color?: string,
    radius: MantineNumberSize | undefined
}