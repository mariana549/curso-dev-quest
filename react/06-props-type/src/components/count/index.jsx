import propTypes from "prop-types";
import "./style.css";

const Count = (props) => {
   return (
      <>
         <div className="card">
            <button onClick={props.incrementCount}>
              count is {props.count}
            </button>
         </div>
      </>
   )
}

Count.propTypes = {
   count: propTypes.number.isRequired,
   incrementCount: propTypes.func.isRequired,
}

export default Count;