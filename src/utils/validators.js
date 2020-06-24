export const required = (value) => {
    if (value) {
        return undefined
    } else {
        return "line is required"
    }
}