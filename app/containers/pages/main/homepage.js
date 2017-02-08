import React from 'react';
import {connect} from 'react-redux';


function mapStateToProps(state){
  return {
    main : state.main
  };
}
export default connect(mapStateToProps)(function(props){
  console.log(props);
  return <div>
    <h1> Home page</h1>
  </div>;
})
