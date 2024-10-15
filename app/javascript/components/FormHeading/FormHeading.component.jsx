import React from 'react';
import {FormHeadingContainer} from "./FormHeading.styled";

function FormHeading({heading}) {
    return (
        <FormHeadingContainer>
            {heading}
        </FormHeadingContainer>
    );
}

export default FormHeading;