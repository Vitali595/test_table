import React from "react";
import style from "./CustomButton.module.css";

type CustomButtonPropsType = {
    title: string
    onClickHandler?: () => void
    type?: "button" | "submit" | "reset" | undefined
    styles?: object
    disabled?: boolean
}

export function CustomButton({title, onClickHandler = () => {},
                                 type = 'button', styles, disabled = false}: CustomButtonPropsType) {
    return (
      <button
          type={type}
          className={style.customButton}
          onClick={() => onClickHandler()}
          style={styles}
          disabled={disabled}
      >{title}</button>
    );
}