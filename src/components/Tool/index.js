import PFPHistoires from "./PFPHistoires.js";
import PFPChinois from "./PFPChinois.js";
import PFPourquoiParceque from "./PFPourquoiParceque.js";
import BiblioAnimations from "./BiblioAnimations.js";
import Acrostiches from "./Acrostiches.js";

function Tool() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <PFPHistoires />
                <PFPChinois />
                <PFPourquoiParceque />
                <BiblioAnimations />
                <Acrostiches id="01" />
                <Acrostiches id="02" />
            </div>
        </div>
    );
}

export default Tool;
