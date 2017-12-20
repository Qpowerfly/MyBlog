import * as React from 'react'
import * as ReactDOM from 'react-dom'
import InputSo from './views/inputSo'

class So extends React.Component {
    render() {
        return <div>
            <InputSo />
        </div>;
    }
}


ReactDOM.render(<So />, document.getElementById('divSoContainer'));