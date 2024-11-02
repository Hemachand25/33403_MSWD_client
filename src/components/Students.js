import React from 'react'
import PresenceButton from './PresenceButton'

const students = () => {
  return (
    <div class="body">
      <h2>Students </h2>
     <table>
        <thead>
        <tr>
            <td>NAME</td>
            <td>ID</td>
            <td>BRANCH</td>
            <td>YEAR</td>
            <td>ATTENDENCE</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Hemachand</td>    
            <td>33403 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        <tr>
            <td>Likitha</td>    
            <td>32508 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        <tr>
            <td>Priya</td>    
            <td>30606 </td>   
            <td>CSE</td>
            <td>2</td>  
            <td><PresenceButton/></td>       
        </tr>
        <tr>
            <td>Preethi</td>    
            <td>30003 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        <tr>
            <td>Yamini</td>    
            <td>30001 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        </tbody>
      </table>
      
    </div> 
  )
}

export default students
