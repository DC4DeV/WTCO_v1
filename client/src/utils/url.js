/**
 * Npm import
 */

import slugify from 'slugify';

// Transformation d'une string en slug avec la lib slugify
// objet de config pour :
// - Passer en minuscules
// - Supprimer les caractères en trop : `*_+~.()'"!-:@`
export const getSlug = string => (
  slugify(string, { lower: true, remove: /[$*_+~.()'"!\-:@]/g })
);

// Recomposition d'une URL avec un prefix + le travail de getSlug()
export const getURL = (prefix, name) => `${prefix}/${getSlug(name)}`;
