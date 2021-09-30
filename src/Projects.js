import nittanyPicture from './pictures/nittanyPicture.png';
import alienPicture from './pictures/alienPicture.png';
import personalSitePicture from './pictures/personalSitePicture.png';
import Carousel from 'react-bootstrap/Carousel';


const Projects = () => {
    const nittanyLink = 'https://github.com/Schulingkamp/Nittany_Study_Journals';
    const alienLink = 'https://github.com/Schulingkamp/Swaymun_Invasion';
    const personalLink = 'https://github.com/Schulingkamp/Schulingkamp.github.io';
    
    return (
        <div className='projects'>
            <h1 className='heading'>Projects</h1>
            <h5>
                Shown below is a sampling of some of the projects I have worked on.
                While I am finished with some, there are still updates that I would like to make to others.
                For more information, just click on any project's image, and you will be directed to the relevant
                repository in a new tab.
            </h5>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <a href={ nittanyLink } target='_blink' rel='noreferrer'>
                            <img
                            className="d-block w-100"
                            src= { nittanyPicture }
                            alt="Home page of Nittany Study Journals"
                            />
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href={ alienLink} target='_blink' rel='noreferrer'>
                            <img
                            className="d-block w-100"
                            src= { alienPicture }
                            alt="Ship shooting aliens"
                            />
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href={ personalLink } target='_blink' rel='noreferrer'>
                            <img
                            className="d-block w-100"
                            src= { personalSitePicture }
                            alt="Portfolio site homepage"
                            />
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;