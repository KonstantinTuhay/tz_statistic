export const Bar = ({
  label,
  data,
  norm,
}: {
  norm?: number | string;
  label: string;
  data?: {
    front?: number | string;
    back?: number | string;
    db?: number | string;
  };
}) => {
  const frontStyle = {
    border: "none",
    borderRadius: "14px 14px 0px 0px",
    height: data?.front ? `${data?.front}px` : `0px`,
    backgroundColor: "#4AB6E8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  };

  const backStyle = {
    border: "none",
    height: data?.back ? `${data?.back}px` : `0px`,
    backgroundColor: "#AA6FAC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  };

  const dbStyle = {
    border: "none",
    borderRadius: "0px 0px 14px 14px",
    height: data?.db ? `${data?.db}px` : `0px`,
    backgroundColor: "#E85498",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  };

  const normStyle = {
    border: "none",
    borderRadius: "14px 14px 14px 14px",
    height: norm ? `${norm}px` : `0px`,
    backgroundColor: "#4AB6E8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#898290",
    fontSize: "14px",
    background:
      "repeating-linear-gradient(-45deg, #78c0e0, #78c0e0 10px, #ffffff 10px, #ffffff 20px)",
  };

  return (
    <div>
      {norm ? (
        <div className="bar">
          <div style={normStyle}>
            <div className="box">{norm}</div>
          </div>
        </div>
      ) : (
        <div className="bar">
          <div style={frontStyle}>{data?.front}</div>
          <div style={backStyle}>{data?.back}</div>
          <div style={dbStyle}>{data?.db}</div>
        </div>
      )}

      <p className="label">{label}</p>
    </div>
  );
};
