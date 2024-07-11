import styles from "./AlertForm.module.scss";

import Close from "../../assets/Vector.png";
import { useDispatch, useSelector } from "react-redux";
import { setClickedAlert } from "../../redux/slices/formSlice";
import { useForm } from "react-hook-form";
import { sendFormToTelegram } from "../../utils/sendTelegram";

import Snow from "../../assets/snowflake.png";

const AlertForm = () => {
  const formSlice = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.name.trim() === "" || data.phone.trim() === "") {
      alert("Заповніть, будь-ласка, необхідні поля!");
      return;
    }
    let string = `Проект: Climate Cold & Hot \nІм'я: ${data.name} \nНомер телефону: ${data.phone} \nПовідомлення: ${data.message} \n`;

    sendFormToTelegram(string);
    reset();
    dispatch(setClickedAlert(false));
  };

  const handleClose = () => {
    dispatch(setClickedAlert(false));
  };

  return (
    <section
      className={`${styles.root} ${
        formSlice.isClickedAlert ? styles.show_form : ""
      }`}
    >
      <article className={styles.wrapper}>
        <img
          className={styles.close_span}
          alt="Close"
          src={Close}
          onClick={handleClose}
        />
        <img alt="Snow" className={styles.snow_1} src={Snow} />
        <img alt="Snow" className={styles.snow_2} src={Snow} />
        <img alt="Snow" className={styles.snow_3} src={Snow} />
        <img alt="Snow" className={styles.snow_4} src={Snow} />
        <img alt="Snow" className={styles.snow_5} src={Snow} />
        <img alt="Snow" className={styles.snow_6} src={Snow} />
        <div className={styles.form_block}>
          <h5>Форма для зв'язку</h5>
          <p>
            Цікавить наша пропозиція? Заповніть нашу зручну форму зв'язку, і ми
            зв'яжемося з вами найближчим часом.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Ім'я" {...register("name")} />
            <input
              type="text"
              placeholder="Номер телефону"
              {...register("phone")}
            />
            <textarea placeholder="Повідомлення" {...register("message")} />
            <button type="submit">Відправити</button>
          </form>
        </div>
        <div className={styles.etaps_block}>
          <div className={styles.etap}>
            <div>
              <h5>Відповідь на форму</h5>
              <p>Приблизний час: 1 год</p>
            </div>
          </div>
          <div className={styles.etap}>
            <div>
              <h5>Персоналізована консультація</h5>
              <p>Приблизний час: 15 хв</p>
            </div>
          </div>
          <div className={styles.etap}>
            <div>
              {" "}
              <h5>Професійне виконання робіт</h5>
              <p>Приблизний час: 2 год</p>
            </div>
          </div>
          <div className={styles.etap}>
            <h5>Експлуатація</h5>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AlertForm;
