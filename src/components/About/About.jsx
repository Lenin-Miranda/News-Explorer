import "./About.css";
import avatar from "../../assets/avatar.jpg";
export default function About() {
  return (
    <div className="about">
      <img className="about__image" src={avatar} />
      <div className="about__header-container">
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
