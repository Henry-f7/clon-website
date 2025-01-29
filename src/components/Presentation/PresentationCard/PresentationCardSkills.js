const PresentationCardSkills = ({ skills = [] }) => {
  return (
    skills &&
    skills.map((skill) => {
      return (
        <li
          key={skill.id}
          className="PresentationCarouselCard-skill"
        >
          {skill.text}
        </li>
      );
    })
  );
};

export default PresentationCardSkills;
