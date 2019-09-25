import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState("");

  return (
    <div className="post-form">
      <div className="small"></div>
      <form encType="multipart/form-data"
        className="form my-1 form-actu"
        onSubmit={e => {
          e.preventDefault();
          console.log('tutu', file)
          addPost({ text, image: file});
          setText("");
          setFile("");
        }}
      >
        <textarea
          className="inputpost"
          name="text"
          cols="30"
          rows="5"
          placeholder="Partagez une pensée..."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input  type='file' name='image' onChange= {e => setFile(e.target.files[0])}/>
        <input className="btn btn-primary" type='submit' />
       
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
