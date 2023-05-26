import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../../utils/path";
import {useAppDispatch, useAppSelector} from "../../../../store/config/hook";
import {getUser} from "../../../../store/slices/userSlice";
import {ItemUser} from "./ItemUser/ItemUser";

export const InfoUser = () => {

    const {userId} = useParams()
    const user = useAppSelector(state => state.user.user)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const BackToPostsHandler = () => {
        navigate(PATH.POST_PAGE)
    }

    useEffect(() => {
        if (userId && user) {
            dispatch(getUser(+userId))
        }
    }, [dispatch, userId])

    console.log(user)
    return (
        <div>
            InfoUser
            <div>{userId}</div>
                {user.map((el, index) => <ItemUser key={index} user={el}/>)}
            <button onClick={BackToPostsHandler}>Back to Posts</button>
        </div>
    );
};

