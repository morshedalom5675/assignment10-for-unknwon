import React from "react";
import { Typewriter } from "react-simple-typewriter";

const App = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">
        I am a{' '}
        <span style={{ color: 'green', fontWeight: 'bold' }}>
          <Typewriter
            words={['Developer', 'Designer', 'Creator']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default App;
