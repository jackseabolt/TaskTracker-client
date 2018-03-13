import React from 'react'; 
import { Transition } from 'react-transition-group'; 

export default class ToDoItem extends React.Component {
    
    render() {

        // react transition group setup data
        const duration = 300; 
        const defaultStyle = {
            width: 'calc(100% - 60px)', 
            padding: '30px', 
            backgroundColor: 'rgb(178, 177, 194)', 
            color: 'white',
            marginTop: '10px', 
            marginBottom: '10px', 
            borderRadius: '5px', 
            transition: `opacity ${duration}ms ease-in-out`
        }
        const transitionStyles = {
            entering: { opacity: 0 }, 
            entered: { opacity: 1 }
        }

        return (
            <Transition in={true} timeout={300} appear={true}>
                {(state) => (
                    <div style={{ 
                        ...defaultStyle, 
                        ...transitionStyles[state]
                    }} > 
                        {this.props.item} 
                        <div className="g-graphic-button" onClick={() => this.props.onDelete(this.props.item)}>
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="g-graphic-button" onClick={() => this.props.onCheck(this.props.item)}>
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}