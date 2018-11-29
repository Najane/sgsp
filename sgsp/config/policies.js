/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',
  
  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'entrance/view-signup': 'is-super-admin',
  'entrance/signup': 'is-super-admin',
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'deliver-contact-form-message': true,

};
