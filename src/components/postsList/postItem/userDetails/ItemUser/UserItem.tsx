import React, {FC, useEffect} from 'react';
import {ResponseUserType} from "../../../../../api/userAPI";
import {useAppDispatch, useAppSelector} from "../../../../../store/config/hook";
import {PostForUserItem} from "./postForUserItem/PostForUserItem";
import {getPostsForUserAC} from "../../../../../store/slices/postSlice";
import {Badge, Card, Container, ListGroup} from "react-bootstrap";

interface ItemUserType {
    user: ResponseUserType
    userId: string | undefined
}

export const UserItem: FC<ItemUserType> = ({user, userId}) => {

    const postsForUser = useAppSelector(state => state.posts.posts)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userId && userId) {
            dispatch(getPostsForUserAC(+userId))
        }
    }, [dispatch, userId])

    // console.log(postsForUser)
    return (
        <div>
            <ListGroup className={"pt-2"}>
                <ListGroup.Item variant="dark">Name: {user.name}</ListGroup.Item>
                <ListGroup.Item variant="success">Nick name: {user.username}</ListGroup.Item>
                <ListGroup.Item variant="dark">Email: {user.email}</ListGroup.Item>
                <ListGroup.Item variant="success">Website: {user.website}</ListGroup.Item>
                <ListGroup.Item variant="dark">Phone: {user.phone}</ListGroup.Item>
            </ListGroup>
            <Card>
                <Card className={"pt-2"}>
                    <h4>
                        Watch user <Badge bg="secondary">Posts: </Badge>
                    </h4>
                </Card>
                <Container>
                    {postsForUser.map((postForUser, index)=> <PostForUserItem key={index} postForUser={postForUser}/>)}
                </Container>
            </Card>
        </div>
    );
};

