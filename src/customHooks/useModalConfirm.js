import { useState } from "react"

export const useModalConfirm = () => {
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);

    const onOpenConfirm = () => {
        setIsOpenConfirm(true);
    }
    const onCloseConfirm = () => {
        setIsOpenConfirm(false);
    }
    return {
        isOpenConfirm,
        onOpenConfirm,
        onCloseConfirm
    }
}