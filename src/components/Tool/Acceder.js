function Acceder({ children, label = "Accéder à l'application" }) {
    return (
        <p>
            <a
                className="btn btn-primary"
                href={`https://micetf.fr/${children}`}
                title={label}
            >
                {label}
            </a>
        </p>
    );
}

export default Acceder;
