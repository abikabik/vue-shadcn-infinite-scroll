/**
 * @typedef {Object} ProfileLocation
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} postcode
 * @property {{number: number, name: string}} street
 * @property {{longitude: string, latitude: string}} coordinates
 * @property {{offset: string, description: string}} timezone
 */

/**
 * @typedef {Object} ProfileLogin
 * @property {string} uuid
 * @property {string} username
 * @property {string} password
 * @property {string} salt
 * @property {string} md5
 * @property {string} sha1
 * @property {string} sha256
 */

/**
 * @typedef {Object} ProfilePicture
 * @property {string} large
 * @property {string} medium
 * @property {string} thumbnail
 */

/**
 * @typedef {Object} ProfileName
 * @property {string} title
 * @property {string} first
 * @property {string} last
 */

/**
 * @typedef {Object} ProfileRegistered
 * @property {string} date
 * @property {string} age
 */



/**
 * @typedef {Object} ProfileDto
 * @property {string} cell
 * @property {string} email
 * @property {string} location
 * @property {ProfileLocation} location
 * @property {ProfileLogin} login
 * @property {ProfilePicture} picture
 * @property {ProfileName} name
 * @property {ProfileRegistered} registered
 */
