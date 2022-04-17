import {string, func} from 'prop-types';
import React from 'react';

interface CustomButtonProps{
    children: string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

const CustomButton = ({children, onClick}: CustomButtonProps) =>{
    return (
        <button  onClick={onClick}>{children}</button>
    )
}

CustomButton.propTypes = {
    children:string,
    onClick:func
}
export default CustomButton;