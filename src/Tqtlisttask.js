import React from 'react'

export default function Tqtlisttask({renderTqtlisttask}) { 

    console.log(renderTqtlisttask);
    let tqtElementaltask = renderTqtlisttask.map((task,index)=>{

    
    return (
        <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{task.Tqt_name}</td>
            <td>{task.Tqt_id}</td>
            <td>{task.Tqt_level}</td>   
            <td>
                <button className='btn btn-success'> edit</button>
                <button className='btn btn-danger'>delete</button>
            </td>
        </tr>
        </>
    )
    })
    return (
    <div>
      <table className='table table bordered'>
        <thead>
            <tr>
                <th>
                    stt
                </th>
                <th>name</th>
                <th>ID</th>
                <th>level</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
        {tqtElementaltask}
        </tbody>
      </table>
    </div>
  )
}
