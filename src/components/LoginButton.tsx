import {Button} from "@chakra-ui/react";
import React from "react";

interface ILoginButton {
    onClick: () => void,
    children: React.ReactNode
}

export const LoginButton = ({onClick, children}: ILoginButton) => {
    return (
        <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {children}
        </Button>
    )
}