import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    {/* default star rating: you can directly assign a value to a destructured variable that is why the value below works */}
    <StarRating />
  </React.StrictMode>
);
