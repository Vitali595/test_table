import React, {useState} from "react";
import style from "./Table.module.css";
import {SortDataType, UserType} from "../common/types";
import {OPTIONS} from "../common/data";
import {CustomButton} from "../common/customButton/CustomButton";
import check from "./../common/images/checkMark.png";
import cross from "./../common/images/crossMark.png";

type TablePropsType = {
    users: UserType[]
    sortHandler: (sortData: SortDataType) => void
    changeHandler: (id: number) => void
    removeHandler: (id: number) => void
    disabled: boolean
};

export const Table = React.memo((
    {users, sortHandler, changeHandler, removeHandler, disabled}: TablePropsType
) => {
    const [flag, setFlag] = useState<boolean>(false);

    const onClickSortHandler = (option: keyof UserType) => {
        sortHandler({option, flag: !flag});
        setFlag(!flag);
    };

    return (
        <div className={style.wrapper}>
            <table className={style.table}>
                <thead className={style.thead}>
                <tr>
                    {
                        OPTIONS.map(({name, option}) => {
                            return <th
                                key={name}
                                className={style.th + ' ' + style.thm}
                                onClick={() => onClickSortHandler(option)}
                            >{name}</th>;
                        })
                    }
                    <th className={style.th}>Проект</th>
                    <th className={style.th}>Оплата</th>
                    <th className={style.th}/>
                    <th className={style.th}/>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(({
                                   id, last_name, first_name, username,
                                   pay_status, profile_link, email
                               }) => {
                        return <tr key={id}>
                            <td className={style.td}>{first_name}</td>
                            <td className={style.td}>{last_name}</td>
                            <td className={style.td}>{username}</td>
                            <td className={style.td}>{email}</td>
                            <td className={style.td}>
                                <a className={style.link} href={profile_link} target="_blank">Перейти</a>
                            </td>
                            <td className={style.td}>
                                <img className={style.img} src={pay_status ? check : cross} alt="mark"/>
                            </td>
                            <td className={style.td + ' ' + style.button}>
                                <CustomButton
                                    title="Изменить"
                                    styles={{'padding': '0.2rem'}}
                                    onClickHandler={() => changeHandler(id)}
                                    disabled={disabled}
                                />
                            </td>
                            <td className={style.td + ' ' + style.button}>
                                <CustomButton
                                    title="Удалить"
                                    styles={{'padding': '0.2rem'}}
                                    onClickHandler={() => removeHandler(id)}
                                    disabled={disabled}
                                />
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
});