import React from "react";
import "../Styles/Feature.css";
const Feature = () => {
  const service = [
    {
      heading: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      heading: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      heading: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      heading: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <div className="Feature flex" id="3">
      <div className="flex fdir">
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="container flex fdir">
        {service.map((value, index) => {
          return (
            <div className="card flex " key={index}>
              <h1>{value.heading}</h1>
              <p>{value.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
