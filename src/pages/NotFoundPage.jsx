import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import s from "../components/CountryCard/countryCard.module.css";
import style from "../components/Spinner/spinner.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    startTransition(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className={style.divCentred}>
        <button className={s.cardButton} onClick={handleClick}>
          {" "}
          <AiOutlineArrowLeft /> Back
        </button>
              <h2 style={{ marginTop: '10px'}}>Sorry page not found</h2>
      </div>
    </>
  );
};

export default NotFoundPage;
