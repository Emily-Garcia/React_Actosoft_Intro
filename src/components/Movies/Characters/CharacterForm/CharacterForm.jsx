export default function CharacterForm(props) {

    const isUpdating = () => props.index >= 0

    return (
        <>
            <h2>{isUpdating() ? 'Edita' : 'Agrega'} un nuevo personaje</h2>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                onChange={props.handleChangeNewCharacter}
                value={props.form.name}
            />
            <input
                type="text"
                name="img"
                id="photo"
                placeholder="URL de la imagen"
                onChange={props.handleChangeNewCharacter}
                value={props.form.img}
            />
            <textarea
                name="biography"
                id="biography"
                onChange={props.handleChangeNewCharacter}
                value={props.form.biography}
            />
            <button
                onClick={isUpdating()
                    ? props.handleUpdateCharacter
                    : props.handleAddNewCharacter
                }
            >
                    {isUpdating() ? 'Editar' : 'Agregar'} personaje
            </button>
        </>
    )
}
