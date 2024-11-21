import { Bar } from "./components/Bar/Bar";
import "./App.css";
import { useGetData1Query } from "./redux/api";
import { ColorInfo } from "./components/ColorInfo/ColorInfo";
import arrowDown from "../public/arrowDown.png";
import arrowUp from "../public/arrowUp.png";

function App() {
  const { data, error, isLoading } = useGetData1Query();
  console.log(data);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const diffFrontDevTest = data.test.front - data.dev.front;
  const diffBackDevTest = data.test.back - data.dev.back;
  const diffDbDevTest = data.test.db - data.dev.db;
  const commonDevTest = diffFrontDevTest + diffBackDevTest + diffDbDevTest;

  const diffFrontTestProd = data.prod.front - data.test.front;
  const diffBackTestProd = data.prod.back - data.test.back;
  const diffDbTestProd = data.test.db - data.dev.db;
  const commonTestProd = diffFrontTestProd + diffBackTestProd + diffDbTestProd;

  return (
    <>
      <div className="layout">
        <p className="title">Количество пройденных тестов {data.title}</p>
        <div className="arrow">
          <div className="firstArrow">
            <div className="secondeArrowLeft"></div>
            <div className={commonDevTest > 0 ? "circle green" : "circle red"}>
              {commonDevTest > 0 ? (
                <div>
                  <img src={arrowUp} alt="Стрелка вниз" width="10" height="8" />
                  +{commonDevTest}
                </div>
              ) : (
                <div>
                  <img
                    src={arrowDown}
                    alt="Стрелка вниз"
                    width="10"
                    height="8"
                  />{" "}
                  {commonDevTest}
                </div>
              )}
            </div>
          </div>

          <div className="secondArrow">
            <div className="secondeArrowLeft"></div>
            <div className={commonTestProd > 0 ? "circle green" : "circle red"}>
              {commonTestProd > 0 ? (
                <div>
                  <img src={arrowUp} alt="Стрелка вниз" width="10" height="8" />
                  +{commonTestProd}
                </div>
              ) : (
                <div>
                  <img
                    src={arrowDown}
                    alt="Стрелка вниз"
                    width="10"
                    height="8"
                  />{" "}
                  {commonTestProd}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bars">
          <Bar label="dev" data={data.dev} />
          <Bar label="test" data={data.test} />
          <Bar label="prod" data={data.prod} />
          <Bar label="норматив" norm={data.norm} />
        </div>
        <div className="info">
          <ColorInfo color="#4ab6e8" text="Клиентская часть" />
          <ColorInfo color="#AA6FAC" text="Серверная часть" />
          <ColorInfo color="#E85498" text="База данных" />
        </div>
      </div>
    </>
  );
}

export default App;
