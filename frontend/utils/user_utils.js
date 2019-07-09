export const getUser = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}`
    })
)
