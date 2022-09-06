import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import * as actions from '../actions';

// в классовом компоненте тоже будет работать

import { Component } from "react";

class Counter extends Component {

    render() {

        const {counter, inc, dec, rnd} = this.props;

        return (

            <div className="jumbotron">
                <h1>{counter}</h1>
                <button onClick={inc} className="btn btn-primary">INC</button>
                <button onClick={dec} className="btn btn-primary">DEC</button>
                <button onClick={rnd} className="btn btn-primary">RND</button>
            </div>
        );
    }
}

// const Counter = ({counter, inc, dec, rnd}) => {

//     return (

//         <div className="jumbotron">
//             <h1>{counter}</h1>
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={dec} className="btn btn-primary">DEC</button>
//             <button onClick={rnd} className="btn btn-primary">RND</button>
//         </div>
//     );
// }

const mapStateToProps = (state) => {

    return {

        counter: state.value
    }
} 

// вместо этой функции можем прописать просто actions
// const mapDispatchToProps = (dispatch) => {

//     return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, actions)(Counter);