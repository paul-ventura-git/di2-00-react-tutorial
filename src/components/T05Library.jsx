export default function Library(props) {

  return (
    <>
      <h3>¿Qué géneros de libros hay en mi biblioteca?</h3>
      <ul>
        {props.genres.map((item) => <TiposDeLibros key={item.id} description={item.description} />)}
      </ul>
    </>
  )
}

function TiposDeLibros(props) {
  return <li>Tengo libros de {props.description}.</li>
}
