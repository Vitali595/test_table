import React, {useCallback, useEffect, useState} from "react";
import style from "./App.module.css";
import {Search} from "./search/Search";
import {Table} from "./table/Table";
import {OPTIONS, USER, USERS} from "./common/data";
import {SearchDataType, SortDataType, UserType} from "./common/types";
import {AddUser} from "./userForm/AddUser";
import {ChangeUser} from "./userForm/ChangeUser";

function App() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
    const [user, setUser] = useState<UserType>(USER);

    useEffect(() => {
        setUsers(USERS);
        setFilteredUsers(USERS);
    }, []);

    const searchHandler = useCallback(({value, option}: SearchDataType) => {
        if (value) {
            const foundUsers = users.filter((el) => {
                return String(el[option]).toLowerCase().includes(value.toLowerCase());
            });
            setFilteredUsers(foundUsers);
        } else {
            setFilteredUsers(users);
        }
    }, [users]);

    const sortHandler = useCallback(({option, flag}: SortDataType) => {
        const sortedUsers = users.sort((a,b) => {
            if (flag) {
                return a[option] > b[option] ? 1 : -1;
            } else {
                return a[option] < b[option] ? 1 : -1;
            }
        });
        setFilteredUsers(sortedUsers);
    }, [users]);

    const addUserHandler = useCallback((newUser: UserType) => {
        const allUsers = [...users, newUser];
        setUsers(allUsers);
        setFilteredUsers(allUsers);
    }, [users]);

    const removeHandler = useCallback((userId: number) => {
        const updatedUsers = users.filter(({id}) => +id !== +userId);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
    }, [users]);

    const changeHandler = useCallback((userId: number) => {
        const foundUser = users.find(({id}) => +id === +userId) || USER;
        setUser(foundUser);
    }, [users]);

    const changeUserHandler = useCallback((changedUser: UserType) => {
        const updatedUsers = users.map(el => el.id === changedUser.id ? changedUser : el);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setUser(USER);
    }, [users]);

    return (
        <div className={style.app}>
            <div className={style.wrapper}>
                <Search searchHandler={searchHandler} options={OPTIONS}/>
                {
                    user.id
                        ? <ChangeUser changeUserHandler={changeUserHandler} values={user}/>
                        : <AddUser addUserHandler={addUserHandler} values={user}/>
                }
                <Table
                    users={filteredUsers}
                    sortHandler={sortHandler}
                    changeHandler={changeHandler}
                    removeHandler={removeHandler}
                    disabled={!!user.id}
                />
            </div>
        </div>
    );
}

export default App;
