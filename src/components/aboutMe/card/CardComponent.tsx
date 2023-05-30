import React from 'react';
import {Card} from 'react-bootstrap';
import meLogo1 from "../../../common/assects/meLogo.jpg"

export const CardComponent = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={meLogo1} />
                <Card.Body>
                    <Card.Title>Hi friend!</Card.Title>
                    <Card.Text>
                        I am a novice front‑end developer specializing in creating a user interface.
                        I am passionate about creating great software that improves the lives of the people around me.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="https://github.com/IlyaGoncharovY">Git-Hub</Card.Link>
                    <Card.Link href="https://ilyagoncharovy.github.io/Portfolio/">Portfolio</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

