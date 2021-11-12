import greet from "./greet/greet";

function context(msg) {
  let retVal = "Sorry, i don't know what that means";
  let greetRet = greet(msg);
  if (greetRet[1]) retVal = greetRet[0];
  return retVal;
}
export default context;
