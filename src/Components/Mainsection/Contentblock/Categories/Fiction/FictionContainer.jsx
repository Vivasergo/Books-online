import { connect } from "react-redux";
import CategoryBlock from "../CategoryBlock";

let mapStateToProps = (state) => {
  return {
    categoryData: state.categories.fiction,
  };
};

const FictionContainer = connect(mapStateToProps)(CategoryBlock);

export default FictionContainer;
