import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "../dist/ector-ui-kit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Button label={"Hello"} primary={true} />
    </div>
  </React.StrictMode>
);
