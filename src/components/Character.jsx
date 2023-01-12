

const Character = ({ name, skin, eye, gender }) => {
    return(
        <div className="container-character">
            <h2>Name: {name}</h2>
            <h3>Skin color: {skin}</h3>
            <h3>Eye color: {eye}</h3>
            <h3>Gender: {gender}</h3>
        </div>
    )
}

export default Character;