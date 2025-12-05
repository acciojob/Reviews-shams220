import React, { useState } from "react";
import "./review.css";

 const arr = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const Review = () => {
  
  const [k, setKey] = useState(0);
 

  const randomReview = () => {
    let n = arr.length;
    let rndm = Math.floor(Math.random() * n);

    if (rndm === k) {
      rndm = (k + 1) % n;
    }

    setKey(rndm);
    // console.log("random",rndm)
  };
  const item = arr[k];
  const previous = () => {
    if (k === 0) {
      setKey(arr.length - 1);
    } else {
      setKey(k - 1);
    }
  };
  const next = () => {
    if (k === arr.length - 1) {
      setKey(0);
    } else {
      setKey(k + 1);
    }
  };

  return (
    <div className="main-div">
      <div className="review">
        <img src={item.image} alt={item.name} className="person-img" />

        <h2 className="author" id={`author-${item.id}`}>
          {item.name}
        </h2>

        <h4 className="job">{item.job}</h4>
        <p className="info">{item.text}</p>
         <div>
        <button className="random-btn" onClick={randomReview}>
          surprise me
        </button>
        <button onClick={previous} className="prev-btn">
          prev
        </button>
        <button onClick={next} className="next-btn">
          next
        </button>
      </div>
      </div>

     
    </div>
  );
};
export default Review;

