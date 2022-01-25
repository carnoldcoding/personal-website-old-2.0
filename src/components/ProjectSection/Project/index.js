import React from 'react';
import {
    ProjectContainer,
    ProjectWrapper,
    TextWrapper,
    ProjectHeader,
    ProjectSubtitle,
    ProjectComment,
    ImageWrapper,
    Image,
    ImageLink
} from './ProjectStyles'

const Project = ({
    header,
    subtitle,
    image,
    link,
    contribution
}) => {
  return (
      <>
      
      <ProjectContainer>
          <ProjectWrapper>
            <ImageWrapper>
                <ImageLink href={link} target="_blank">
                    <Image src={image} />
                </ImageLink>
            </ImageWrapper>

              <TextWrapper>
                  <ProjectHeader>
                      <span style={{color: "var(--lightestblue)"}}>{"<"}</span>
                      {header}
                      <span style={{color: "var(--lightestblue)"}}>{"/>"}</span>
                  </ProjectHeader>
                  <ProjectComment>
                      //Overview
                  </ProjectComment>

                  <ProjectSubtitle>
                      {subtitle}
                  </ProjectSubtitle>

                  <ProjectComment>
                      //Contribution
                  </ProjectComment>

                  <ProjectSubtitle>
                      {contribution}
                  </ProjectSubtitle>
                  
              </TextWrapper>
          </ProjectWrapper>
      </ProjectContainer>
      </>
  );
};

export default Project;
