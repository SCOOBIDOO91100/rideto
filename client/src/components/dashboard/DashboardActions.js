import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Modifier mes
        informations de profil
      </Link>
      {/* <Link to="/add-experience" className="btn btn-light">
        <i class="fas fa-pen-alt"></i> Publier un post
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i class="far fa-question-circle"></i>Poser une question
      </Link> */}
    </div>
  );
};

export default DashboardActions;
