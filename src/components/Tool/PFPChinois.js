import React from "react";
import pfpc from "../../images/pfpc.png";
import Acceder from "./Acceder.js";
import Amazon from "./Amazon.js";
import Exemple from "./Exemple.js";

function PFPChinois() {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={pfpc}
                    alt="Petite fabrique à portraits chinois"
                    className="card-img-top img-thumbnail"
                />
                <div className="card-body">
                    <h5 className="title-card text-center">
                        Petite Fabrique à Portraits Chinois
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                        (Cycles 2 et 3)
                    </h6>
                    <div className="card-text text-center">
                        <p>
                            Cette application WEB permet de créer un livre
                            interactif pour la présentation de son portrait
                            chinois.
                        </p>
                        <Amazon creativeASIN="235832308X">
                            Portraits chinois: Si j'étais... (Gaëtan Serra)
                        </Amazon>
                        <Exemple>PortraitChinois/exemple</Exemple>
                        <Acceder>PortraitChinois</Acceder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PFPChinois;
