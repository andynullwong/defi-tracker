import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/wallet/${process.env.ETH_ADDRESS}`)
      .then((res) => res.json())
      .then((data) => setData(JSON.stringify(data)));
  });

  return (
    <div className="App">
      <p>DeFi Yield Farming</p>
      <p>{data}</p>
    </div>
  );
};

export default App;
