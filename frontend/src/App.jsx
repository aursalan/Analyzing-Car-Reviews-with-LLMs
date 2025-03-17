import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [apiUrl, setApiUrl] = useState(""); // Store the ngrok URL

  useEffect(() => {
    setApiUrl("https://216e-34-86-234-114.ngrok-free.app"); // Replace with your ngrok URL
  }, []);

  const handleSubmit = async (endpoint, data) => {
    try {
      const res = await axios.post(`${apiUrl}/${endpoint}`, data);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setResponse({ error: "Something went wrong" });
    }
  };

  return (
    <div style={{padding: "20px", textAlign: "center" }}>
      <h2>Analyzing Car Reviews using LLMs</h2>

      {/* First textarea for general text-based processing */}
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter review..."
      />
      <br />
      <button onClick={() => handleSubmit("sentiment", { text })}>
        Analyze Sentiment
      </button>
      <button onClick={() => handleSubmit("translate", { text })}>
        Translate
      </button>
      <button onClick={() => handleSubmit("summarize", { text })}>
        Summarize
      </button>

      <hr />

      {/* Second textarea for Question-Answering */}
      <h3>Ask a Question</h3>
      <textarea
        rows="2"
        cols="50"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
      />
      <br />
      <button onClick={() => handleSubmit("qa", { text, question })}>
        Get Answer
      </button>

      {/* Display response */}
      {response && (
        <div style={{ width: "98.5%", marginTop: "20px", border: "1px solid #ddd", padding: "10px", overflowX: "auto" }}>
          <h3>Response:</h3>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

    </div>
  );
};

export default App;
