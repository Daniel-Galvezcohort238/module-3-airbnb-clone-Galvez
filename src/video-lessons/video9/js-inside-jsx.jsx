export default function jsInsideJSX() {
    const firstName = 'Joe';
    const lastName = 'Schmoe'

    const date = new Date();
    const hours = date.getHours()
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = 'morning';
    } else if ( hours >= 12 &&  hours < 17) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'night';
    }

    return (
        <>
            Video9
            <h1>Hello {firstName} {lastName}</h1>
            <h1>Good {timeOfDay}</h1>
        </>
    )
}