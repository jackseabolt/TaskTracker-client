import React from 'react'; 
import { connect } from 'react-redux'; 
import './BoardSelector.css'; 

export class BoardSelector extends React.Component {
    
    render() {
        return (
            <section className="board-selector">
                <p className="board-selector-p">{this.props.name}</p>
            </section>
        )
    }
}

export default connect()(BoardSelector); 