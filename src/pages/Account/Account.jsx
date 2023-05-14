import React, { useEffect, useState } from "react";
import "./Account.scss";
import { useSelector } from "react-redux";
import { useModalSuccess } from "../../customHooks/useModalSuccess";
import Toast from "../../components/Toast/Toast";
import UserInfo from "../../components/UserInfo/UserInfo";
import { filteredPosts } from "../../redux/posts/posts.actions";
import Post from "../../components/Post/Post";
import { useForm } from "react-hook-form";
import { updateUser } from "../../redux/users/users.actions";
const Account = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { posts, postsFiltered } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.users);
  const { isOpenSuccess, onOpenSuccess, onCloseSuccess } = useModalSuccess();
  const [isEditMode, setIsEditMode] = useState(false);
  const onSubmit = (dataUser) => {
    if (isEditMode && user) {
      updateUser(user._id, dataUser, onOpenSuccess);
      setIsEditMode(isEditMode);
    }
    setIsEditMode(!isEditMode);
  };
  useEffect(() => {
    filteredPosts(posts, user);
    if (user) {
      setValue("username", user.username);
      setValue("email", user.email);
    }
  }, [user, posts, setValue]);
  return (
    <>
      {user !== null && (
        <div className="b-account">
          <div className="b-account__header">
            <h1 className="b-account__title">Mi Cuenta</h1>
          </div>
          <div className="b-account__main">
            <form onSubmit={handleSubmit(onSubmit)}>
              <UserInfo
                isEditMode={isEditMode}
                register={register}
                userInfo={user}
              />
            </form>
            <div>
              {postsFiltered.map((post) => {
                return (
                  <div key={post._id}>
                    <Post post={post} isAccount={true} onOpenSuccess={onOpenSuccess}/>
                  </div>
                );
              })}
            </div>
          </div>
          {isOpenSuccess && (
            <Toast
              isOpenSuccess={isOpenSuccess}
              onCloseSuccess={onCloseSuccess}
            />
          )}
        </div>
      )}
    </>
  );
};
export default Account;
