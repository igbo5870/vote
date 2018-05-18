 import React from 'react'; 


 export default function ListName(props){
    return (
        <ul className="nameList">
            {
                 props.list.map((row) => (
                 <li id={row.id} className='no-vote'key={row.id}>{row.first_name}</li>  
                ))
            }
        </ul>
    )
 }
