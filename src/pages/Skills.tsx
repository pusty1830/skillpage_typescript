import {useState,useEffect} from 'react'
import { RxCross2 } from "react-icons/rx";
import './skills.css'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';

const Skills = () => {
  const navigate =useNavigate();
  //navigate to the add skill 
  const handleaddClick=()=>{
      navigate('/addskills')
  }

  const [selectedskill,setSelectedSkill]=useState<{ id: number, name: string }[]>([]);

  //fetch all the data from the local storage and display it 
  useEffect(()=>{
    const stored=localStorage.getItem('selectedskill');
    if(stored){
      setSelectedSkill(JSON.parse(stored));
    }
  },[])




  //api call to delete from the database and as well as from the ui through the local storage;
  const handledeleteskill=async(skillid:number)=>{
       try {
        //api when integrate to the database it is needed
        // await axios.delete('api');
        const updatedskill = selectedskill.filter(skill => skill.id !== skillid);
        setSelectedSkill(updatedskill);
        localStorage.setItem('selectedskill', JSON.stringify(updatedskill));


       } catch (error) {
        
       }
  }

  return (
    <div className="skillscontainer1">
    <h2>Your Skills</h2>
    <hr />
    <div className="skillsselect1">
      {selectedskill.map(skill=>(
          <div key={skill.id} className="selectedskill">
               {skill.name} <RxCross2 className='delete' onClick={()=>handledeleteskill(skill.id)}/>
          </div>
      ))}
    </div>
    <hr />
    <div className="buttons2">
      <button className="btn" onClick={handleaddClick}>Add Skills</button>
    </div>
  </div>
  )
}

export default Skills
