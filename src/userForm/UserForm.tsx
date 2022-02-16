import React, {FormEvent, ReactElement} from "react";
import style from "./UserForm.module.css";
import {randomNumber} from "../common/helpers";
import {UserType} from "../common/types";

type UserFormPropsType = {
    values: UserType
    setUserData: (newUser: UserType) => void
    children: ReactElement<any, any>
}

export const UserForm = React.memo(({values, setUserData, children}: UserFormPropsType) => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {
            first_name, last_name, username,
            email, profile_link
        } = Object.fromEntries(new FormData(e.currentTarget).entries());

        if ([first_name, last_name, username, email, profile_link].every(el => el.toString().trim() !== '')) {
            setUserData({
                id: values.id ? values.id : randomNumber(),
                first_name: String(first_name),
                last_name: String(last_name),
                username: String(username),
                email: String(email),
                profile_link: String(profile_link),
                pay_status: values.pay_status ? values.pay_status : false,
            });
            //@ts-ignore
            document.userForm.reset();
        }
    };

    return (
        <form id="userForm" name="userForm" onSubmit={onSubmit} className={style.form}>
            <input
                id="first_name"
                name="first_name"
                pattern="[a-zA-ZА-Яа-яЁё0-9]+"
                className={style.input}
                defaultValue={values.first_name}
                placeholder="Имя"
            />
            <input
                id="last_name"
                name="last_name"
                pattern="[a-zA-ZА-Яа-яЁё0-9]+"
                className={style.input}
                defaultValue={values.last_name}
                placeholder="Фамилия"
            />
            <input
                id="username"
                name="username"
                pattern="[a-zA-ZА-Яа-яЁё0-9]+"
                className={style.input}
                defaultValue={values.username}
                placeholder="Ник"
            />
            <input
                id="email"
                name="email"
                pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
                className={style.input}
                defaultValue={values.email}
                placeholder="Почта"
            />
            <input
                id="profile_link"
                name="profile_link"
                className={style.input}
                defaultValue={values.profile_link}
                placeholder="Ссылка на проект"
            />
            <div className={style.button}>
                {children}
            </div>
        </form>
    );
});