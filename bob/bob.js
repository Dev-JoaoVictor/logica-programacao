//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  message = message.trim();

  if (!message) {
    return "Fine. Be that way!"
  }

  if (message == message.toUpperCase() && message !== message.toLowerCase()) {
    if (message.endsWith('?')) {
      return "Calm down, I know what I'm doing!"
    } else {
      return "Whoa, chill out!"
    }
  }

  if (message.endsWith('?')) {
    return 'Sure.'
  }

  return "Whatever."
};
