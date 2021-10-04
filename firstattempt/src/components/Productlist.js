function Productlist({ singlecookie }) {
  return (
    <div>
      <img className="cookiesize" src={singlecookie.image} />
      <h4 className="font-size">{singlecookie.name}</h4>
      <p className="font-size">{singlecookie.price} KD</p>
    </div>
  );
}

export default Productlist;
