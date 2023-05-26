import React, {FC} from 'react';
import {ResponseGetPostType} from "../../../../../../api/postsAPI";

interface PostForUserItemType {
    postForUser: ResponseGetPostType
}

export const PostForUserItem: FC<PostForUserItemType> = ({postForUser}) => {

    return (
        <div>
            <ul>
                <li>{postForUser.title}</li>
                <li>{postForUser.body}</li>
            </ul>
        </div>
    );
};

