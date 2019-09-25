import React from "react";
import { Link } from "react-router-dom";

const DashboardPosts = () => {
  return (
    <div className="dash-buttons">
      <Link to="/add-experience" className="btn btn-light">
        <i className="fas fa-pen-alt"></i> Publier un post
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="far fa-question-circle"></i>Poser une question
      </Link>
      {/* <Link to="/add-education" className="btn btn-light">
        <i class="far fa-photo-video"></i>Poster une photo/vidéo
      </Link> */}
    </div>
  );
};

export default DashboardPosts;