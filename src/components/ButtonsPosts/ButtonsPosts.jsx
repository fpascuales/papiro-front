import React from 'react';
import "./ButtonsPosts.scss";
import { DeleteForever, RateReview } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { deletePost } from '../../redux/posts/posts.actions';
import { useModalPost } from '../../customHooks/useModalPost';
import ModalPost from '../ModalPost/ModalPost';
const ButtonsPosts = ({ post, onOpenSuccess }) => {
  const { isOpenPost, onOpenPost, onClosePost } = useModalPost();
  const postDeleted = () => {
    deletePost(post._id, onOpenSuccess);
  };
  return (
    <div className="b-post-icons">
      <Tooltip title="Editar" placement="bottom">
        <RateReview className="b-post-icons__icon" onClick={onOpenPost} />
      </Tooltip>
      <Tooltip title="Eliminar" placement="bottom">
        <DeleteForever className="b-post-icons__icon" onClick={postDeleted} />
      </Tooltip>
      {isOpenPost && (
        <div className="modal-post">
          <ModalPost onClosePost={onClosePost} isEditing={true} post={post} onOpenSuccess={onOpenSuccess} />
        </div>
      )}
    </div>
  );
};

export default ButtonsPosts;