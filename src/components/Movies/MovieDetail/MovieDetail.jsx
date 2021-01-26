import { useState } from 'react'
import CharacterDetail from '../Characters/CharacterDetail';
import CharacterForm from '../Characters/CharacterForm';
import './styles.css'

const newCharacterInitialState = {
    name: '',
    img: '',
    biography: ''
}

export default function MovieDetail({
    movie,
    index,
    handleSelectMovie,
    handleDeleteMovie,
    handleAddCharacter,
    handleUpdateCharacter,
    handleDeleteCharacter
}) {
    const [newCharacter, setNewCharacter] = useState(newCharacterInitialState)
    const [characterIndex, setCharacterIndex] = useState(null)

    const handleChangeNewCharacter = event => {
        setNewCharacter({
            ...newCharacter,
            [event.target.name]: event.target.value
        })
    }

    const handleAddNewCharacter = () => {
        handleAddCharacter(newCharacter, index)
		}

    const handleSelectCharacter = (characterIndex, character) => {
        setNewCharacter(character)
        setCharacterIndex(characterIndex)
    }

    const handleUpdateNewCharacter = () => {
        handleUpdateCharacter(newCharacter, characterIndex, index)
        setNewCharacter(newCharacterInitialState)
        setCharacterIndex(null)
    }


    return (
        <div className='movie-detail-container'>
            <div className='details-container'>
                <div className='title-container'>
                    <h1>{movie.title}</h1>
                    <img className='movie-picture' src={movie.img} alt={movie.title}/>
                </div>
                <div>
                    <h2>Sinopsis</h2>
                    <p>{movie.description}</p>
                </div>
            </div>

            <h2>Lista de personajes</h2>
            <div className='characters-container'>
                {movie.characters.length > 0
                    ? movie.characters.map((character, characterIndex) =>
										<CharacterDetail
											character={character}
											key={characterIndex}
                                            handleSelectCharacter={() => handleSelectCharacter(characterIndex, character)}
                                            handleDeleteCharacter={() => handleDeleteCharacter(characterIndex, index)}
										/>

                ): <p> No ay nada aki karnal ira  </p>   }
            </div>
            <CharacterForm
                    form={newCharacter}
                    index={characterIndex}
                    handleChangeNewCharacter={handleChangeNewCharacter}
                    handleAddNewCharacter={handleAddNewCharacter}
                    handleUpdateCharacter={handleUpdateNewCharacter}
                />
            <br />
            <br />
            <br />
            <button onClick={() => handleSelectMovie(index)}>Editar película</button>
            <button onClick={() => handleDeleteMovie(index)}>Eliminar película</button>
        </div>
    )
}