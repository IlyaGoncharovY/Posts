import React, {FC, memo} from 'react';
import {ResponseGetPostType} from "../../../api/postsAPI";
import userLogo from "../../../common/assects/logoUser.png"
import {useAppDispatch, useAppSelector} from "../../../store/config/hook";
import {activateCommentsWindow} from "../../../store/slices/commentSlice";
import {CommentsForItem} from "./commentsForItem/CommentsForItem";


interface PostsItemType {
    post: ResponseGetPostType
}

export const PostsItem: FC<PostsItemType> = memo(({post}) => {

    // const activateWindow = useAppSelector(state => state.comments.activateWindow)
    const activePostId = useAppSelector(state => state.comments.activePostId)

    const dispatch = useAppDispatch()

    const activateWindowHandler = () => {
        const newActivePostId =
            activePostId === post.id ? null : post.id
        dispatch(activateCommentsWindow(newActivePostId))
    }

    return (
        <div>
            <div>
                <img src={userLogo} alt={"logo_user"} style={{width: "60px"}}/>
            </div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <button onClick={activateWindowHandler}>watch comments</button>
            {activePostId === post.id && <CommentsForItem postId={post.id}/>}
        </div>
    );
});

