import { connect } from 'react-redux';

const Page = (props) => {
  return (
    <div>Opa, funcionando alan foda...</div>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);