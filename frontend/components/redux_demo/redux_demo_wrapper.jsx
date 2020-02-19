import React from 'react';
import SampleForm from './sample_form';
import SampleResult from './sample_result_functional';

function ReactDemoWrapper(props) {
    
    return (
        <>
            <section className="redux-demo-wrapper">
                <SampleForm />
                <SampleResult />
            </section>
            <section className="redux-demo-wrapper">
                <SampleResult />
                <SampleResult />
            </section>
        </>
    )
}

export default ReactDemoWrapper;