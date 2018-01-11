import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentId: props.parentId
    };

    if (props.comment) {
      this.state = {
        ...this.state,
        ...props.comment
      };
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  resetState() {
    this.setState({
      author: '',
      body: ''
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      id,
      timestamp,
      body
    } = this.state;

    const {
      addComment,
      updateComment,
      onHideForm
    } = this.props;

    if (id) {
      updateComment({ id, timestamp, body }).then(() => onHideForm());
    } else {
      addComment(Object.assign({}, this.state)).then(() => this.resetState());
    }
  }

  changeValue(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      id,
      author,
      body
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="author">Author:</label>
          <input name="author" value={author || ''} onChange={this.changeValue} disabled={!!id}/>
        </div>
        <div>
          <label htmlFor="body">Comment:</label>
          <textarea name="body" value={body || ''} onChange={this.changeValue}></textarea>
        </div>
        <div>
          <button type="submit" name="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default PostForm;
