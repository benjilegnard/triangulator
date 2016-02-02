import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
//import { ReduxRouter } from 'redux-router''
import DevTools from './DevTools'
import Document from './Document'
import ToolBar from './ToolBar'


class Root extends Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                <header class="toolbar toolbar-header">
                    <h1 class="title">Triangulator</h1>
                    <ToolBar/>
                </header>
                <main>
                    <Document
                        triangles={store.triangles}
                        points={store.points}
                    />
                    <DevTools />
                </main>
                <footer class="toolbar toolbar-footer">jibhaine 2016</footer>
            </Provider>
        )
    }
}

Root.propTypes = {
    dispatch: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        recentDocuments : state.documents,
        openDocument    : state.documents.filter((doc)->doc.opened)
    };
}


export default connect(mapStateToProps)(Root)

