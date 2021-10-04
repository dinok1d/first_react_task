import CookiesData from "./Cookies";
import Productlist from "./Productlist";

export default function Cookielistcomp() {
  let cookielist = CookiesData.map((cookie) => (
    <Productlist singlecookie={cookie} />
  ));
  return <div className="cookie-list">{cookielist}</div>;
}
