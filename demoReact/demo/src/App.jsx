import React from 'react'

function App() {
  const data = [1,2,3,4,5,6,7,];
const data1 = {
    name:"satya prakash singh",
    age:23,
    class :"mca",
    lastName: " singh"
  }

  const newobject = Object.values(data1);
  
  return (
    <>
   <h1> data inter the table </h1> 
   <table>
    <tr>
    <th>data</th>
    {
      data.map((data, index) =>(
        <td key={index}>{ data}</td>
      ))
    }
    </tr>
   </table>
    
    
    
    </>
  )
}

export default App