import React, { useContext } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import MainContext from '../../context/MainContext'
import { HeaderContent, HeaderDesc, HeaderFooter, HeaderImg, HeaderSocialIcons, HeaderSocialItem, HeaderTitle, HeaderWrapper, Img } from './Header.element'

const Header = () => {
    const {userInfo} = useContext(MainContext);
    const {name, job, image} = userInfo;

    return (
        <div className="header-prop col-lg-3 dark-bg p-0 text-center">
            <HeaderWrapper>
                <HeaderContent>
                    <HeaderImg>
                        <Img src={image} alt="Photo"/>
                    </HeaderImg> 
                    <HeaderTitle>{name}</HeaderTitle>   
                    <HeaderDesc>{job}</HeaderDesc>
                    <HeaderSocialIcons>
                        <HeaderSocialItem href="https://www.instagram.com/furkansunger/" target="_blank">
                            <FaInstagram />
                        </HeaderSocialItem>
                        <HeaderSocialItem href="https://twitter.com/furkan_sunger" target="_blank">
                            <FaTwitter />
                        </HeaderSocialItem>
                        <HeaderSocialItem href="https://www.linkedin.com/in/furkan-sunger/" target="_blank">
                            <FaLinkedinIn />
                        </HeaderSocialItem>
                        <HeaderSocialItem href="https://github.com/FurkanSunger" target="_blank">
                            <FaGithub />
                        </HeaderSocialItem>
                    </HeaderSocialIcons>
                </HeaderContent>
                <HeaderFooter>
                    <span>
                        © 2020 All rights reserved.
                    </span>
                </HeaderFooter>
            </HeaderWrapper>
        </div>
    )
}

export default Header
