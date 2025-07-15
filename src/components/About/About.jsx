import "./About.css";
import avatar from "../../assets/about.JPG";
export default function About() {
  return (
    <div className="about">
      <img className="about__image" src={avatar} alt="Foto del autor" />
      <div className="about__header-container">
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          Hi! I'm Lenin Miranda — a self-taught web developer with a passion for
          creating clean, functional, and impactful web applications. I started
          by mastering HTML, CSS, and JavaScript, and quickly expanded into
          modern frameworks like React and tools like Figma to design intuitive
          user interfaces.
          <br /> I enjoy building full-stack projects from scratch, connecting
          front-end and back-end seamlessly using REST APIs and modular
          JavaScript. I'm currently deepening my skills in Node.js and MongoDB
          to take my apps to the next level. <br />I believe in learning by
          doing. Most of what I’ve built so far — from interactive UI components
          to complete applications like a social media platform — has come from
          curiosity, persistence, and a genuine love for coding. I aim to build
          things that not only work well, but make a difference. Let’s code
          something great.
        </p>
      </div>
    </div>
  );
}
