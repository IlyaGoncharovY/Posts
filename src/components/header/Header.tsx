import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../../utils/path";


export const Header = () => {
    return (
        <div>
            <NavLink to={PATH.POST_PAGE}>POST_PAGE</NavLink>
            <NavLink to={PATH.ABOUT_ME}>ABOUT_ME</NavLink>
        </div>
    );
};

