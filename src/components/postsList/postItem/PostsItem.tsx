import React, {FC, memo} from 'react';
import {ResponseGetPostType} from "../../../api/postsAPI";
import userLogo from "../../../common/assects/logoUser.png"
import {useAppDispatch, useAppSelector} from "../../../store/config/hook";
import {activateCommentsWindow} from "../../../store/slices/commentSlice";
import {CommentsForItem} from "./commentsForItem/CommentsForItem";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/path/path";
import {Button, Card} from "react-bootstrap";


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
    //  console.log(post.userId)
    return (
        <div>
            <Card>
                <Card.Header>
                    <NavLink to={`${PATH.INFO_USER}/${post.userId}`}>
                        <img src={userLogo} alt={"logo_user"} style={{width: "60px"}}/>
                    </NavLink>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Button variant="outline-dark" onClick={activateWindowHandler}>Watch comments</Button>
                    {activePostId === post.id && <CommentsForItem postId={post.id}/>}
                </Card.Body>
            </Card>
        </div>
    );
});

