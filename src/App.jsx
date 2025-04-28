import React, { useState } from "react";
import "./index.css";
import sampleimage from "./image.jpg"; // Import the image

const ProfileCard = ({ name, bio, initialBgColor }) => {
const [bgColor, setBgColor] = useState(initialBgColor);
const [hovered, setHovered] = useState(false);

const handleMouseEnter = () => {
setHovered(true);
setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
};

const handleMouseLeave = () => {
setHovered(false);
setBgColor(initialBgColor);
};

return (
<div
className={`profile-card ${hovered ? "hovered" : ""}`}
style={{ background: bgColor, color: hovered ? "#000000" : "#000000" }}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<img src={sampleimage} alt={name} className="profile-pic" />
<h2 className="profile-name">{name}</h2>
<p className="profile-bio">{bio}</p>
</div>
);
};

const App = () => {
return (
<div className="app-container">
<ProfileCard
name="Robert John Downey Jr"
bio="Is a celebrated American actor known for his charismatic performances, remarkable comeback story, and iconic portrayal of Iron Man in the Marvel Cinematic Universe."
initialBgColor="linear-gradient(135deg, #ADD8E6, #E6E6FA)"
/>
</div>
);
};

export default App;

