import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../store/config/hook";
import {CommentsItem} from "./CommentsItem";
import {getCommentsAC} from "../../../../store/slices/commentSlice";

interface CommentsForItemType {
    postId: number
}

export const CommentsForItem: FC<CommentsForItemType> = ({postId}) => {

    const comments = useAppSelector(state => state.comments.comments)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCommentsAC(postId))
    }, [dispatch, postId])

    return (
        <div>
            {comments
                .filter((comment) => comment.postId === postId)
                .map((comment, index) => (
                    <CommentsItem key={index} comment={comment}/>
                ))}
        </div>
    );
};

