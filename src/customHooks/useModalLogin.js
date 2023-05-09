import { useState } from "react"

export const useModalLogin = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const onOpenLogin = () => {
        setIsOpenLogin(true);
    }
    const onCloseLogin = () => {
        setIsOpenLogin(false);
    }
    return {
        isOpenLogin,
        onOpenLogin,
        onCloseLogin
    }
}