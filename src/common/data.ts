import {OptionType, UserType} from "./types";

export const USERS: UserType[] = [
    {
        id: 14,
        email: "antonida@mail.com",
        first_name: "Antonida",
        pay_status: false,
        last_name: "White",
        username: "AntonidaW",
        profile_link: "https://fizikl.ru/"
    },
    {
        id: 17,
        email: "butonchick@gmail.com",
        first_name: "",
        pay_status: true,
        last_name: "Zorro",
        username: "ananimus007",
        profile_link: "https://translate.google.com/?sl=de&tl=ru&text=Herzlich%20willkommen!&op=translate"
    },
    {
        id: 8,
        email: "vasya2007@mail.ru",
        first_name: "Вася",
        pay_status: false,
        last_name: "Пупкин",
        username: "superVasssya",
        profile_link: ""
    },
    {
        id: 12,
        email: "antonio@mail.com",
        first_name: "Anton",
        pay_status: true,
        last_name: "Black",
        username: "ABlack",
        profile_link: "https://translate.google.com/"
    }
];

export const USER: UserType = {
    id: 0,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    profile_link: '',
    pay_status: false,
};

export const OPTIONS: OptionType[] = [
    {option: 'first_name', name: 'Имя'},
    {option: 'last_name', name: 'Фамилия'},
    {option: 'username', name: 'Ник'},
    {option: 'email', name: 'Почта'}
];