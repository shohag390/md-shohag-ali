import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingText = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['frontend developer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            />
        </div>
    );
};

export default TypingText;