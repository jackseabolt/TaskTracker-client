import React from 'react'; 
import { connect } from 'react-redux'; 

export class BoardSelector extends React.Component {
    
    render() {
        return (
            <section>
                <h4>{this.props.name}</h4>
            </section>
        )
    }
}

export default connect()(BoardSelector); 