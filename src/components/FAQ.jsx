import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
// import "../pages/home/Home.css";
const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswershowing] = useState(false);

  return (
    <article
      className="faq"
      style={{
        background: "#38419D",
        padding: "2rem",
        borderRadius: "1rem",
        cursor: "pointer",
      }}
      onClick={() => setIsAnswershowing((prev) => !prev)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>{question}</h4>
        <button
          className="faq__icon"
          style={{
            background: "transparent",
            fontSize: "1.3rem",
            color: "white",
          }}
        >
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p style={{ marginTop: "1.3rem" }}>{answer}</p>}
    </article>
  );
};

export default FAQ;
