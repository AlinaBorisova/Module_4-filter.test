const filter = (arr, key, val) => {
    const result = [];

    for (let item of arr) {
        if(item[key] === val) {
            result.push(item);
        }
    }

    return result;
};

export default filter;