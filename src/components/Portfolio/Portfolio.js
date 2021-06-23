import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'
import { Img, PortfolioImg, PortfolioItem, PortfolioTitle, Title } from './Portfolio.elemet'

const Portfolio = () => {
    const {portfolioInfo} = useContext(MainContext);

    return (
        <div className="portfolio position-absolute end-0 col-lg-8 col-sm-10 col-10 m-0">
            <div className="container">
                <Title>Portfolio</Title>
                <div className="row mb-3">
                    {
                        portfolioInfo.map(item => (
                            <div key={item.id} className="col-lg-4 col-sm-6">
                                <PortfolioItem to={`/portfoliodetail/${item.id}`}>
                                    <PortfolioImg>
                                        <Img src={item.image} alt="Photo"></Img>
                                    </PortfolioImg>
                                    <PortfolioTitle>{item.projectName}</PortfolioTitle>
                                </PortfolioItem>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
