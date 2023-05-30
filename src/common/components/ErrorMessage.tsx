import React, {FC} from 'react';
import {Alert, Button} from "react-bootstrap";
import {useAppDispatch} from "../../store/config/hook";
import {clearError} from "../../store/slices/errorSlice";

interface ErrorMessageType {
    error: string | null
}

export const ErrorMessage: FC<ErrorMessageType> = ({error}) => {

    const dispatch = useAppDispatch()

    const onCloseHandler = () => {
        dispatch(clearError())
    }

    return (
        <>
            <Alert show={!!error} variant="danger">
                <Alert.Heading>Oops</Alert.Heading>
                <p>
                    {error}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={onCloseHandler} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>
        </>
    );

};

