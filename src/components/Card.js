import "../App.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.Image}></img>
      </div>
      <h3>{props.ProductName}</h3>
      <p>{props.Description}</p>
      <small>{props.Price}</small>
    </div>
  );
}

export default Card;
