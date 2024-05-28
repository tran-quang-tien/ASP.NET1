import './App.css';
import React, {useState} from 'react'
import Tqtlisttask from './Tqtlisttask';
import Tqttaskad from './Tqttaskad';
function App() {
  const Tqt_listtask = [
    { Tqt_id:1,Tqt_name:"Học lập trình frontend", Tqt_level:"Small" },
    { Tqt_id:2, Tqt_name:"Học lập trình reactjs",Tqt_level:"Medium"},
    { Tqt_id:3, Tqt_name:"Lập trình với Frontend - Reactjs",Tqt_level:"High"},
    { Tqt_id:4, Tqt_name:"Lập trình Fullstack (PHP, Java, NetCore)",Tqt_level:"Small"},
   ];
   const [Tvclisttask , setTvclisttask]= useState(Tqt_listtask);
   const tqthandlechange = (tqtParam)=>{
    console.log("App",tqtParam);
   }
  return (
    <div className="container border">
  <h1>Trần Quang Tiến</h1>
<Tqtlisttask renderTqtlisttask ={Tqt_listtask}/>
<Tqttaskad tqtonsubmit={tqthandlechange} />
    </div>
  );
}

export default App;
