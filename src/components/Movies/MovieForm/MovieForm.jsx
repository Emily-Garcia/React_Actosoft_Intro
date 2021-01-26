export default function MovieForm(props) {
    return (
        <>
            <h2>{props.index ? 'Edita' : 'Agrega'} una nueva película</h2>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Título"
                onChange={props.handleChangeNewMovie}
                value={props.form.title}
            />
            <input
                type="text"
                name="img"
                id="photo"
                placeholder="URL de la imagen"
                onChange={props.handleChangeNewMovie}
                value={props.form.img}
            />
            <textarea
                name="description"
                id="description"
                onChange={props.handleChangeNewMovie}
                value={props.form.description}
            />
            <button
                onClick={
                    props.index
                        ? () => props.handleUpdateMovie(props.index)
                        : props.handleAddMovie}
            >
                    {props.index ? 'Editar' : 'Agregar'} película
            </button>
        </>
    )
}