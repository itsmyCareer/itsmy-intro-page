import React from "react";
import Particle from "./Particle";

const ParticleBackground = React.memo(({ isDarkMode }) => {
    return (
        <div className="absolute inset-0 z-0">
            <Particle isDarkMode={isDarkMode} />
        </div>
    );
});

export default ParticleBackground;