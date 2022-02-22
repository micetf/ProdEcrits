import pfph from "../../images/pfph.png";
import Acceder from "./Acceder.js";
import Amazon from "./Amazon.js";
function PFPHistoires() {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={pfph}
                    alt="Petite fabrique personelle d'histoires"
                    className="card-img-top img-thumbnail"
                />
                <div className="card-body">
                    <h5 className="title-card text-center">
                        Petite Fabrique Personnelle d'Histoires
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                        (Cycles 2 et 3)
                    </h6>
                    <div className="card-text text-center">
                        <p>
                            Cette application WEB permet de créer une fabrique
                            interactive d'histoires à la manière de Bruno Gibert
                            :
                        </p>
                        <Amazon creativeASIN="2746705680">
                            Ma petite fabrique à histoires (Bruno Gibert)
                        </Amazon>
                        <Amazon creativeASIN="2746707462">
                            Ma grande marmite à merveilles (Bruno Gibert)
                        </Amazon>
                        <Acceder>FabriqueHistoires</Acceder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PFPHistoires;
