import React, {FC} from 'react';
import {CloseButton, Form, InputGroup} from "react-bootstrap";

interface SearchPostType {
    searchValue: string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClear: () => void
}

export const SearchPost: FC<SearchPostType> = ({searchValue, handleSearch, handleClear}) => {

    return (
        <InputGroup className="mb-3 pt-2">
            <InputGroup.Text id="basic-addon1">SearchPost</InputGroup.Text>
            <Form.Control
                placeholder="enter post"
                aria-label="enter post"
                aria-describedby="basic-addon1"
                value={searchValue}
                onChange={handleSearch}
            />
            <CloseButton onClick={handleClear} className={"m-md-2"}/>
        </InputGroup>
    );
};

