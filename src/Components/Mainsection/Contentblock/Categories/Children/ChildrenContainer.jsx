import { connect } from "react-redux";
import CategoryBlock from "../CategoryBlock";

let mapStateToProps = (state) => {
  return {
    categoryData: state.categories.children,
  };
};

const ChildrenContainer = connect(mapStateToProps)(CategoryBlock);

export default ChildrenContainer;
