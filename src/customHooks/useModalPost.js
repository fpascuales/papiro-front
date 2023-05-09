import { useState } from "react"

export const useModalPost = () => {
    const [isOpenPost, setIsOpenPost] = useState(false);

    const onOpenPost = () => {
        setIsOpenPost(true);
    }
    const onClosePost = () => {
        setIsOpenPost(false);
    }
    return {
        isOpenPost,
        onOpenPost,
        onClosePost
    }
}