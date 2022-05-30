/**
 * If the admin object exists in localStorage, and it has an apiToken and adminToken, return an object
 * with those two properties. Otherwise, if the admin object exists in localStorage, and it has an
 * apiToken, return an object with that one property. Otherwise, return an empty object
 * @returns An object with the apiToken and adminToken.
 */
export default function authHeader() {
    const admin = JSON.parse(localStorage.getItem('admin'))
    if (admin && admin.apiToken && admin.adminToken) {
        return {
            apiToken: admin.apiToken,
            adminToken: admin.adminToken
        }
    } else if (admin && admin.apiToken) {
        return {
            apiToken: admin.apiToken
        }
    } else {
        return {}
    }
}