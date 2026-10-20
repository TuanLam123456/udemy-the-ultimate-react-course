import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="BVTL-profile.jpg" alt="BVTL-profile.jpg" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Bùi Văn Tuấn Lâm</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti
        sit dicta, dignissimos deleniti, eveniet eum voluptatibus eius cumque
        nostrum nisi quasi cum qui consectetur? Quod, numquam? Officia facilis
        rem aperiam quam repellendus placeat omnis? Animi minima repellendus
        nemo porro nisi ullam ex maiores magnam! Soluta odit itaque suscipit
        accusantium?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="React" emoji="💪" color="orange" />
      <Skill skill="React" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="💪" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}

export default App;
