import React, {FC} from 'react';
import {ResponseGetPostType} from "../../api/postsAPI";

interface PostsItemType {
    post: ResponseGetPostType
}

export const PostsItem: FC <PostsItemType> = ({post}) => {
    return (
        <div>
            {/*<div>{post.userId}</div>*/}
            <div>{post.title}</div>
            <div>{post.body}</div>
            {/*<div>{post.id}</div>*/}
        </div>
    );
};

