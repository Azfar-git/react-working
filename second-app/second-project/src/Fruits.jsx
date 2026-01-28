function Fruits({ items }) {
    return (
        <div>
            <h2>List Rendering (map) Component</h2>

            {items.length > 0 ? (   
                <ul>
                    {items.map((itm, index) => (

                        <li key={index}>{itm}</li>

                    ))}
                </ul>
            ) : (
                <p>No items found</p>
            )}

        </div>
    );
}

export default Fruits;
