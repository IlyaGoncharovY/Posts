import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AccordionComponent} from "./accordion/AccordionComponent";
import {CardComponent} from "./card/CardComponent";

export const AboutMe = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <CardComponent/>
                </Col>
                <Col>
                    <AccordionComponent/>
                </Col>
            </Row>
        </Container>
    );
};

