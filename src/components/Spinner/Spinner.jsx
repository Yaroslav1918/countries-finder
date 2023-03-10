import { Circles } from "react-loader-spinner";
import s from './spinner.module.css'

const Spinner = ()=> {
  return (
    <div className={s.divCentred}>
      <Circles
        height="80"
        width="80"
        color="#282c34"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}

export default Spinner;

