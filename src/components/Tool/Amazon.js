import React from "react";

function Amazon({ creativeASIN, children }) {
    return (
        <p>
            <a
                className="btn btn-outline-secondary"
                href={`http://www.amazon.fr/gp/product/${creativeASIN}/ref=as_li_qf_sp_asin_tl?ie=UTF8&amp;tag=deoupolacl-21&amp;linkCode=as2&amp;camp=1642&amp;creative=6746&amp;creativeASIN=${creativeASIN}`}
                title={`${children} sur Amazon`}
                target="_blank"
            >
                {children}
            </a>
        </p>
    );
}

export default Amazon;
