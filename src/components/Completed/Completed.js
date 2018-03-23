import React from 'react'; 
import CompletedItem from '../CompletedItem/CompletedItem';
import { connect } from 'react-redux';  

export class Completed extends React.Component {
    render() {

        const items = this.props.items.map((item, key) => (
            <CompletedItem key={key} item={item} onDelete={value => this.props.onDelete(value)}/>
        )); 

        return (
            <section className="g-column">
                <div className="g-item-title">
                    <h3 className="g-title">Completed</h3>
                </div>
                { items }
            </section>
        )
    }
}

const mapStateToProps = state => ({
}); 

export default connect(mapStateToProps)(Completed); 