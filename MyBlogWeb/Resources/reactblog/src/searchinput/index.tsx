import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SoContainer from './views/soContainer'
import store from './store'


class So extends React.Component {
    render() {
        return <Provider store={store}>
            <SoContainer />
        </Provider>;
    }
}
ReactDOM.render(<So />, document.getElementById('divSoContainer'));