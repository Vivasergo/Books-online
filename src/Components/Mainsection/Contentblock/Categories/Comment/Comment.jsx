import React from "react";


const Comment = (props) => {
  const newCommentElement = React.createRef();

  //   const [textareaText, setTextareaText] = useState("");
  // console.log(props.addComment);
  const onCommentChange = (event) => {
    let value = event.target.value;
    props.handleCommentChange(value);
  };

  const addCommentClick = (event) => {
    event.preventDefault();
    let commentText = newCommentElement.current.value;
    props.addComment(commentText);
  };
;

  return (
    <div>
      <h5>Write your comment</h5>
      <form>
        <textarea
          ref={newCommentElement}
          name="commentText"
          onChange={onCommentChange}
          value={props.commentFieldText}
        ></textarea>
        <br />
        <button type="submit" onClick={addCommentClick}>
          Send
        </button>
      </form>
      <div>
        {props.categoryComments.map(({ id, text, time }) => {
          return (
            <div key={id}>
              <br />
              <p>
                {" "}
                {text} <br />
                <span>{time}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
