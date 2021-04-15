import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const upDateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(upDateTime, 1000);
  return (
    <div className="clock">
      <h1 className="time">{ctime}</h1>
      {/* <button onClick={upDateTime}> Click Me</button> */}
    </div>
  );
}

export default App;
