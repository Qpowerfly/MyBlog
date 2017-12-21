import * as React from 'react'
import * as ReactDOM from 'react-dom'
import SoContainer from './views/soContainer'
import store from './store'

class So extends React.Component {
    render() {
        return <div>
            <SoContainer />
        </div>;
    }
}
ReactDOM.render(<So />, document.getElementById('divSoContainer'));