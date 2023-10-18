 import { connect } from "react-redux";
 import * as actions from 'redux/actions';

 const Counter = ({value, step, onIncrement, onDecrement}) => {
    return (
        <div className="Counter__container">
            <span className="Counter__value">{value}</span>
            <div className="Counter__controls">
               <button type="button" className="Counter__btn" onClick={() => onIncrement(step)}>Plus {step}</button>
                <button type="button" className="Counter__btn" onClick={() => onDecrement(step)}>Minus {step}</button> 
            </div>
            
        </div>
    )
 };

 const mapStateToProps = (state) => {
    return {
        value: state.counter.value,
        step: state.counter.step
    }
 };

 const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(actions.increment(value)),
        onDecrement: (value) => dispatch(actions.decrement(value))
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Counter);