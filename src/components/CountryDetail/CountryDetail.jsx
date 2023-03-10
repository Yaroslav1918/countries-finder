import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import s from '../CountryCard/countryCard.module.css'
import style from './countryDetail.module.css'
import services from "../../api/serviesApi";
import Spinner from "../Spinner";


const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [wikiData, setWikiData] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countryData, wikiData] = await Promise.all([
          services.getCountryByName(name),
          services.fetchWikiData(name),
        ]);
        setCountry(countryData[0]);
        setWikiData(wikiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [name]);

  if (!wikiData || !country) {
    return <Spinner/>;
  }

  const { name: countryName, capital, flags,} = country;

  return (
    <div className={style.card}>
      <h1 className={style.cardTitle}>{countryName.common}</h1>
      <p>{capital}</p>
      <img src={flags.png} alt={`${countryName.common} flag`} className={style.countrylImg} />

      <div dangerouslySetInnerHTML={{ __html: wikiData }} />

      <button className={s.cardButton} onClick={handleClick}>
        {" "}
        <AiOutlineArrowLeft />
      </button>
    </div>
  );
};

export default CountryDetail;
