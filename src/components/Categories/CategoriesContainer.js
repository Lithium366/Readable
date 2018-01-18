import { connect } from 'react-redux';
import Categories from './Categories';

export default connect(
  ({ categories }) => ({ categories })
)(Categories);