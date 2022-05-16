import style from "./Button.module.css"

interface Props {
    title: string
    onClick?: () => void
}

export default function Button({title, onClick}: Props) {
    return (
        <button className={style.button} onClick={onClick}>
            {title}
        </button>
    )
}
