import React from 'react';

function SocialLink({to, Icon}) {
    return (
       <a href={to} target="_blank" rel="noopener noreferrer">
           <Icon className="icon" />
       </a>
    );
}

export default SocialLink;
