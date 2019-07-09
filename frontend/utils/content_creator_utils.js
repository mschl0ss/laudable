export const getContentCreators = () => (
    $.ajax ({
        method: 'GET',
        url: `/api/content_creators`
    })
);

export const getContentCreator = contentCreatorId => (
    $.ajax ({
        method: 'GET',
        url: `/api/content_creators/${contentCreatorId}`
    })
);