import React from 'react'
import PetApi from './PetApi'

const PetApis = (props) => {
    const listOfPets = props.todos.map((petData, index)=> {
      return (
          <PetApi key={petData._id} pet={petData} />
      )
    })

    return (
        <ul>
            {listOfTodos}
        </ul>
    );
}

export default Todos;