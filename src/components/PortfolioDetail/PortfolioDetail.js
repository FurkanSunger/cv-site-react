import React, { useContext, useEffect, useState } from 'react'
import { DescDetail, DescTitle, DescUrl, DescWrapper, ImageWrapper, Img, PortfolioButton, ProjectName, TechItem, TechLists } from './PortfolioDetail.element'
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaUserAlt, FaGlobe } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useRouteMatch } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const PortfolioDetail = () => {
    const match = useRouteMatch();
    const {id} = match.params;

    const {portfolioInfo} = useContext(MainContext);

    const getData = {
        client: "",
        date: "",
        image: "",
        projectName: "",
        tech: [],
        url: ""
    }

    const [portfolioDetail, setPortfolioDetail] = useState(getData);

    useEffect(() => {
        const findPortfolio = portfolioInfo.find(item => item.id === Number(id));
        setPortfolioDetail(findPortfolio);
    }, [])

    const {client, date, image, projectName, tech, url} = portfolioDetail;

    return (
        <div className="portfolio-detail position-absolute end-0 col-lg-8 col-sm-10 col-10 m-0">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <ProjectName>{projectName}</ProjectName>
                    <PortfolioButton to="/portfolio"><RiArrowGoBackFill /></PortfolioButton>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <ImageWrapper>
                            <Img src={image} alt="Photo" />
                        </ImageWrapper>
                    </div>
                    <div className="col-lg-5">
                        <DescWrapper>
                            <DescTitle>Description</DescTitle>
                            <DescDetail><span><FaUserAlt /></span> {client}</DescDetail>
                            <DescUrl href="https://www.sample-project.com" target="_blank"><span><FaGlobe /></span> {url}</DescUrl>
                            <DescDetail><span><MdDateRange /></span> {date}</DescDetail>
                            <DescDetail>Technology</DescDetail>
                            <TechLists>
                                {
                                    tech.map(item => (
                                        <TechItem key={item.id}>{item.item}</TechItem>
                                    ))
                                }
                            </TechLists>
                        </DescWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail
