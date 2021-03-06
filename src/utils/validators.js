export const required = (value) => {
    return value
        ? undefined
        : "line is required"
}

export const email = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
}
