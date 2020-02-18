export const RECEIVE_SAMPLE_FORM = 'RECEIVE_SAMPLE_FORM';

export const postSampleForm = formData => ({
    type: RECEIVE_SAMPLE_FORM,
    formData
})