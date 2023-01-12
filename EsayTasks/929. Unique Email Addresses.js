//929. Unique Email Addresses

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  //get the first element in array
  //extract domain and check if in domain array
  //if domain exists
  //extract the username and remove anything from + sign in username
  // check if username exists in the username array associated with the domain
  // if it does not exist increase count by 1

  //if domain does not exist
  //extract username and push it into array increase count by 1
  let emailObject = {};
  let count = 0;
  emails.forEach((email) => {
    let [usernameWithPlus, domain] = email.split("@");
    let [username] = usernameWithPlus.split("+");
    username = username.replace(/\./g, "");
    if (!emailObject[domain]) {
      //domain does not exist
      emailObject[domain] = [username];
      count++;
    } else {
      //check if username exists
      if (!emailObject[domain].includes(username)) {
        emailObject[domain].push(username);
        count++;
      }
    }
  });
  return count;
};
