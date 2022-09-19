import React from 'react';
import LeftBody from "../Body/LeftBody";
import MiddleBody from "../Body/MiddleBody";
import RightBody from "../Body/RightBody";

function Home(props) {
    return (
        <div className={'App-body'}>
            <LeftBody/>
            <MiddleBody/>
            <RightBody/>
        </div>
    );
}

export default Home;
