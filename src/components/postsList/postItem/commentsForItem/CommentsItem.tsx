import React, {FC} from 'react';
import {ResponseGetCommentsType} from "../../../../api/commentsAPI";
import {Card} from "react-bootstrap";

interface CommentsItemType {
    comment: ResponseGetCommentsType
}

export const CommentsItem: FC<CommentsItemType> = ({comment}) => {

    return (
        <div>
            <Card className={"pt-2"}>
                <Card.Header>{comment.email}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">
                           Comment: <cite title="Source Title">{comment.body}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

