import React, {FC} from 'react';
import {ResponseGetCommentsType} from "../../../../api/commentsAPI";

interface CommentsItemType {
    comment: ResponseGetCommentsType
}

export const CommentsItem: FC<CommentsItemType> = ({comment}) => {

    return (
        <div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

