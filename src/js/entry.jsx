import React from "react";
import ReactDOM from "react-dom";
import Base from './components/base';
import Boilerplate from './components/boilerplate'
if (module.hot) {
    module.hot.accept();
}

const Entry = () => {
    return(
    <Base>
        <Boilerplate />
    </Base>
    ) 
}
export default Entry;

const mountNode = document.getElementById("app");
ReactDOM.render(<Entry />, mountNode);