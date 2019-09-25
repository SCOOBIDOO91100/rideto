import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import PostItem from "../posts/PostItem";
import { getProfileById, deleteAccount } from "../../actions/profile";

import { getPostsByUser } from "../../actions/post";

const Profile = ({
  deleteAccount,
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
  getPostsByUser,
  post: { posts }
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getPostsByUser(match.params.id);
  }, [getProfileById, match.params.id, getPostsByUser]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profile-component">
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
            </div>

            <div className="posts postsbyuser">
              {posts.map(post => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>
          </div>

          <div className="button-edit-profile">
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn btn-dark">
                  Edit Profile
                </Link>
              )}
            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus" /> Supprimer mon compte
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPostsByUser: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getProfileById, getPostsByUser }
)(Profile);
