/**
 * Converts a given string into a URL-friendly slug.
 *
 * Steps:
 * - Converts to lowercase
 * - Trims whitespace
 * - Removes special characters
 * - Replaces spaces with dashes
 * - Collapses multiple dashes into one
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The resulting slug.
 */
export const toSlug = (text: string): string =>
    text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // remove special characters
        .replace(/\s+/g, '-') // replace spaces with dashes
        .replace(/-+/g, '-'); // collapse multiple dashes
