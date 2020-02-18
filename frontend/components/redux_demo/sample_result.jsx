import React from 'react';
import { connect } from 'react-redux';

const msp = state => {
    // console.log(state.ui)
    return ({
        formData: state.ui.reduxDemo
    })
}

class SampleResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {}
        }
    }

    componentDidUpdate(prevProps) {
        // console.log('cDU', prevProps, this.props)
        // console.log('prevState', this.state)
        if(prevProps.formData !== this.props.formData) {
            this.setState({ formData: this.props.formData})
        }
        // console.log('postState', this.state)
    }
    render() {
        console.log('render', this.state)
        const { formData } = this.state;

        return(
            <section className="redux-demo session-form result">
                <h3>output</h3>
                
                <label>First Name
                    <mark>{formData.fName}</mark>
                </label>

                <label>Last Name
                    <mark>{formData.lName}</mark>
                </label>

                <label>Condiment
                    <mark>{formData.condiment}</mark>
                </label>

            </section>
        )
    }
}

export default connect(msp)(SampleResult);