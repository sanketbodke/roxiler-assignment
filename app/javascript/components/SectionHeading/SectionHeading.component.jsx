import React from 'react';
import {FormHeadingContainer} from "./SectionHeading.styled";

function SectionHeading({heading}) {
    return (
        <FormHeadingContainer>
            {heading}
        </FormHeadingContainer>
    );
}

export default SectionHeading;