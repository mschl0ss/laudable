import { getContentCreators, getContentCreator } from '../utils/content_creator_utils';

export const RECEIVE_ALL_CONTENT_CREATORS = 'RECEIVE_ALL_CONTENT_CREATORS';
export const RECEIVE_CONTENT_CREATOR = 'RECEIVE_CONTENT_CREATOR';

const receiveAllContentCreators = contentCreators => ({
    type: RECEIVE_ALL_CONTENT_CREATORS,
    contentCreators
});

const receiveContentCreator = contentCreator => ({
    type: RECEIVE_CONTENT_CREATOR,
    contentCreator
});

export const fetchContentCreators = () => dispatch => {
    // debugger;
    return (
        getContentCreators()
            .then(contentCreators => dispatch(receiveAllContentCreators(contentCreators)))
    )
}

export const fetchContentCreator = contentCreatorId => dispatch => {

    
    return (
        getContentCreator(contentCreatorId)
            .then(contentCreator => dispatch(receiveContentCreator(contentCreator)))
    )
}