import React from 'react';
import ReactDOM from 'react-dom';
import image from './img/nyancat.png'

var x=0


function compteur()
{
    x++;
    document.getElementById('nb').innerHTML = x;
}

function nav(){
   return (
       <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source,
                and modern CSS framework based on Flexbox" />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
       )
}

function img(){
    return(

        <img src={image} alt="Logo" onClick={compteur}/>
    )
}

ReactDOM.render(
    nav(),
    document.getElementById("nav")
);


ReactDOM.render(
    img(),
    document.getElementById("root")
);

ReactDOM.render(
    <p>Number of click : </p>,
    document.getElementById("sentence")
);

ReactDOM.render(
    <p>0</p>,
    document.getElementById("nb")
);

