export const projection = rules => {
    const keys = Object.keys(rules);
    return obj =>  keys.reduce((newObj, key) => {
        newObj[key] = rules[key].reduce((val, fn, index) => (index ? fn(val) : obj[fn]), null);
        return newObj;
    }, {});
};

