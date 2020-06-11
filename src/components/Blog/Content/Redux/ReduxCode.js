const Content = {
  code1: `npm i redux`,
  store: `import React from 'react';
  import ReactDOM from 'react-dom';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  
  import './index.css';
  import App from './App';
  
  import reducer from './store/reducer';
  
  const store = createStore(reducer);
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );`,
  reducer: `const initialState = {
    counter: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return {
          ...state,
          counter: state.counter + 1,
        };
      case actionTypes.DECREMENT:
        return {
          ...state,
          counter: state.counter - 1,
        };
      case actionTypes.ADD:
        return {
          ...state,
          counter: state.counter + 5,
        };
      case actionTypes.SUB:
        return {
          ...state,
          counter: state.counter - 5,
        };
      default:
        break;
    }
    return state;
  };
  
  export default reducer;`,
  reactredux: `npm i react-redux`,
  provider: `import { Provider } from 'react-redux';
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );`,
  component: `import React, { Component } from 'react';
  import { connect } from 'react-redux';
  
  import CounterControl from '../../components/CounterControl/CounterControl';
  import CounterOutput from '../../components/CounterOutput/CounterOutput';
  
  class Counter extends Component {
    render() {
      return (
        <div>
          <CounterOutput value={this.props.ctr} />
          <CounterControl
            label='Increment'
            clicked={this.props.onIncrementCounter}
          />
          <CounterControl
            label='Decrement'
            clicked={this.props.onDecrementCounter}
          />
          <CounterControl label='Add 5' clicked={this.props.onAddCounter} />
          <CounterControl label='Subtract 5' clicked={this.props.onSubCounter} />
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      ctr: state.counter,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
      onAddCounter: () => dispatch({ type: actionTypes.ADD }),
      onSubCounter: () => dispatch({ type: actionTypes.SUB }),
      handleStore: (result) =>
        dispatch({ type: actionTypes.STORE, result: result }),
      deleteStore: (id) => dispatch({ type: actionTypes.DELETE, resultElId: id }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);`,
  actions: `export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';`,
  actionsimport: `import * as actionTypes from './store/actions';`,
};

export default Content;
