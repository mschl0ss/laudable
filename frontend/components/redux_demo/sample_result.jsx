import React from 'react';
import { connect } from 'react-redux';

const msp = state => ({
        formData: state.ui.reduxDemo
    })

class SampleResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {}
        }
    }

    render() {
        const { formData } = this.props;

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

export default connect(msp, null)(SampleResult);