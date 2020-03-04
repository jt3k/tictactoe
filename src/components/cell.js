export default ({ onClick, celIndex, children }) => (
  <div
    style={{
      fontSize: "1em",
      width: "1em",
      height: "1em",
      outline: "1px solid black",
      lineHeight: "1em",
      textAlign: "center"
    }}
    onClick={onClick}
    data-cel-index={celIndex}
  >
    {children}
  </div>
);
