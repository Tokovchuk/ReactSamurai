export const required = (value) => {
    return value ? undefined : 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
    return value.length <= maxLength ? undefined : `max length is ${maxLength} symbols`
}