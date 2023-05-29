import React, {FC} from 'react';
import {ResponseGetPostType} from "../../../../../../api/postsAPI";
import {Card} from "react-bootstrap";

interface PostForUserItemType {
    postForUser: ResponseGetPostType
}

export const PostForUserItem: FC<PostForUserItemType> = ({postForUser}) => {

    return (
        <div>
            <Card>
                <Card.Header>Count: {postForUser.id}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {postForUser.title}{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{postForUser.body}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

