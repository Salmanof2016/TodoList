import {createPortal} from "react-dom";
import {memo} from "react";

let PortalModal = () => {
    return createPortal(
        <>
            <h1>This is a portal Modal</h1>
        </>,document.getElementById('Modal')
    )
}
export default memo(PortalModal)