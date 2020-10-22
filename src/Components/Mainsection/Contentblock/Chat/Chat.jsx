import React from "react";
import { sendContactFormCreator } from "../../../../Redux/chatReducer";

const Chat = (props) => {
  let inputContRef = React.createRef();

  const [question, setQuestion] = React.useState("");

  function handleInputChange(event) {
    let { name, value } = event.target;

    if (name === "question") {
      setQuestion(value);
    }
  }

  const handleSendContBtn = (event) => {
    event.preventDefault();
    let textToSend = inputContRef.current.value;
    props.sendCont(textToSend);
    setQuestion("");
    // props.sendContactForm(textToSend);
  };

  return (
    <div>
      <h4>Contact block</h4>
      <form>
        <label>
          {" "}
          Write your comment:
          <br />
          <input
            ref={inputContRef}
            name="question"
            type="text"
            col="10"
            value={question}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSendContBtn}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
