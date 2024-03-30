import { useDispatch } from "react-redux";
import styles from "./Form.module.scss";
import { setClickedAlert } from "../../redux/slices/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.root} id="form">
      <article className={styles.wrapper}>
        <h3>Форма для зв'язку:</h3>
        <p>
          Цікавить наша пропозиція? Натисніть кнопку нижче та заповніть нашу
          форму зв'язку, і ми зв'яжемося з вами найближчим часом.
        </p>
        <button onClick={() => dispatch(setClickedAlert(true))}>
          Заповни форму
        </button>
      </article>
    </section>
  );
};

export default Form;
