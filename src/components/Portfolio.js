import SkillCard from "./SkillCard.js";
import "./Portfolio.css";

function Portfolio(props) {
  const { imgUrl, imgName, personName, personIntroduction, skillSets } = props;

  return (
    <div className="portfolio">
      <img className="logo" src={imgUrl} alt={imgName} />
      <div className="introduction">
        <h2>{personName}</h2>
        <p>{personIntroduction}</p>
      </div>
      <div className="skill-cards-container">
        {skillSets.map((scd) => {
          const { skillName, emoji, bgColor } = scd;
          return (
            <SkillCard
              key={skillName}
              skillName={skillName}
              emoji={emoji}
              bgColor={bgColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
