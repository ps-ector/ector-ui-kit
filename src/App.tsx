import { Input, Button } from "../dist";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Input label="Your email" />
        <Input label="Your password" />
        <Input label="A very long sequence" />
      </div>
    </div>
  );
}

export default App;
