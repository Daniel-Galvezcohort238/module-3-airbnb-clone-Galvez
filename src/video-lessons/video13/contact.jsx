
export default function contactComponent(props) {
    return (
        <>
           <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <i className="fa-solid fa-phone"></i>
                    <p>{props.phoneNumber}</p>
                </div>
                <div className="info-group">
                    <i className="fa-solid fa-envelope"></i>
                    <p>{props.email}</p>
                </div>
            </div> 
        </>
    )
}