import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterSubtitleWrapper,
    FooterSubtitle,
    FooterIconWrapper,
    FooterIcon,
    WebsiteRights,
    WebsiteRightsWrapper,
} from './FooterStyles'

import {
    FaTwitter, FaGithub, FaFacebook, FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  return(
    <>
      <FooterContainer>
          <FooterWrapper>
              {/* <FooterSubtitleWrapper>
                <FooterSubtitle>
                    CC
                </FooterSubtitle>
              </FooterSubtitleWrapper> */}

              <WebsiteRightsWrapper>
                <WebsiteRights>
                    Cameron Arnold © {new Date().getFullYear()} All Rights Reserved
                </WebsiteRights>
              </WebsiteRightsWrapper>

              {/* <FooterIconWrapper>
                  <FooterIcon href="//www.twitter.com/CarnoldCoding" target="_blank">
                      <FaTwitter/>
                  </FooterIcon>
                  <FooterIcon href="//www.github.com/carnoldcoding" target="_blank">
                      <FaGithub/>
                  </FooterIcon>
                  <FooterIcon href="//www.facebook.com/cameron.arnold.549436" target="_blank">
                      <FaFacebook/>
                  </FooterIcon>
                  <FooterIcon href="//www.linkedin.com/in/cameron-arnold-8b47281a0/" target="_blank">
                      <FaLinkedin/>
                  </FooterIcon>
              </FooterIconWrapper> */}

          </FooterWrapper>
      </FooterContainer>
    </>
    )
};

export default Footer;
