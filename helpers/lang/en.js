/* Instructions for adding new languages
 - Language key should always be all lower case and multiple words should be separated by underscore
 - Order of the language tree should be alphabetical
 - Always make sure you have added language in both en and no file - Match the line number
 - Make sure the language you are adding already doesn't exist.
 - Common word like 'yes', 'no', 'apply' which are used in lots of places in the app should only
 go to the common object in the language tree
 - Different objects can be used for dynamic language
*/

const en = {
  common: {
    yes: "Yes",
    no: "No",
  },
  errors: {
    bad_request: "Something went wrong! Please try again.",
    unauthorized: "Unauthorized",
    not_found: "Not found!",
    internal_server_error: "Internal server error!",
    you_have_been_deactivated: "You have been deactivated!",
  },
  label: {
    password: "Password",
  },
};

export default en;
