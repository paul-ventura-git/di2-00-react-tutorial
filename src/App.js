import {
  Baseball,
  Car,
  Football,
  Garage,
  Garden,
  Goal,
  Kitchen,
  Library,
  MyForm,
  MyFormManyFields,
  MyFormSelect,
  MyFormTextArea,
  Timer,
  Counter,
  ShowData,
  ShowDataCharacters,
  ShowDataInTable,
  ShowDataInCards,
  T13useContext,
  T14useRef1,
  T14useRef2,
  T14useRef3,
  T15useReducer1,
  T15useReducer2,
  T16useCallbackIndex,
  T17useMemo,
  T18customHooksIndex,
} from "./components";

import { v_genres } from "./data";

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons', 'Fry pan', 'Colander', 'Grater', 'Peeler', 'Whisk', 'Tongs', 'Ladle'];

  return (
    <div className="container">
      <h1>Tutorial de React 2025</h1>

      <h2 style={{backgroundColor:'lightBlue'}}>1. Props</h2>
      <Car colorCarro="mostaza" marcaCarro="BYD"/> {/* colorCarro="verde" marcaCarro="Lamborghini" /> */}
      <Garage tamanioGarage="grande" />

      <h2 style={{backgroundColor:'lightBlue'}}>2. Props with events (functions) [Event handlers]</h2>
      <Baseball />
      <Football />

      <h2 style={{backgroundColor:'lightBlue'}}>3. Props with booleans</h2>
      <Goal esGol={0}/> {/* falsy values: NaN, undefined, null, 0, false, "" */}
      <Garden arboles={"123"}/>

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

      <h2 style={{backgroundColor:'plum'}}>13. useContext </h2>
      <T13useContext></T13useContext>

      <h2 style={{backgroundColor:'plum'}}>14. useRef </h2>
      <T14useRef1></T14useRef1>
      <T14useRef2></T14useRef2><br></br>
      <T14useRef3></T14useRef3>

      <h2 style={{backgroundColor:'plum'}}>15. useReducer </h2>
      <T15useReducer1></T15useReducer1>
      <T15useReducer2></T15useReducer2>

      <h2 style={{backgroundColor:'plum'}}>16. useCallback </h2>
      <T16useCallbackIndex></T16useCallbackIndex>

      <h2 style={{backgroundColor:'plum'}}>17. useMemo </h2>
      <T17useMemo></T17useMemo>

      <h2 style={{backgroundColor:'plum'}}>18. Custom Hooks </h2>
      <T18customHooksIndex></T18customHooksIndex>
    </div>
  );
}

export default App;