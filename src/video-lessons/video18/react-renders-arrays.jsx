/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function RenderArrays() {
    const colors = [
        <h3 key={1}>Red</h3>,
        <h3 key={2}>Orange</h3>,
        <h3 key={3}>Yellow</h3>,
        <h3 key={4}>Green</h3>,
        <h3 key={5}>Blue</h3>,
        <h3 key={6}>Indigo</h3>,
        <h3 key={7}>Violet</h3>
    ]
    return (
        <>
        video18
            {colors}
        </>
    )
}