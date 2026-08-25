import React, { useState, useRef, useEffect } from "react";

/**
 * AIHelp.jsx — GitHub Pages friendly version
 *
 * No backend, no API key needed. Uses Puter.js (https://puter.com),
 * a free client-side library that lets the browser call AI models
 * directly — Puter handles auth on their end, so there's nothing
 * secret to hide. Works on any static host, including GitHub Pages.
 *
 * SETUP (one-time):
 * Add this line inside the <head> of your index.html
 * (the one in your project root, not src/):
 *
 *   <script src="https://js.puter.com/v2/"></script>
 *
 * That's it — no signup, no key, no backend, no Vercel needed.
 */

export default function AIHelp() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! Ask me any GTU subject question — theory, numericals, or exam-style questions.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(e) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      if (!window.puter) {
        throw new Error(
          "Puter.js not loaded. Make sure the <script> tag is in index.html."
        );
      }

      const prompt = `You are a helpful study assistant for GTU (Gujarat Technological University) diploma engineering students. Answer clearly, step by step where relevant, in exam-friendly language.\n\nQuestion: ${question}`;

      const response = await window.puter.ai.chat(prompt);

      // response can be a string or an object depending on Puter version
      const answerText =
        typeof response === "string"
          ? response
          : response?.message?.content || response?.text || String(response);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: answerText },
      ]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>GTU AI Study Helper</h1>
        <p style={styles.subtitle}>
          Ask any subject question — get clear, exam-ready answers.
        </p>
      </div>

      <div style={styles.chatBox}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.bubbleRow,
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                ...styles.bubble,
                ...(m.role === "user" ? styles.userBubble : styles.aiBubble),
              }}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={styles.bubbleRow}>
            <div style={{ ...styles.bubble, ...styles.aiBubble }}>
              Thinking…
            </div>
          </div>
        )}

        {error && <p style={styles.error}>{error}</p>}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
          style={styles.input}
          disabled={loading}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "..." : "Ask"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "24px 16px",
    fontFamily: "system-ui, sans-serif",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    boxSizing: "border-box",
  },
  header: { marginBottom: 16 },
  title: { margin: 0, fontSize: 24, fontWeight: 700 },
  subtitle: { margin: "4px 0 0", color: "#666", fontSize: 14 },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    border: "1px solid #e2e2e2",
    borderRadius: 12,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#fafafa",
  },
  bubbleRow: { display: "flex" },
  bubble: {
    maxWidth: "80%",
    padding: "10px 14px",
    borderRadius: 14,
    fontSize: 15,
    lineHeight: 1.4,
    whiteSpace: "pre-wrap",
  },
  userBubble: {
    background: "#2563eb",
    color: "#fff",
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    background: "#fff",
    color: "#222",
    border: "1px solid #e2e2e2",
    borderBottomLeftRadius: 4,
  },
  error: { color: "#c0392b", fontSize: 13, margin: "4px 0" },
  form: { display: "flex", gap: 8, marginTop: 12 },
  input: {
    flex: 1,
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #ccc",
    fontSize: 15,
  },
  button: {
    padding: "10px 18px",
    borderRadius: 10,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
};