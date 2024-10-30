import Baseball from "./components/Baseball";
import Car from "./components/Car";
import Football from "./components/Football";
import Garage from "./components/Garage";
import Garden from "./components/Garden";
import Goal from "./components/Goal";
import Kitchen from "./components/Kitchen";
import Library from "./components/Library";
import MyForm from "./components/MyForm";
import MyFormManyFields from "./components/MyFormManyFields";
import MyFormSelect from "./components/MyFormSelect";
import MyFormTextArea from "./components/MyFormTextArea";

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons', 'Fork'];
  const v_genres = [
    {id:1, description: "Science fiction"}, 
    {id:2, description: "Comedy"},
    {id:3, description: "History"},
    {id:4, description: "Thrillers"}
  ];

  return (
    <div className="container">
      <h1>Tutorial de React</h1>

      <h2 style={{backgroundColor:'lightBlue'}}>1. Props</h2>
      <Car colorCarro="green" marcaCarro="Lamborghini" />
      <Garage tamanioGarage="big" />

      <h2 style={{backgroundColor:'lightBlue'}}>2. Props with events</h2>
      <Football />
      <Baseball />

      <h2 style={{backgroundColor:'lightBlue'}}>3. Props with booleans</h2>
      <Goal esGol={undefined}/>
      <Garden arboles="asdasdasd"/>

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
    </div>
  );
}

export default App;
