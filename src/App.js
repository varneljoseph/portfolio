import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  achievements,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Achievement from "./components/home/Achievement";

// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";





import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";



import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = React.forwardRef((props, ref) => {

  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
    document.title = i18n.t("document_title");
  }, [i18n, i18n.language]);


  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        messageDefault={mainBody.messageDefault}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          headingDefault={about.headingDefault}
          message={about.message}

          link={about.imageLink}
          imgShow={about.imageShow}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          message={repos.message}

          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}

          projects={repos.projects}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}

          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          message={skills.message}

          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      {
        achievements.show && (
          <Achievement 
            heading={achievements.heading}
            message={achievements.message}

            achievements={achievements}
          />
        )
      }
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar icons={navBar.icons} ref={titleRef}  />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}

            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
