import animation from "../../images/animation.png";
import React from "react";
import Exemple from "./Exemple.js";
import Acceder from "./Acceder.js";

function BiblioAnimations() {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={animation}
                    alt="Bibliothèque d'animations"
                    className="card-img-top img-thumbnail"
                />
                <div className="card-body">
                    <h5 className="title-card text-center">
                        Bibliothèque d'animations
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                        (Cycles 2 et 3)
                    </h6>
                    <div className="card-text text-center">
                        <p>
                            Cette bibiliothèque propose quelques films
                            d'animation réalisés en utilisant les nouvelles
                            technologies du web. Un outil permettant de générer
                            ces animations (et destiné aux élèves) devrait voir
                            le jour d'ici le début de l'année 2014
                        </p>
                        <Exemple>animations/loup-douzou</Exemple>
                        <Acceder label="Prototype">
                            chanson-enfants-hiver-1
                        </Acceder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BiblioAnimations;
