import React from "react";
import PropTypes from "prop-types";

const foodLike = [
  {id:1,
  name: "kimchi",
  Image: "http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=360:360&_v=20210111143615",
  rating: 5},
  {id:2,
  name: "김밥" ,
  Image: "https://post-phinf.pstatic.net/MjAxODA2MjlfMTU1/MDAxNTMwMTk4Mjg3OTk5.z8YKyrEmj3ovY2GmeMm3LRlsMHPKdHEFuTBQCkRLu8Mg.YCdusQJvIqEwHQ5QupuLni0GR3RkoMhdnmIIPWC7WqYg.JPEG/DSC02642.JPG?type=w1200",
  rating : 4.9},
  {id:3,
  name: "키위",
  Image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201908/12/727bd9c8-33da-49a3-9429-650b9b4678b7.jpg",
  rating : 3},
  {id:4,
  name: "오므라이스",
  Image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/11/30/bf022c8d096becdea798c487fa4d79251.jpg",
  rating: 2.1},
  {id:5,
  name: "뭐..아무거나",
  Image: "https://lh3.googleusercontent.com/proxy/7DwByI197Pqb6jWTKtFjwLH02a6ObFTMOPA8VTq9KnH66JIk32Ws_-YiyETQ1ugFYedvGlkstL4ySrPCQnIw67CEnHP-FlGF4iwjsyOfcBB9KGiPAvlXEjx4f2XwPiLYseICXexv4cRcfxzjFG3vSdlgk9fj5LJ73XouzsS4qpK1uzlV99oF9bNlUGeWwlN0mEaC_DkzIcRUfirjCwH_VHGvqy0X2bDWOu57cqUfw9TbTQyCRu-5HaOHgqJTKZllskZepPpoV9Gw-JNsv1wTJlCeZS2tmQDAVi1385KXy2rQ2-ack-KFwI9irvTxu7hL5cZXqA",
  rating: 1}
]

function Food({name, picture, rating}){
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodLike.map(dish =>(
        <Food key={dish.id} rating={dish.rating} name={dish.name} picture={dish.Image} />
      ))}
    </div>
  );
}

export default App;
