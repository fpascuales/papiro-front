import { useState } from "react"

export const useModalUser = () => {
    const [isOpenUser, setIsOpenUser] = useState(false);

    const onOpenUser = () => {
        setIsOpenUser(true);
    }
    const onCloseUser = () => {
        setIsOpenUser(false);
    }
    return {
        isOpenUser,
        onOpenUser,
        onCloseUser
    }
}