export const getBooks = () => ({
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
});