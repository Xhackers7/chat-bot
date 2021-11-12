import greetResponse from "./greetResponse";
import greetKeys from "./greetKeys";

function greet(msg) {
  let greetWords = greetKeys();
  let found = false;
  greetWords.forEach((greetWord) => {
    if (!found) found = msg.includes(greetWord);
    if (found) return;
  });
  if (!found) return ["", false];
  return [greetResponse(), found];
}
export default greet;
