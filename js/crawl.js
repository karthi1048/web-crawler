// It takes URL & normalize it so that output will be same on all other inputs, if they represent same page.
function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if(hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0, -1)
    }
    return hostPath
}

normalizeURL("https://blog.boot.dev/path");

module.exports = {
    normalizeURL
}