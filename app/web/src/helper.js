export const getUserId = () => {
    if (document.cookie.includes('uid')) {
        let uidRow = document.cookie.split(';').find(row => row.trim().startsWith('uid'));
        if (uidRow !== -1) {
            return uidRow.split('=')[1]
        }
    }
    return false;
}

