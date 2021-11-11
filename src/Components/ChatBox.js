import { useState } from "react";
import handleMsg from "../Modules/handleMsg";

function ChatBox() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    handleMsg(msg.toLowerCase())
  }

  return (
    <div className="chatBox">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="text"
          id="text"
          className="msg"
          required
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
}

export default ChatBox;  
