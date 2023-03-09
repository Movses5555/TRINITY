export const generateQuery = (filter = {}) => {
    const query = [];
    Object.keys(filter).forEach((key) => {
        if(!!filter[key]) {
            query.push(`${ key }=${ filter[key] }`);
        }
    })
    return query;
}