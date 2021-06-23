import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 2rem;
`

export const PortfolioItem = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: #eeeeee;
    text-decoration: none;

    &:hover{
        transition: 0.4s ease;
        color: #00ADB5;
    }
    
    @media screen and (max-width: 575px){
        padding: 0;
        margin-bottom: 1rem;
    }
`

export const PortfolioImg = styled.div`
    max-width: 260px;
    max-height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
`

export const Img = styled.img`
    padding: 0;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 575px){
        width: 60%;
    }
`

export const PortfolioTitle = styled.span`
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
`