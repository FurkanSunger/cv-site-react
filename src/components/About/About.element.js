import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const AboutTitle = styled.h2`
    font-size: 36px;
    font-weight: 700;
`

export const AboutDesc = styled.p`
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;

    @media screen and (max-width: 425px){
        font-size: 12px;
        letter-spacing: 0;
    }
`

export const AboutInfo = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
`

export const AboutItem = styled.li`
    list-style: none;
    font-size: 15px;

    span{
        color: #00ADB5;
    }
`

export const Services = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

export const ServicesTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
`

export const ServiceIcon = styled.div`
    width: 80px;
    height: 80px;
    font-size: 42px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #00ADB5;
`

export const ServiceTitle = styled.h4`
    font-size: 22px;
    font-weight: 700;
`

export const ServiceDesc = styled.p`
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;

    @media screen and (max-width: 425px){
        font-size: 12px;
        letter-spacing: 0;
    }
`