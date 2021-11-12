import context from "./context";

function Understand(msg) {
  let retValue = context(msg);
  return retValue;
}

export default Understand;
