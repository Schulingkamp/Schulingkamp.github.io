const About = () => {
    return (
        <div className='about'>
            <h1 className='heading'>About</h1>
            <h5>
                An ambitious developer from the suburbs of Philadelphia, I take time every day to improve my skills. 
                This entails not only learning programming languages and industry tools, but also learning 
                computer science fundamentals - from operating systems to data structures and algorithms.
                In my free time, I enjoy spending time with friends and family, watching movies, exercising, 
                and learning Japanese. 
            </h5>
            <div className='columns'>
                <div className='columnItem'>
                    <h3 className='heading'>Skills</h3>
                    <ul>
                        <li>Python (Django)</li>
                        <li>JavaScript (React)</li>
                        <li>HTML, CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
                <div className='columnItem'>
                    <h3 className='heading'>Interests</h3>
                    <ul>
                        <li>Movies</li>
                        <li>Watching UFC + Boxing</li>
                        <li>Exercising</li>
                    </ul>
                </div>
                <div className='columnItem'>
                    <h3 className='heading'>Contact</h3>
                    <ul>
                        <li>Email: leeschulingkamp@gmail.com</li>
                        <li>Phone: 610-800-2775</li>
                        <li>LinkedIn: Just click the sidebar link, and shoot me a message!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;