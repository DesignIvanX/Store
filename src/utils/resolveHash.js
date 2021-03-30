const ResolveHash = (hash) => {
    if(hash === "/home" || hash === "/"){
        const validateRoute = "/home"
        return validateRoute
    }
    return `/${hash}`
}
export default ResolveHash