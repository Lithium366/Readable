import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.post
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  componentWillMount() {
    const {
      categories,
      fetchCategories
    } = this.props;

    // Lazy load categories
    if (categories.length < 2) {
      fetchCategories();
    }
  }

  componentWillReceiveProps(nextProps) {
    let {
      category,
      categories
      } = nextProps;

    this.setState({
      category: category || categories[1].name
    });
  }

  changeValue(e) {
    const {
      name,
      value
    } = e.target;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      addPost,
      updatePost,
      onHideForm,
      sortState
    } = this.props;
    const {
      id,
      body,
      title
    } = this.state;

    if (id) {
      updatePost({ id, title, body }).then(() => onHideForm());
    } else {
      addPost(Object.assign({}, this.state), sortState)
       .then(() => {
         // Reset form
         this.setState({
           category: this.state.category,
           title: '',
           body: '',
           author: ''
         });
       });
    }
  }

  render() {
    const {
      categories
    } = this.props;

    const {
      category,
      title,
      author,
      body,
      id
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="category">Select a category:</label>
          <select name="category" value={category || ''} onChange={this.changeValue} disabled={!!id}>
            { categories.filter(v => v.name !== 'all').map(cat => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            )) }
          </select>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input name="title" value={title || ''} onChange={this.changeValue}/>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input name="author" value={author || ''} onChange={this.changeValue} disabled={!!id}/>
        </div>
        <div>
          <label htmlFor="body">Post body:</label>
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
