let defaultOption = {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
};

let getFullUrl = url => {
    return url;
};

let commonRes = p => {
    return p.then(res => {
        return res.json();
    });
};

let get = (url, data) => {
    let tmp = [];
    if (data) {
        Object.keys(data).forEach(key => {
            tmp.push(key + '=' + data[key]);
        });
    }

    let query = tmp.join('&');
    if (url.indexOf('?') > -1) {
        url += '&' + query;
    } else {
        url += '?' + query;
    }
    return commonRes(fetch(getFullUrl(url), defaultOption));
};
let post = (url, data = {}) => {
    let option = Object.assign({}, defaultOption, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return commonRes(fetch(getFullUrl(url), option));
};

module.exports = {
    get: get,
    post: post
};
