import React from "react";
import blog1 from "../assets/blog01.png";
import blog2 from "../assets/blog02.png";
import blog3 from "../assets/blog03.png";
import blog4 from "../assets/blog04.png";
import blog5 from "../assets/blog05.png";

const Upcomings = () => {
  const card = [
    {
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime voluptatem ea voluptas repellat adipisci harum!",
      imgSrc: blog1,
    },
    {
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      imgSrc: blog2,
    },
    {
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      imgSrc: blog3,
    },
    {
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      imgSrc: blog4,
    },
    {
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      imgSrc: blog5,
    },
  ];

  return (
    <div className="Upcomings" id="5">
      <h1>
        A lot is happening, <br />
        We are blogging about it.
      </h1>
      <div className="content">
        {card.map((val, index) => {
          return (
            <div className="card" key={index}>
              <img src={val.imgSrc} alt="" />
              <div className="read">
                <p>{val.date}</p>
                <h3>{val.heading}</h3>
                {val.p !== undefined ? <p>{val.p + " " + val.p}</p> : null}
                <p>Read Full Article</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcomings;
