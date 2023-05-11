import { useState } from "react"

export const useModalSuccess = () => {
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    const onOpenSuccess = () => {
        setIsOpenSuccess(true);
    }
    const onCloseSuccess = () => {
        setIsOpenSuccess(false);
    }
    return {
        isOpenSuccess,
        onOpenSuccess,
        onCloseSuccess
    }
}