/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
   command = command.replaceAll("()", "o");
  command = command.replaceAll("(", "").replaceAll(")", "");
  return command;
};
