import React from 'react';
import SampleForm from './sample_form';
import SampleResult from './sample_result';

function ReactDemoWrapper(props) {
    
    return (
        <section className="redux-demo-wrapper">
            <SampleForm />
            <SampleResult />
        </section>
    )
}

export default ReactDemoWrapper;