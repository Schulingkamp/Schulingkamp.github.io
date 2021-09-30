import avatarImage from './pictures/greenShirt.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const LinkedInLink = 'http://www.linkedin.com/in/lee-schulingkamp'
    const GitHubLink = 'http://www.github.com/schulingkamp'

    return(
        <div className='myNavbar'>
            <img id='me' src={ avatarImage } alt='My headshot'></img>
            <ul className='myNavbarul'>
                <Link to='/'><li className='myNavbarli'><i class="fas fa-home"></i> Home</li></Link>
                <Link to='/about'><li className='myNavbarli'><i class="fas fa-address-card"></i> About</li></Link>
                <Link to='projects'><li className='myNavbarli'> <i class="fas fa-project-diagram"></i> Projects</li></Link>
                <a href={LinkedInLink} target='_blank' rel='noreferrer'><li className='myNavbarli'><i class="fab fa-linkedin"></i> LinkedIn</li></a>
                <a href={GitHubLink} target='_blink' rel='noreferrer'><li className='myNavbarli'><i class="fab fa-github-square"></i> GitHub</li></a>
                
            </ul>
        </div>
    );
}

export default Navbar;