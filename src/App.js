import Baseball from "./components/T02Baseball";
import Car from "./components/T01Car";
import Counter from "./components/T10Counter";
import Football from "./components/T02Football";
import Garage from "./components/T01Garage";
import Garden from "./components/T03Garden";
import Goal from "./components/T03Goal";
import Kitchen from "./components/T04Kitchen";
import Library from "./components/T05Library";
import MyForm from "./components/T06MyForm";
import MyFormManyFields from "./components/T07MyFormManyFields";
import MyFormSelect from "./components/T08MyFormSelect";
import MyFormTextArea from "./components/T08MyFormTextArea";
import ShowData from "./components/T11ShowData";
import ShowDataCharacters from "./components/T11ShowDataCharacters";
import ShowDataInTable from "./components/T12ShowDataInTable";
import ShowDataInCards from "./components/T12ShowDataInCards";
import Timer from "./components/T09Timer";

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons'];
  const v_genres = [
    {id:1, description: "Science fiction"}, // {"id":1, "nombre":"Humberto"}
    {id:2, description: "Comedy"},
    {id:3, description: "History"},
    {id:4, description: "Thrillers"}
  ];

  return (
    <div className="container">
      <h1>Tutorial de React</h1>

      <h2 style={{backgroundColor:'lightBlue'}}>1. Props</h2>
      <Car colorCarro="purple" marcaCarro="Toyota" />
      <Garage tamanioGarage="big" />

      <h2 style={{backgroundColor:'lightBlue'}}>2. Props with events (functions)</h2>
      <Football />
      <Baseball />

      <h2 style={{backgroundColor:'lightBlue'}}>3. Props with booleans</h2>
      <Goal esGol={NaN}/>
      <Garden arboles={null}/>

      <h2 style={{backgroundColor:'lightBlue'}}>4. Props with arrays</h2> 
      <Kitchen utensilios={my_cookware} />

      <h2 style={{backgroundColor:'lightBlue'}}>5. Props with "Javascript objects"</h2>
      <Library genres={v_genres} />

      <h2 style={{backgroundColor:'lightBlue'}}>6. useState</h2>
      <MyForm />

      <h2 style={{backgroundColor:'lightBlue'}}>7. useState with "Javascript objects"</h2>
      <MyFormManyFields />

      <h2 style={{backgroundColor:'lightBlue'}}>8. useState with other form elements</h2>
      <MyFormSelect />
      <MyFormTextArea />

      <h2 style={{backgroundColor:'plum'}}>9. useEffect: on initial render</h2>
      <Timer></Timer>

      <h2 style={{backgroundColor:'plum'}}>10. useEffect: dependent on a variable</h2>
      <Counter></Counter>

      <h2 style={{backgroundColor:'plum'}}>11. useEffect: api calling</h2>
      {/*<ShowData></ShowData>*/}
      <ShowDataCharacters></ShowDataCharacters>

      <h2 style={{backgroundColor:'plum'}}>12. Rendering API data</h2>
      <ShowDataInCards></ShowDataInCards>
      {/*<ShowDataInTable></ShowDataInTable>*/}
    </div>
  );
}

export default App;
