import React, {Component} from 'react'

class Props extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <h2>Props {this.props.nombre}</h2>
        );
    }
}


export default Props;