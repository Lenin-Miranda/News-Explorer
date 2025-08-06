import "./Preloader.css";

export default function PreLoader() {
  return (
    <div className="circle">
      <div className="circle-preloader"></div>
      <div>
        <p className="circle-text">Searching for news...</p>
      </div>
    </div>
  );
}
