import React from "react"
import "./ErrorMessage"


export default function modalWindow() {

    return (
    // Trigger/Open The Modal -->
    <>
    <button id="myBtn">Open npm Modal</button>

    {/* <!-- The Modal --> */}
    <div id="myModal" className="modal">

    {/*    // <!-- Modal content --> */}

    <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
    </div>

    </div>
</>
    )
}