import "./SkillCard.css";

function SkillCard(props) {
  const { skillName, emoji, bgColor } = props;
  const style = { backgroundColor: bgColor };

  return (
    <div className="skill-card" style={style}>
      {skillName} {emoji}
    </div>
  );
}

export default SkillCard;
