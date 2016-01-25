import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Root from './containers/Root';

const initialState = {
    triangles:[],
    points:[],
    documents:[]
};
const reducer = (state = [], action)=>{


    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ]);
        default:
            return state
    }
}
const store = createStore( reducer, initialState);

render(
    <Root store={store}/>,
    document.getElementById('root')
);