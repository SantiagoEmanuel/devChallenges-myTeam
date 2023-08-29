export function Card ({name, imgUrl, work, id}) {
    
    return (
        <div className="cardContainer" id={id}>
            <div className="img">
                <img src={imgUrl} alt={name} className="imgImg"/>
                <p className="name"> {name} </p>
            </div>
            <p className="work">{work}</p>
        </div>
    )
}