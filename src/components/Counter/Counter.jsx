const Counter = ({ items, children }) => {
  const counterStyle = {
    fontSize: "3rem",
    color: "green",
  };

  if (items.length < 3) {
    counterStyle.color = "orange";
  }

  if (items.length < 2) {
    counterStyle.color = "red";
  }

  if (items.length === 0) {
    counterStyle.color = "gray";
  }

  return (
    <p style={counterStyle}>
      {children}
      {items.length ? items.length : "пусто"}
    </p>
  );
};

export default Counter;
