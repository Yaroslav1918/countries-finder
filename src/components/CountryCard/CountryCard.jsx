import { AiOutlineArrowRight } from "react-icons/ai";
import noPicture from "../../img/noImage.jpg";
import s from "./countryCard.module.css";
import { useNavigate } from "react-router-dom";


export default function CountryCard({
  country,
}) {
  const { population, region, capital, name, flags, languages } = country;
  const navigate = useNavigate();
 
  return (
    <div className={s.cardWrap}>
      <img
        src={flags.png}
        onError={({ target }) => (target.src = noPicture)}
        className={s.cardImage}
        alt={`${name} flag`}
      />

      <h3 className={s.cardTitle}>{name.common}</h3>

      <ul className={s.cardList}>
        <li>
          <p>Population: {population}</p>
        </li>
        <li>
          <p>Region: {region}</p>
        </li>
        <li>
          <p>Capital: {capital}</p>
        </li>
        <li>Languages: {languages && Object.values(languages).join(", ")}</li>
      </ul>
      <button
        onClick={() => navigate(`/country/${country.name.common}`)}
        className={s.cardButton}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}
