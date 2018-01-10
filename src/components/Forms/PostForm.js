import React, { Component } from 'react';

const allCategory = 'all';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: allCategory
    }
  }

  componentWillReceiveProps(nextProps) {
    let { category } = nextProps;
    if (!category) {
      category = allCategory;
    }
    this.setState({
      category
    });
  }

  selectCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  
  render() {
    const {
      category,
      categories
      } = this.props;

    return (
      <form>
        <label htmlFor="category">Select a category:</label>
        <select name="category" value={this.state.category} onChange={(e) => this.selectCategory(e)}>
          { categories.map(cat => (
            <option key={cat.name} value={cat.name}>{cat.name}</option>
          )) }
        </select>
      </form>
    );
  }
}

export default PostForm;
