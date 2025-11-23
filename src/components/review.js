import React,{useState} from 'react';
import './review.css'
const Review=()=>{
    const [k ,setKey] = useState(1);
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

  const randomReview=()=>{
    let n = arr.length;
    const rndm = Math.floor(Math.random()*n);
    setKey(rndm)
    // console.log("random",rndm)
  }
const item = arr[k];
const previous=()=>{
if(k>0){
    setKey(k-1);

}
}
const next = ()=>{
    if(k<arr.length){
    setKey(k+1)

    }
}
  
return (
     <div className='main-div'
      style={{

        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>shams</h1>
      <div id="review-heading">
        {/* {arr.map((value,key) => (
          <div className="review" key={k}>
            <h2 className="author">Author:{value.name}</h2>
            <h3 className="job">Job:{value.job}</h3>
            <p className="info">Info:{value.text}</p>
            <img src={value.image} className="person-img" alt=""/>
          </div>
        ))} */}

        <div className="review">
            <h2 className="author">Author:{item.name}</h2>
            <h3 className="job">Job:{item.job}</h3>
            <p className="info">Info:{item.text}</p>
            <img src={item.image} alt="" className="person-img" />
        </div>
      </div>
      <div>
        <button className='random-btn' onClick={randomReview}>surprise me</button>
        <button onClick={previous}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
)
    
}
export default Review