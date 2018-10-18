import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };
  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              type="text"
              onChange={this.handleChange}
              name="body"
              value={this.state.body}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostForm);
