import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NavbarItem = styled.li`
    list-style: none;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #505050;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 993px){
        height: 100px;
    }
`

export const NavbarLink = styled(Link)`
    color: #EEEEEE;
    font-size: 24px;
    /* text-transform: uppercase; */
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    width: 100%;
    height: 100%;

    &:hover{
        color: #00ADB5;
        transition: 0.4s ease;
    }
    
    span{
        margin-top: 5px;
        font-size: 14px;
    }

    @media screen and (max-width: 400px){
        span{
            font-size: 12px;
        }
    }
`