import React from 'react';
import AccordianItems from './homeComponents/AccordianItems.js';
import JumboItems from './homeComponents/JumboItems.js';

const Home = () => {

    return (
        <>
            <JumboItems />

            <div>
                <h3 className='home_colored_text'>
                    <strong>dishFire is a covert global surveillance collection system and database</strong>
                </h3>
            </div>

            <br></br>
            <AccordianItems />
            <br></br>
            <br></br>

        </>
    )
}

export default Home;
