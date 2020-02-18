import React from 'react';

class SampleResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputFields: {}
        }
    }

    render() {
        const { fName = '', lName = '', condiment = '' } = this.props;

        return(
            <section className="redux-demo session-form result">
                <h3>output</h3>
                
                <label>First Name
                    <mark>{fName}</mark>
                </label>

                <label>Last Name
                    <mark>{lName}</mark>
                </label>

                <label>Condiment
                    <mark>{condiment}</mark>
                </label>

            </section>
        )
    }
}

export default SampleResult;