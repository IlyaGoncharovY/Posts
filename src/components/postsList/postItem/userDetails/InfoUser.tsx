import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../../utils/path";

export const InfoUser = () => {

    const {userId} = useParams()
    const navigate = useNavigate()

    const BackToPostsHandler = () => {
        navigate(PATH.POST_PAGE)
    }

    return (
        <div>
            InfoUser
            <div>{userId}</div>
            <button onClick={BackToPostsHandler}>Back to Posts</button>
        </div>
    );
};

