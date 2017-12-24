import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import IndexView from './views/index'


class So extends React.Component {
    render() {
        return <Provider store={store}>
            <IndexView />
        </Provider>;
    }
}
ReactDOM.render(<So />, document.getElementById('divSoContainer'));