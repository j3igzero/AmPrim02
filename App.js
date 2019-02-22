import React from "react";
import Setup from "./src/boot/setup";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={ store }>
    		<Setup />
		</Provider>
	);
  }
}

const defaultState = {
	author: 'Viet Anh Tran',
	girlFriend: 'Thuy Rom 99'
};

const reducer = (state = defaultState, action)=> {
	return state;
};

const store = createStore(reducer);