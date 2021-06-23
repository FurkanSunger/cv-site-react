import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 1rem;
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const HeaderImg = styled.div`
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    padding: 0;
    max-width: 70%;
    max-height: 600px;
    border: 2px solid #505050;
    border-radius: 50%;
    padding: 6px;
`

export const HeaderTitle = styled.h2`
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #EEEEEE;
    margin-top: 1rem;
`

export const HeaderDesc = styled.p`
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 3px;
    color: #EEEEEE;
    margin: 1rem 0;
`

export const HeaderSocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderSocialItem = styled.a`
    color: #EEEEEE;
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;

    &:hover{
        color: #00ADB5;
        transition: 0.4s ease;
    }
`

export const HeaderFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;

    span{
        color: #EEEEEE;
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 14px;
    }
`