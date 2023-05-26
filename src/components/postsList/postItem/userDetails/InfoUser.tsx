import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../../utils/path";
import {useAppDispatch, useAppSelector} from "../../../../store/config/hook";
import {ItemUser} from "./ItemUser/ItemUser";
import {getUsers} from "../../../../store/slices/userSlice";

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
            dispatch(getUsers(+userId))
        }
    }, [dispatch, userId])

    console.log(users)
    return (
        <div>
            InfoUser
            <div>{userId}</div>
                {users.map((el, index) => <ItemUser key={index} user={el}/>)}
            <button onClick={BackToPostsHandler}>Back to Posts</button>
        </div>
    );
};

