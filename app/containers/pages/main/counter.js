import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {inc,dec} from '../../../actions/counter';

function mapStateToProps(state){
  return {
    counter: state.counter
  };
}

export function Counter(props){
  console.log(props);
  return <div>
    <h1> Counter page</h1>
    <p> Current counter value {props.counter.value} </p>
    <button onClick={props.inc}>Increment Counter</button>
    <button onClick={props.dec}>Decrement Counter</button>
  </div>;
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  inc: PropTypes.func,
  dec: PropTypes.func,
}

export default connect(mapStateToProps, { inc, dec })(Counter)
