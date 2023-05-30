import React, {FC} from 'react';
import {SocialSetType} from "../../../common/data/DataSet";
import {Container} from "react-bootstrap";
import {Icon} from "@iconify/react";

interface ContactItemType {
    contact: SocialSetType
}

export const ContactItem: FC<ContactItemType> = ({contact}) => {
    return (
        <Container>
            <a href={contact.href}>
                <Icon icon={contact.iconValue} fontSize={"40px"}/>
            </a>
        </Container>
    );
};