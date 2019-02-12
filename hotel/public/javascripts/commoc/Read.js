List = (path, callback) => {
    $.ajax({
        url: path,
        type: 'get',
        success(e) {
            callback(e);
        }
    })
}