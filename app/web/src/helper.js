export const getUserId = () => {
    if (document.cookie.includes('uid')) {
        let uidRow = document.cookie.split(';').find(row => row.startsWith('uid'));
        if (uidRow !== -1) {
            return uidRow.split('=')[1]
        }
    }
    return false;
}

export const logOut = () => {
    document.cookie = `uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
   window.location.href = "/"
};
