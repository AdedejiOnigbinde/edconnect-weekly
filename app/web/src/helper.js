export const getUserId = () => {
    if (document.cookie.includes('uid')) {
        let uidRow = document.cookie.split(';').find(row => row.startsWith('uid'));
        if (uidRow) {
            return uidRow.split('=')[1]
        }
    }
    return false;
}

