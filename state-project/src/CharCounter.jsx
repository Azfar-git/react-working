import { useState } from "react";

function CharCounter() {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Live Character Counter</h2>
            
            <input type="text" value={text} onChange={(e) =>setText(e.target.value)} />

            <p>
               Total Character is: {text.length} 
            </p>
        </div>
    );
}

export default CharCounter
