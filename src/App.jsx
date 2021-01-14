import React, { useEffect } from "react";
const Lib = () => import(/* webpackChunkName: "lib" */ "./lib");

export function App() {
  useEffect(() => {
    setTimeout(() => {
      Lib().then((d) => {
        d.run();
      });
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
