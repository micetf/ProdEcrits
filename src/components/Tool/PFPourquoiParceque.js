import React from "react";
import pourquoiParceque from "../../images/pourquoi-parceque.png";
import Acceder from "./Acceder.js";
import Amazon from "./Amazon.js";
import Exemple from "./Exemple.js";

function PFPourquoiParceque() {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={pourquoiParceque}
                    alt="Petite Fabrique de Livres des Pourquoi et des Parce que"
                    className="card-img-top img-thumbnail"
                />
                <div className="card-body">
                    <h5 className="title-card text-center">
                        Petite Fabrique de Livres des Pourquoi et des Parce que
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                        (Cycles 2 et 3)
                    </h6>
                    <div className="card-text text-center">
                        <p>
                            Cette application WEB permet de créer un livre
                            interactif permettant d'associer des questions
                            "Pourquoi ...?" à des réponses "Parce que ...!" avec
                            des résultats surprenants, amusants, voire
                            poétiques.
                            <br />
                            En prolongation d'un travail sur un album jeunesse :
                        </p>
                        <Amazon creativeASIN="2745919873">
                            Le livre des petits pourquoi (Ghislaine Roman)
                        </Amazon>

                        <Exemple>FabriquePourquoiParceque/exemple</Exemple>

                        <Acceder>FabriquePourquoiParceque</Acceder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PFPourquoiParceque;
