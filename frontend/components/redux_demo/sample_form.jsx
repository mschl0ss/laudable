import React from 'react';


class SampleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //need to explicitly declare state variables or else warning
            //maybe typescript satisfies it differently?
            formData: {
                fName: '',
                lName: '',
                condiment: '',
            },
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state.formData));
        this.setState({formData: {}});
        //dispatch redux action
    }

    updateField(field) {

        return(e) => {
            const formData = Object.assign({}, this.state.formData);
            formData[field] = e.currentTarget.value;
            this.setState({formData})
        }
    }

    render() {

        const { formData } = this.state;
        return (
            <section className = "redux-demo sample-form session-form">

                <header>
                    <h3>Redux Demo</h3>
                </header>

                <form onSubmit={this.handleSubmit} >
                    <label>First Name
                        <input type="text"
                            value={formData.fName}
                            placeholder="Enter your first name"
                            onChange={this.updateField('fName')}
                        />
                    </label>
                    
                    <label>Last Name
                        <input type="text"
                            value={formData.lName}
                            placeholder="Enter your last name"
                            onChange={this.updateField('lName')}
                        />
                    </label>
                    
                    <label>Favorite Burger Condiment
                        <input type="text"
                            value={formData.condiment}
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