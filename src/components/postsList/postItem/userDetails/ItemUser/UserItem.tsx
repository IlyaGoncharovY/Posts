import React, {FC, useEffect} from 'react';
import {ResponseUserType} from "../../../../../api/userAPI";
import {useAppDispatch, useAppSelector} from "../../../../../store/config/hook";
import {PostForUserItem} from "./postForUserItem/PostForUserItem";
import {getPostsForUserAC} from "../../../../../store/slices/postSlice";

interface ItemUserType {
    user: ResponseUserType
    userId: string | undefined
}

export const UserItem: FC<ItemUserType> = ({user, userId}) => {

    const postsForUser = useAppSelector(state => state.posts.postsForUser)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userId && userId) {
            dispatch(getPostsForUserAC(+userId))
        }
    }, [dispatch, userId])

    return (
        <div>
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.website}</li>
                <li>{user.phone}</li>
            </ul>
            <div>
                <div>
                    Posts:
                </div>
                <div>
                    {postsForUser.map((postForUser, index)=> <PostForUserItem key={index} postForUser={postForUser}/>)}
                </div>
            </div>
        </div>
    );
};

