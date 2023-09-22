import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
