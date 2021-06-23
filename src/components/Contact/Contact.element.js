import styled from "styled-components";

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 2rem;
`

export const ContactLists = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContactItem = styled.div`
    width: 90%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
    border-radius: 5px;
    background-color: #505050;
    margin-bottom: 1rem;
`

export const ContactIcon = styled.div`
    color: #00ADB5;
    font-size: 32px;
    margin-bottom: 0.5rem;
`

export const ContactInfo = styled.h4`
    font-size: 14px;
    font-weight: 700;
`

export const ContactTitle = styled.h3`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 1.5rem;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormInput = styled.input`
    width: 100%;
    height: 50px;
    background-color: #505050;
    border: 1px solid #505050;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 1rem;
    color: #eeeeee;
    outline: none;

    &:placeholder{
        color: #eeeeee;
    }

    &:focus{
        border: 1px solid #00ADB5;
        transition: 0.4s ease;
    }
`

export const FormTextarea = styled.textarea`
    width: 100%;
    height: 120px;
    background-color: #505050;
    border: 1px solid #505050;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 1rem;
    color: #eeeeee;
    outline: none;

    &:placeholder{
        color: #eeeeee;
    }

    &:focus{
        border: 1px solid #00ADB5;
        transition: 0.4s ease;
    }
`

export const FormButton = styled.button`
    font-size: 16px;
    padding: 1rem 1.5rem;
    background-color: transparent;
    border: 1px solid #00ADB5;
    outline: none;
    color: #eeeeee;
    border-radius: 24px;

    &:hover{
        background-color: #00ADB5;
        transition: 0.4s ease;
    }

    @media screen and (max-width: 576px) {
        font-size: 14px;
        padding: 0.5rem 1rem;
    }
`