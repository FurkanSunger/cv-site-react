import styled from "styled-components";

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
`

export const ResumeInfo = styled.div`
    margin: 3rem 0;
`

export const SectionTitle = styled.h3`
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 1.5rem;
`

export const ResumeLists = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const ResumeItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`

export const ResumeIcon = styled.div`
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #00ADB5;
    font-size: 36px;

    @media screen and (max-width: 576px){
        font-size: 26px;
        min-width: 36px;
    }
`

export const ResumeDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    border-left: 1px solid #505050;
`

export const ResumeTime = styled.div`
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
`

export const ResumeTitle = styled.h4`
    font-size: 14px;
    margin: 1.5rem 0;
    text-transform: uppercase;

    span{
        font-weight: 700;
        color: #00ADB5;
    }
`

export const ResumeNotes = styled.p`
    font-size: 14px;
    font-style: italic;
    font-weight: 300;

    @media screen and (max-width: 576px){
        font-size: 12px;
    }
`

export const Knowledges = styled.div`

`

export const KnowledgesLists = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`

export const KnowledgesItem = styled.span`
    background-color: #00ADB5;
    padding: 0.75rem;
    margin: 0.5rem;
    font-size: 14px;
    font-weight: 300;

    @media screen and (max-width: 576px){
        font-size: 12px;
        padding: 0.5rem;
        margin: 0.25rem;
    }
`