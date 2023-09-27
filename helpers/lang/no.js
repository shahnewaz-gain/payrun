/* Instructions for adding new languages
 - Language key should always be all lower case and multiple words should be separated by underscore
 - Order of the language tree should be alphabetical
 - Always make sure you have added language in both en and no file - Match the line number
 - Make sure the language you are adding already doesn't exist.
 - Common word like 'yes', 'no', 'apply' which are used in lots of places in the app should only
 go to the common object in the language tree
 - Different objects can be used for dynamic language
*/

const no = {
  common: {
    no: 'No',
    yes: 'Yes'
  },
  errors: {
    bad_request: 'Something went wrong! Please try again.',
    not_found: 'Not found!',
    internal_server_error: 'Internal server error!',
    unauthorized: 'Unauthorized',
    you_have_been_deactivated: 'You have been deactivated!'
  },
  label: {
    password: 'Passord',
    sign_up: 'Sign up',
    log_in: 'Log in'
  },
  action: {
    successfully_created_account: 'Successfully Created account!'
  }
};

export default no;
