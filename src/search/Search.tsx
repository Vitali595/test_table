import React, {ChangeEvent, useState} from "react";
import style from "./Search.module.css";
import {OptionType, SearchDataType, UserType} from "../common/types";
import {CustomButton} from "../common/customButton/CustomButton";

type SearchPropsType = {
    searchHandler: (values: SearchDataType) => void
    options: OptionType[]
}

export const Search = React.memo(({searchHandler, options}: SearchPropsType) => {
    const [values, setValues] = useState<SearchDataType>({value: '', option: options[0].option});

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, value: e.currentTarget.value});
    };

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setValues({...values, option: e.currentTarget.value as keyof UserType});
    };

    return (
        <div className={style.search}>
            <div className={style.text}>Test task: User_Table</div>
            <div className={style.searchGroup}>
                <input className={style.input} type="text" onChange={onChangeInput} value={values.value}/>
                <select className={style.select} name="select" onChange={onChangeSelect}>
                    {
                        options.map(({option, name}) => {
                            return <option key={name} value={option}>{name}</option>;
                        })
                    }
                </select>
                <CustomButton title="Найти" onClickHandler={() => searchHandler(values)} styles={{'alignSelf': 'end'}}/>
            </div>
        </div>
    );
});