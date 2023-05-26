import React, {FC} from 'react';
import {ResponseUserType} from "../../../../../api/userAPI";

interface ItemUserType {
    user: ResponseUserType
}

export const ItemUser: FC<ItemUserType> = ({user}) => {
    return (
        <div>
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.website}</li>
                <li>{user.phone}</li>
            </ul>
        </div>
    );
};

