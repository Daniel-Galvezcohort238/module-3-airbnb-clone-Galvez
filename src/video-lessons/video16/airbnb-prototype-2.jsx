

import Hero from './hero.jsx'
import Navbar from './navbar.jsx'
import Card from './card.jsx'

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function Airbnb2() {


  return (
    <>
        <div className='airbnb'>
          <div className='airbnb-card'>
            Video16
              <Navbar />
              <br></br>
              <Hero />
              <Card 
              img = {'katie-zaferes.png'}
              rating = {'5.0'}
              reviewCount = {6}
              country = {'US'}
              title = {'Life Lessons with Katie Zaferes'}
              price = {136}
              />
          </div>
        </div>
    </>
  )
}

