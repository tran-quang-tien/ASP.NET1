import React, { useState } from 'react'

export default function Tqttaskad() {
    const tqtTaskobj ={
        Tqt_id:0,
         Tqt_name:"",
         Tqt_level:""
    } 
    const[tqttask , setTqttask] = useState(tqtTaskobj);
    const tqthandlechange = (tqtEvent)=>{
      let name = tqtEvent.taget.name;
      let value =tqtEvent.taget.value;
      setTqttask( prev =>{
        return{
          ...prev,
        [name]:value,
        }
      })
      console.log(tqttask);
    }
    const tqthandlesubmit = (tqtEvent) =>{
      tqtEvent.prevenDedault();
      tqtonsubmit(tqttask);
    }

  return (
    <div>
        <h2>thêm mới task</h2>
        <form>
            <div>  
                <label>
                    Task id
                </label>
                <input name='Tqt_id' value={tqttask.Tqt_id} onChange={'tqthandlechange'}/>
                <label>
                    Task name
                </label>
                <input name='Tqt_name' value={tqttask.Tqt_name} onChange={'tqthandlechange'}/>
                <label>
                    Task level
                </label>
              
              <select name='Tqt_level' value={tqttask.Tqt_level} onChange={'tqthandlechange'}>
                <option value={"small"}>small</option>
                <option value={"medium"}>mediun</option>
                <option value={"high"}>high</option>
              </select>
            </div>
            <button onClick={tqthandlesubmit}>lưu lại</button>
        </form>
      
    </div>
  )
}
