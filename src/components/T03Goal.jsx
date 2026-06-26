export default function Goal(props) {
  const v_esGol = props.esGol;
  if (v_esGol) {
      return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

function MadeGoal() {
  return <h3>The value of props is TRUTHSY VALUE!</h3>;
}

function MissedGoal() {
  return <h3>The value of props is FALSY VALUE!</h3>;
}

