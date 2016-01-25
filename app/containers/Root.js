import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
//import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'
import Document from './Document'
import ToolBar from './ToolBar'


export default class Root extends Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                <div id="wrapper">
                    <nav>
                        <ToolBar/>
                    </nav>
                    <main>

                        <Document
                            triangles={store.triangles}
                            points={store.points}
                        />
                        <DevTools />
                    </main>
                    <footer>jibhaine 2016</footer>
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}