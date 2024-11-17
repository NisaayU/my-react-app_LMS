import Circleimage from "./Circleimage"

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Circleimage img={props.img} />
            </div>
            <div className="bottom">
                <p className="info">Harga: {props.harga}</p>
                <p className="info">Stok: {props.stok}</p>
            </div>
        </div>
    )
}

export default Card