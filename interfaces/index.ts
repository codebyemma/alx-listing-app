export interface CardProps {
    title: string;
    description: string;
    image: string
}

export interface ButtonProps {
    title: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
}