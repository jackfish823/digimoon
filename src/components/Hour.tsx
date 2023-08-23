import React, { useEffect, useState } from "react";


export default function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const hours = date.getHours();
  const minute = date.getMinutes();

  return (
    <div className="Clock" style={{marginRight:"17%"}}>
      <div className="Digits">
        {("0" + date.getHours()).slice(-2)}
        <span>:</span>
        {("0" + date.getMinutes()).slice(-2)}
    </div>
    </div>
  );
}
