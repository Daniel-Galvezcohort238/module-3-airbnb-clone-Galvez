export default function TravelSpot(props) {
    return (
        <>
            <div className="spot">
                <img className="travel-journal-img" src={`../images/${props.img}`}></img>
                <div className="info">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>{props.country}</h3>
                        <a href={props.mapsLink}>View on Google Maps</a>
                    </div>
                    <h1 className="title">{props.title}</h1>
                    {/* <p className="duration">{props.duration.startDate} - {props.duration.endDate}</p> */}
                    <p className="travel-description">{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}