import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import SettlementView from './containers/SettlementView.jsx'
import WorldMap from './containers/WorldMap.jsx'
import UserPortal from './containers/UserPortal.jsx'
>>>>>>> origin/develop


window.onload = function(){
  ReactDOM.render(
<<<<<<< HEAD
    <h1> App Started </h1>,
=======
    <div>
    <h1> App Started </h1>
    <SettlementView/>
    <WorldMap/>
    <UserPortal/>
    </div>,
>>>>>>> origin/develop
    document.getElementById('app')
  );
}
