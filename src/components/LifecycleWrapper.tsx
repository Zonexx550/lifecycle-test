import { useState } from "react";
import { LifecycleDemo } from "./LifecycleDemo";
import styles from "./LifecycleWrapper.module.css";

export const LifecycleWrapper = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.wrapper}>
      <h1>Жизненные циклы компонента</h1>
      <button
        onClick={() => setVisible((prev) => !prev)}
        className={styles.toggleButton}
      >
        {visible ? "Скрыть компонент" : "Показать компонент"}
      </button>

      {visible && <LifecycleDemo />}
    </div>
  );
};
