export type UserType = {
    id: number
    email: string
    first_name: string
    pay_status: boolean
    last_name: string
    username: string
    profile_link: string
}

export type SearchDataType = {
    option: keyof UserType
    value: string
}

export type OptionType = {
    option: keyof UserType
    name: string
}

export type SortDataType = {
    option: keyof UserType
    flag: Boolean
}