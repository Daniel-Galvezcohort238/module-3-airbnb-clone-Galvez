import ContactComponent from "./contact";
import cat1 from './images/bvt-cat.jpg'
import cat2 from './images/bvt-cat2.jpg'
import cat3 from './images/bvt-cat3.jpg'
import cat4 from './images/bvt-cat4.jpg'

export default function Video10Challenge() {
    return (
        <>
            Video10 Challenge 1
            <div className="video10Challenge">
                <ContactComponent 
                    img={cat1}
                    name='Mr. Whiskerson'
                    phoneNumber='(212) 555-1234'
                    email='mr.whiskaz@catnap.meow'
                />
                <ContactComponent 
                    img={cat2}
                    name='Fluffykins'
                    phoneNumber='(212) 555-2345'
                    email='fluff@me.com'
                />
                <ContactComponent 
                    img={cat3}
                    name='Felix'
                    phoneNumber='(212) 555-4567'
                    email='thecat@hotmail.com'
                />
                <ContactComponent 
                    img={cat4}
                    name='Pumpkin'
                    phoneNumber='(0800) CAT KING'
                    email='pumpkin@scrimba.com'
                />

            </div>
        </>
    )
}