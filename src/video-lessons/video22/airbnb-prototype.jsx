

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

export default function Airbnb3() {
const cardElements = cardData.map(dataPoint => {
  return (
      <Card
          key={dataPoint.id}
          title={dataPoint.title}
          description={dataPoint.description}
          price={dataPoint.price}
          img={dataPoint.coverImg}
          stats={dataPoint.stats}
          country={dataPoint.location}
          openSpots={dataPoint.openSpots}
          />
          )
})

  return (
    <>
        <div className='airbnb'>
          <div className='airbnb-card'>
            Video22
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

