import Navbar from "./navbar";
import TravelSpot from "./travel-spot";
import data from './data'

export default function TravelJournal() {
    const travelSpots = data.map(spot => 
        <TravelSpot 
            key={spot.key}
            {...spot}
            
        />
    );

    return (
        <>
            <div className="travel-journal">

                <div className="travel-journal-border">
                    <div className="travel-journal-box-shadow">
                        <Navbar />
                        {travelSpots}
                        
                    </div>
                </div>
            </div>
        </>
    )
}