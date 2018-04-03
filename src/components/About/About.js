import React from 'react';
import './About.css'
import { connect } from 'react-redux'; 
import { aboutOnToggle } from '../../actions/mainActions'; 
import { Transition } from 'react-transition-group';

export class About extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            signUp: true
        }
    }

    handleClose() {
        this.props.dispatch(aboutOnToggle()); 
    }
   
    render() {

        // Transition styles

        const duration = 300;
        const defaultStyle = {
            opacity: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: '100%',
            width: '100%',
            margin: '0px',
            zIndex: 20,
            top: '0px',
            bottom: '0px',
            left: '0px',
            right: '0px',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            transition: `opacity ${duration}ms ease-in-out`
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        }

        // toggle signup options

        return (
            <Transition in={true} timeout={duration} appear={true}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <div className="about-main">
                            <div onClick={() => this.handleClose()} className="about-close">
                                <i className="fas fa-times about-close-icon"></i>
                            </div>
                           
                                <h2 className="about-title"><i class="fas fa-info-circle"></i>&nbsp;&nbsp;About</h2>
                                <p className="about-p">TaskTracker is an application for organizing your daily activities. 
                                Users can create different boards for different task groups. Within a board, a user may add as many 
                                task items as they wish. Check off items as you complete them. It's easy!
                                <br />
                                <br />
                                This application was made in 2018 by Jack Seabolt. It was constructed using React, Redux, Node,
                                 Express and Postgres.     
                                </p>
                               
                           
                        </div>
                    </div>
                )}
            </Transition >
        )
    }
}


export default connect()(About); 