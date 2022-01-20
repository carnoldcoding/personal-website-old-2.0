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
              <FooterSubtitleWrapper>
                <FooterSubtitle>
                    Cam.Coding()
                </FooterSubtitle>
              </FooterSubtitleWrapper>

              <WebsiteRightsWrapper>
                <WebsiteRights>
                    Cameron Arnold © {new Date().getFullYear()} All Rights Reserved
                </WebsiteRights>
              </WebsiteRightsWrapper>

              <FooterIconWrapper>
                  <FooterIcon>
                      <FaTwitter/>
                  </FooterIcon>
                  <FooterIcon>
                      <FaGithub/>
                  </FooterIcon>
                  <FooterIcon>
                      <FaFacebook/>
                  </FooterIcon>
                  <FooterIcon>
                      <FaLinkedin/>
                  </FooterIcon>
              </FooterIconWrapper>

          </FooterWrapper>
      </FooterContainer>
    </>
    )
};

export default Footer;
