import React from 'react';

function Hello() {

    const sayHello = () => {

        console.log("Hello Emre");
    }

    return (

        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>


    );

}

export default Hello;