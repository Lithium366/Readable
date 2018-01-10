import { connect } from 'react-redux';
import Categories from './Categories';

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Categories);