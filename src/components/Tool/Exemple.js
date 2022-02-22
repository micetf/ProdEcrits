import React from "react";

function Exemple({ children }) {
    return (
        <p>
            <a
                className="btn btn-info"
                href={`https://micetf.fr/${children}`}
                title="Voir un exemple"
                target="_blank"
            >
                Voir un exemple
            </a>
        </p>
    );
}

export default Exemple;
