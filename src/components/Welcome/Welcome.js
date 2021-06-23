import React from 'react'
import { DescText, TextWrapper, TitleText } from './Welcome.element'

const Welcome = () => {
    return (
        <div className="welcome position-absolute end-0 h-100 col-lg-8 col-sm-10 col-10 p-0 m-0">
            <TextWrapper>
                <TitleText>Furkan Sünger</TitleText>
                <DescText>Front-end Developer</DescText>
            </TextWrapper>
        </div>
    )
}

export default Welcome
