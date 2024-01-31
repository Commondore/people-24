import cn from "clsx";

import styles from "./ToggleButton.module.css";

const ToggleButton = ({ isShow, children, toggle }) => {
  // const buttonClasses = ["btn"];

  // if (!isShow) {
  //   buttonClasses.push("btn-danger");
  // }

  const buttonStyles = {
    marginBottom: "3rem",
    color: "#000",
  };

  return (
    <button
      style={buttonStyles}
      // className={cn("btn", !isShow && "btn-danger")}
      // className={cn(styles.btn, !isShow && styles.danger)}
      className={cn(styles.btn, {
        [styles.danger]: !isShow,
      })}
      onClick={toggle}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
