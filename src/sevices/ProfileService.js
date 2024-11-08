/**
 * @module ProfileService
 *
 * A service module for managing user profile data within the application.
 */
export default {
    /**
     * Function used to get profiles from API
     * @param page {number} pagination page
     * @param size {number} number of profiles to fetch
     * @returns {Promise<Response>}
     */
    getProfiles(page= 1, size = 20) {
        return fetch(`${import.meta.env.VITE_API_URL}?page=${page}&results=${size}&inc=cell,name,picture,location,email,registered,login`)
    }
}
