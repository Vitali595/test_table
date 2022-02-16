import React from "react";
import {UserForm} from "./UserForm";
import {CustomButton} from "../common/customButton/CustomButton";
import {UserType} from "../common/types";

type ChangeUserPropsType = {
    changeUserHandler: (user: UserType) => void
    values: UserType
}

export const ChangeUser = React.memo(({changeUserHandler, values}: ChangeUserPropsType) => {
    return (
        <UserForm setUserData={changeUserHandler} values={values}>
            <CustomButton title="Изменить" type="submit"/>
        </UserForm>
    );
});