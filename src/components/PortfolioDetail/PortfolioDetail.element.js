import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectName = styled.h2`
    font-size: 36px;
    font-weight: 700;
    
    @media screen and (max-width: 575px){
        font-size: 26px;
        font-weight: 400;
    }
`

export const PortfolioButton = styled(Link)`
    background-color: #505050;
    font-size: 24px;
    padding: 0.5rem 2rem;
    outline: none;
    border: none;
    color: #eeeeee;

    &:hover{
        background-color: #00ADB5;
        transition: 0.4s ease;
        color: #eeeeee;
    }

    @media screen and (max-width: 575px){
        display: none;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const DescWrapper = styled.div`
    width: 100%;
    height: 500px;
    background-color: #505050;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const DescTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 1.5rem;
`

export const DescDetail = styled.p`
    font-size: 16px;

    span{
        color: #00ADB5;
        margin-right: 1rem;
    }
`

export const DescUrl = styled.a`
    font-size: 16px;
    text-decoration: none;
    color: #eeeeee;
    margin-bottom: 1rem;
    
    &:hover{
        color: #00ADB5;
        transition: 0.4s ease;
    }

    span{
        color: #00ADB5;
        margin-right: 1rem;
    }
`

export const TechLists = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`

export const TechItem = styled.span`
    background-color: #00ADB5;
    padding: 0.5rem;
    margin: 0.25rem;
    font-size: 14px;
    font-weight: 300;
`