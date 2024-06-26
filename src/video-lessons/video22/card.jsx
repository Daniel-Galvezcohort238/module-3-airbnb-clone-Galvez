/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function card(props) {

    return (
    <>
        <div className="video22Card">
            <div className="video4Image">
                <img className="airbnb-img" src={`../images/${props.img}`}/>
            </div>
            <i className="fa-solid fa-star"></i><i className='stars'>{props.stats.rating}*({props.stats.reviewCount}){props.country}</i>
            <br></br>
            {props.title}
            <br></br>
            <i className='price'>From ${props.price}</i> / person
        </div>
    </>
    )
}