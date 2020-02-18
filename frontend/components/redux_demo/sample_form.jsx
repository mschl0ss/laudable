import React from 'react';
import { connect } from 'react-redux';
import { postSampleForm } from '../../actions/redux_demo_actions';

const mdp = dispatch => ({
    postData: formData => dispatch(postSampleForm(formData))
});

class SampleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
        // alert('submitted');
        this.props.postData(this.state.formData);
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

export default connect(null, mdp)(SampleForm);