

import Hero from './hero.jsx'
import Navbar from './navbar.jsx'
import Card from './card.jsx'
import cardData from './data.js' 

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function Airbnb6() {
const cardElements = cardData.map(item => {
  return (
      <Card
          key={item.id}
          {...item}
          />
          )
})

  return (
    <>
        <div className='airbnb'>
          <div className='airbnb-card'>
            Video26
              <Navbar />
              <br></br>
              <Hero />
              <div className='cards-div'>
                {cardElements}
              </div>

              {/* <Card 
              img = {'katie-zaferes.png'}
              rating = {'5.0'}
              reviewCount = {6}
              country = {'US'}
              title = {'Life Lessons with Katie Zaferes'}
              price = {136}
              /> */}
          </div>
        </div>
    </>
  )
}

