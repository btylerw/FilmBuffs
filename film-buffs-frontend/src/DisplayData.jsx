export const DisplayData = ( {film, filmDate, image} ) => {
    return (
        <>
        <div>
            <h1>{film}</h1>
            <h1>{filmDate}</h1>
            <img src={image} alt="" />
        </div>
        </>
    )
}