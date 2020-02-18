import React from 'react';


class SampleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formFields: {},
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // alert('submitted');
        this.setState({formFields: {}});
        //dispatch redux action
    }

    updateField(field) {

        return(e) => {
            const formFields = Object.assign({}, this.state.formFields);
            formFields[field] = e.currentTarget.value;
            //TODO try to do just ({formFields})
            this.setState({formFields: formFields})
        }
    }

    render() {

        const { formFields } = this.state;
        return (
            <section className = "redux-demo sample-form session-form">

                <header>
                    <h3>Redux Demo</h3>
                </header>

                <form onSubmit={this.handleSubmit} >
                    <label>First Name
                        <input type="text"
                            value={formFields.fName}
                            placeholder="Enter your first name"
                            onChange={this.updateField('fname')}
                        />
                    </label>
                    
                    <label>Last Name
                        <input type="text"
                            value={formFields.lName}
                            placeholder="Enter your last name"
                            onChange={this.updateField('lname')}
                        />
                    </label>
                    
                    <label>Favorite Burger Condiment
                        <input type="text"
                            value={formFields.condiment}
                            placeholder="there will be a polygraph"
                            onChange={this.updateField('condiment')}
                        />
                    </label>

                <button onClick={this.handleSubmit} className='orange-button' >submit</button>
                </form>
            </section>
        )
    }
}

export default SampleForm;