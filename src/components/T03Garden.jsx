export default function Garden(props) {
  const v_arboles = props.arboles;

  return (
    <div> 
      <h3>Garden</h3>
      { v_arboles ? <BigGarden /> : <SmallGarden />}
    </div>
  )
}

function BigGarden() {
  return <p>This garden contains trees! El valor del props es TRUEEEEEEEE</p>;
}

function SmallGarden() {
  return <p>This garden doesn't contain trees! El valor del props es FALSEEEEEE</p>;
}
