import { useEffect, useRef } from "react";
import { init } from "ityped";

const Home = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ['Developer.', 'Japanophile.', 'PSU Alum.']
        })
    }, []);

    return (
        <div className='home'>
           <h1>Hi, my name is <span style={{color: 'palegreen' }}>Lee Schulingkamp.</span></h1>
            <h3>I am a <span style={{color: 'palegreen' }} ref={ textRef }></span></h3>
        </div>
    );
}

export default Home;