import React, { useEffect, useState } from 'react';
import { getList } from '../services/characters';

export default function ShowDataCharacters() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
      <h1>My Comment Table</h1>
      <table className="table">
      <thead></thead>
      <tbody>
        {          
          list.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.species}</td>
              </tr>
            )
          }
          )
        }
      </tbody>
      </table>
   </div>
  )
}