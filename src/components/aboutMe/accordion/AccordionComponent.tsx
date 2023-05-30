import React from 'react';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import {SkillSet, SocialSet} from "../../../common/data/DataSet";
import {SkillItem} from "./SkillItem";
import {ContactItem} from "../card/ContactItem";

export const AccordionComponent = () => {
    return (
        <Container>
            <Accordion className={"pt-4"}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Technology stack</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {SkillSet.map((skill, index) => <Col>
                                <SkillItem key={index} skill={skill}/>
                            </Col>)}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Contacts</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {SocialSet.map((contact, index) =>
                                <Col>
                                    <ContactItem key={index} contact={contact}/>
                                </Col>
                            )}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};