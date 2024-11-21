export const ColorInfo = ({ color, text }: { color: string; text: string }) => {
  const style = {
    width: "16px",
    height: "16px",
    backgroundColor: `${color}`,
    border: "none",
    borderRadius: "3px",
  };

  return (
    <div className="eachInfo">
      <p style={style}></p>
      <p className="text">{text}</p>
    </div>
  );
};
