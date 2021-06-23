import React, { useContext } from 'react'
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import MainContext from '../../context/MainContext';
import { Knowledges, KnowledgesItem, KnowledgesLists, ResumeDesc, ResumeIcon, ResumeInfo, ResumeItem, ResumeLists, ResumeNotes, ResumeTime, ResumeTitle, SectionTitle, Title } from './Resume.elemet';

const Resume = () => {
    const {resumeInfo} = useContext(MainContext);
    const {education, experience, knowledges, skills} = resumeInfo;

    return (
        <div className="resume position-absolute end-0 col-lg-8 col-sm-10 col-10 m-0">
            <div className="container">
                <Title>Resume</Title>
                <ResumeInfo>
                    <SectionTitle>Education</SectionTitle>
                    <ResumeLists>
                        {
                            education.map(item => (
                                <ResumeItem key={item.id}>
                                    <ResumeIcon><IoMdSchool /></ResumeIcon>
                                    <ResumeDesc>
                                        <ResumeTime>{item.date}</ResumeTime>
                                        <ResumeTitle>{item.degree} - <span>{item.school}</span></ResumeTitle>
                                        <ResumeNotes>{item.notes}</ResumeNotes>
                                    </ResumeDesc>
                                </ResumeItem>
                            ))
                        }
                    </ResumeLists>
                </ResumeInfo>

                <ResumeInfo>
                    <SectionTitle>Experience</SectionTitle>
                    <ResumeLists>
                        {
                            experience.map(item => (
                                <ResumeItem key={item.id}>
                                    <ResumeIcon><MdWork /></ResumeIcon>
                                    <ResumeDesc>
                                        <ResumeTime>{item.date}</ResumeTime>
                                        <ResumeTitle>{item.job} - <span>{item.workplace}</span></ResumeTitle>
                                        <ResumeNotes>{item.notes}</ResumeNotes>
                                    </ResumeDesc>
                                </ResumeItem>
                            ))
                        }
                    </ResumeLists>
                </ResumeInfo>

                <Knowledges>
                    <div className="row">
                        <div className="col-lg-6">
                            <SectionTitle>Knowledges</SectionTitle>
                            <KnowledgesLists>
                                {
                                    knowledges.map(item => (
                                        <KnowledgesItem key={item.id}>{item.knowledge}</KnowledgesItem>
                                    ))
                                }
                            </KnowledgesLists>
                        </div>
                        <div className="col-lg-6">
                            <SectionTitle>Skills</SectionTitle>
                            <KnowledgesLists>
                                {
                                    skills.map(item => (
                                        <KnowledgesItem key={item.id}>{item.skill}</KnowledgesItem>
                                    ))
                                }
                            </KnowledgesLists>
                        </div>
                    </div>
                </Knowledges>
            </div>
        </div>
    )
}

export default Resume