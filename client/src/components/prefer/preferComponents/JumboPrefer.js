import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const JumboPrefer = () => {
    return (
        <div className='py-3'>
            <Jumbotron
                className="text-center"
                style={{ backgroundColor: '#083A67', color: 'white' }}
            >
                ██████╗░██████╗░███████╗███████╗███████╗██████╗░
                ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗
                ██████╔╝██████╔╝█████╗░░█████╗░░█████╗░░██████╔╝
                ██╔═══╝░██╔══██╗██╔══╝░░██╔══╝░░██╔══╝░░██╔══██╗
                ██║░░░░░██║░░██║███████╗██║░░░░░███████╗██║░░██║
                ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝
    </Jumbotron>
        </div>
    )
}

export default JumboPrefer
