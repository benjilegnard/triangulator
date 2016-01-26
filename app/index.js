import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import configureStore  from './store/configureStore'
import { Provider, connect } from 'react-redux'
import DevTools from './containers/DevTools'
import Root from './containers/Root'

const initialState = {
    triangles:[],
    points:[],
    documents:[]
};

const store = configureStore(initialState);

render(
    <Root store={store}/>,
    document.getElementById('root')
);