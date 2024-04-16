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

import airbnbImages from './images/airbnb-card-image.png';
export default function card() {

    return (
    <>
        Video4
        <div className="video4Card">
            <div className="video4Image">
                <img src={airbnbImages}/>
            </div>
            <i className="fa-solid fa-star"></i><i className='stars'>5.0 (6)USA</i>
            <br></br>
            Life lessons with Katie Zaferes
            <br></br>
            <i className='price'>From $136</i> / person
        </div>
    </>
    )
}