import { connect } from 'react-redux';
import PostForm from './PostForm';

const mapDispatchToProps = (dispatch) => {
  return {}
};

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);