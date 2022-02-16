import React from "react";
import {UserForm} from "./UserForm";
import {CustomButton} from "../common/customButton/CustomButton";
import {UserType} from "../common/types";

type AddUserPropsType = {
    addUserHandler: (newUser: UserType) => void
    values: UserType
}

export const AddUser = React.memo(({addUserHandler, values}: AddUserPropsType) => {
    return (
        <UserForm setUserData={addUserHandler} values={values}>
            <CustomButton title="Добавить" type="submit"/>
        </UserForm>
    );
});