import './styles.css'

export default function CharacterDetail ({ character, handleSelectCharacter, handleDeleteCharacter }) {
    return (
			<div className='character-detail-container'>
					<h3> { character.name } </h3>
					<img src={ character.img } alt={ character.name }/>
					<p> { character.biography } </p>
					<button onClick={handleSelectCharacter}>
						Editar personaje
					</button>
					<button onClick={handleDeleteCharacter}>
						Eliminar personaje
					</button>
			</div>
    )
}