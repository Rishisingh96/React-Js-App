import rishiStyle from "./Netflix.module.css"; 
import styled from 'styled-components';

export const MoveCard = (props) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = props.data;

  const ButtonRishi = styled.button`    
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${props => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const Rating = styled.h3`
      font-size: 1.6rem;
      color: #7dcea0;
      text-transform: capitalize;
  `;

  const rating_class = rating >= 8.5 ? rishiStyle.super_hit : rishiStyle.average;

  return (
    <li className={rishiStyle.card}> 
      <div>
        <img
          src={img_url}
          alt={name}
          width="20%"
          height="40%"
        />
      </div>
      {/* <div className={rishiStyle['card-content']}> */}
      <div className="flex flex-col gap-6 py-6 px-6">
        <h2>Name : {name} </h2>
        <Rating>
          Rating :
          <span className={`${rishiStyle.rating} ${rating_class}`}>
            {rating}
          </span>
        </Rating>
        <p className="text-3xl font-bold underline text-cyan-400" >Summary: {description}</p>
        <p >Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <a href={watch_url} target="_blank">
          <ButtonRishi rating={rating}>Watch Now</ButtonRishi>
        </a>
      </div>
    </li>
  );
};
