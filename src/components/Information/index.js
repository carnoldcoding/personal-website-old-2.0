import React from 'react';
import {
    InformationContainer,
    InformationWrapper,
    PhotoWrapper,
    Photo,
    ContactWrapper,
    ContactHeader,
    ContactIcons,
    ContactIcon,
    ContactInfo,
    ContactInfoWrapper
} from './InformationStyles'
import {
    FaTwitter, FaGithub, FaFacebook, FaLinkedin
} from 'react-icons/fa'

const Information = () => {
  return (
      <>
      <InformationContainer>
        <InformationWrapper>

            <PhotoWrapper>
                <Photo />
            </PhotoWrapper>

            <ContactWrapper>
                <ContactHeader>
                    Contact
                </ContactHeader>
                <ContactIcons>
                    ~
                    <ContactIcon href="//www.twitter.com/CarnoldCoding" target="_blank"><FaTwitter/></ContactIcon>
                    <ContactIcon href="//www.github.com/carnoldcoding"><FaGithub/></ContactIcon>
                    <ContactIcon href="//www.facebook.com/cameron.arnold.549436" target="_blank"><FaFacebook/></ContactIcon>
                    <ContactIcon href="//www.linkedin.com/in/cameron-arnold-8b47281a0/" target="_blank"><FaLinkedin/></ContactIcon>
                    ~
                </ContactIcons>
                <ContactInfoWrapper>
                    <ContactInfo>
                        CarnoldCoding@gmail.com
                    </ContactInfo>
                </ContactInfoWrapper>
            </ContactWrapper>

        </InformationWrapper>
      </InformationContainer>
      </>
  )
};

export default Information;
