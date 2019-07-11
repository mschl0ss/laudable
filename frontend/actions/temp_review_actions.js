export const RECEIVE_TEMP_REVIEW_OBJ = 'RECEIVE_TEMP_REVIEW_OBJ';
export const RECEIVE_HELPER_PROPS = 'RECEIVE_HELPER_PROPS';
export const CLEAR_TEMP_REVIEW_OBJ = 'CLEAR_TEMP_REVIEW_OBJ';

export const receiveTempReviewObj = temp => ({
    type: RECEIVE_TEMP_REVIEW_OBJ,
    temp
})

export const receiveHelperProps= helpers => ({
    type: RECEIVE_HELPER_PROPS,
    helpers
})
export const clearTempReviewObj = ()=> ({
    type: CLEAR_TEMP_REVIEW_OBJ
})

