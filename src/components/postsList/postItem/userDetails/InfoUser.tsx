import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../../utils/path";
import {useAppDispatch, useAppSelector} from "../../../../store/config/hook";
import {UserItem} from "./ItemUser/UserItem";
import {getUsersAC} from "../../../../store/slices/userSlice";

export const InfoUser = () => {

    const {userId} = useParams()
    const users = useAppSelector(state => state.users.users)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const BackToPostsHandler = () => {
        navigate(PATH.POST_PAGE)
    }

    useEffect(() => {
        if (userId && users) {
            dispatch(getUsersAC(+userId))
        }
    }, [dispatch, userId])

    console.log(users)
    return (
        <div>
            InfoUser
            <div>{userId}</div>
            <button onClick={BackToPostsHandler}>Back to Posts</button>
            {users.map((user, index) => <UserItem key={index} user={user} userId={userId}/>)}
        </div>
    );
};

