import React from 'react';
import ReactDOM from 'react-dom';
import SettlementView from './containers/SettlementView.jsx'
import WorldMap from './containers/WorldMap.jsx'
import UserPortal from './containers/UserPortal.jsx'


window.onload = function(){
  ReactDOM.render(
    <div>
    <h1> App Started </h1>
    <SettlementView/>
    <WorldMap/>
    <UserPortal/>
    </div>,
    document.getElementById('app')
  );
}
