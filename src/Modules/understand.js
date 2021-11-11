import greetKeys from "./greet/greetWords";
import greetResponse from "./greet/greetResponse";

function Understand(msg) {
  let msgArray = msg.split(" ");
  let greetWords = greetKeys();
  let found = false;
  let retVal;
  greetWords.forEach((greetWord) => {
    if (found) return;
    msgArray.forEach((word) => {
      if (greetWord === word) {
        found = true;
        retVal = greetResponse();
        return;
      }
    });
  });
  if (!found)
    return "I can't understand what you are saying, sorry";
  return retVal;
}
export default Understand;
