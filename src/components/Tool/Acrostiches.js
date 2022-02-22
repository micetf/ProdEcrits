import acrostiche01 from "../../images/acrostiche-01.png";
import acrostiche02 from "../../images/acrostiche-02.png";

import React from "react";
import Amazon from "./Amazon.js";
import Acceder from "./Acceder.js";

function Acrostiches({ id }) {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={id === "01" ? acrostiche01 : acrostiche02}
                    alt="Acrostiche 2.0 (Nouvelle version)"
                    className="card-img-top img-thumbnail"
                />
                <div className="card-body">
                    <h5 className="title-card text-center">
                        Acrostiche 2.0 ({id === "01" ? "Ancienne" : "Nouvelle"}{" "}
                        version)
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                        (Cycles 2 et 3)
                    </h6>
                    <div className="card-text text-center">
                        <p>
                            Outil permettant de créer l'image d'un acrostiche.
                        </p>
                        <Amazon creativeASIN="2211064825">
                            L'ogre et l'acrostiche (Yak Rivais)
                        </Amazon>
                        <Acceder>
                            {id === "01" ? "eAcrostiches" : "acrostiche"}
                        </Acceder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acrostiches;
