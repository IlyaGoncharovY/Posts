import React, {FC} from 'react';
import {ResponseGetPostType} from "../../api/postsAPI";
import userLogo from "../../common/assects/logoUser.png"


interface PostsItemType {
    post: ResponseGetPostType
}

export const PostsItem: FC <PostsItemType> = ({post}) => {
    return (
        <div>
            <div>
                <img src={userLogo} alt={"logo_user"} style={{width: "60px"}}/>
            </div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <button>watch comments</button>
            {/*<div>{post.id}</div>*/}
        </div>
    );
};

