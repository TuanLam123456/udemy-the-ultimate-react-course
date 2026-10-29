import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <buuton className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </buuton>
  );
}

export default Button;
