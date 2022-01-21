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
    FaTwitter, FaGithub, FaFacebook, FaLinkedin, FaEnvelope
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
                    <span style={{color:"var(--lightblue)"}}>{"<"}</span>
                    Contact
                    <span style={{color:"var(--lightblue)"}}>{"/>"}</span>
                </ContactHeader>
                
                <ContactInfoWrapper>
                    <ContactInfo>
                        I'm available across all of these platforms, feel free
                        drop by!
                    </ContactInfo>
                </ContactInfoWrapper>
                
                <ContactIcons>
                    ~
                    <ContactIcon href="//www.twitter.com/CarnoldCoding" target="_blank"><FaTwitter/></ContactIcon>
                    <ContactIcon href="//www.github.com/carnoldcoding"><FaGithub/></ContactIcon>
                    <ContactIcon href="//www.facebook.com/cameron.arnold.549436" target="_blank"><FaFacebook/></ContactIcon>
                    <ContactIcon href="//www.linkedin.com/in/cameron-arnold-8b47281a0/" target="_blank"><FaLinkedin/></ContactIcon>
                    <ContactIcon href="mailto:carnoldcoding@gmail.com" target="_blank"><FaEnvelope/></ContactIcon>
                    ~
                </ContactIcons>
            </ContactWrapper>

        </InformationWrapper>
      </InformationContainer>
      </>
  )
};

export default Information;
