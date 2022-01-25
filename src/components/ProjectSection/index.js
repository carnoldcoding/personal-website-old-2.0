import React from 'react';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsHeader
 } from './ProjectSectionStyles';
 import Project from './Project'
 import {firstProject, secondProject, thirdProject, fourthProject} from "./Project/data"


const ProjectSection = () => {
  return (
      <>
      <ProjectsContainer>
        <ProjectsHeader>
            <span style={{color:"var(--lightestblue)"}}>.</span>
            Projects
            <span style={{color:"var(--lightestblue)"}}>(</span>
            <span style={{color:"var(--lightestblue)"}}>)</span>
        </ProjectsHeader>

        <ProjectsWrapper>
          
          <Project {...firstProject}/>
          <Project {...secondProject}/>
          <Project {...thirdProject}/>
          <Project {...fourthProject}/>


        </ProjectsWrapper>

      </ProjectsContainer>
      </>
  );
};

export default ProjectSection;
