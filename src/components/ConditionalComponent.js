import { useState } from "react";

export default function ConditionalComponent(){
const [display, ] = useState(true);

return display ? (<div>
    <h3>What is Love?</h3>
</div> ) :

 (<div>
    <h3>Helplessly in love</h3>
</div> )

}