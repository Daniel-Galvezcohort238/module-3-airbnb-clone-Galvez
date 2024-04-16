import cat from './images/bvt-cat.jpg'

export default function contactComponent() {
    return (
        <>
           <div className="contact-card">
                <img src={cat}/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <i className="fa-solid fa-phone"></i>
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <i className="fa-solid fa-envelope"></i>
                    <p>fluff@me.com</p>
                </div>
            </div> 
        </>
    )
}