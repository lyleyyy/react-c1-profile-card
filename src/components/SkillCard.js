import "./SkillCard.css";

function SkillCard({ skillName, emoji, bgColor }) {
  return (
    <span className="skill-card" style={{ backgroundColor: bgColor }}>
      {skillName} {emoji}
    </span>
  );
}

export default SkillCard;
