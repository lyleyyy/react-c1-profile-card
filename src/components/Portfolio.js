import SkillCard from "./SkillCard.js";
import "./Portfolio.css";

function Portfolio({
  imgUrl,
  imgName,
  personName,
  personIntroduction,
  skillSets,
}) {
  return (
    <div className="portfolio">
      <img className="logo" src={imgUrl} alt={imgName} />
      <div className="introduction">
        <h1>{personName}</h1>
        <p>{personIntroduction}</p>
      </div>
      <div className="skill-cards-container">
        {skillSets.map(({ skillName, emoji, bgColor }) => (
          <SkillCard
            key={skillName}
            skillName={skillName}
            emoji={emoji}
            bgColor={bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
