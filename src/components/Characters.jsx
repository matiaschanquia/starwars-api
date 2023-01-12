import Character from "./Character";


const Characters = ({ result }) => {
    return(
        <div className="container-characters">
            {
                result && result.map(item => (
                    <Character key={item.name} name={item.name} skin={item.skin_color} eye={item.eye_color} gender={item.gender}/>
                ))
            }
        </div>
    )
}

export default Characters;