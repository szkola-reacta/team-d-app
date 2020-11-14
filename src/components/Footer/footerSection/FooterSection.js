import React from 'react';

function FooterSection({className, title, children}) {
    return (
        <div className={className}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default FooterSection;
