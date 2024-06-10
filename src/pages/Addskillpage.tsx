import {useState} from 'react'
import './addskills.css'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { CiSearch } from "react-icons/ci";

interface skill{
  id:number,
  name:string
}
const suggestedSkills:skill[] = [
    {id:1,"name":'Marketing'},  {id:2,"name":'Marketing'},
    {id:3,"name":'Marketing'},  {id:4,"name":'Marketing'},
    {id:5,"name":'Marketing'}, {id:6,"name":'Marketing'},
    {id:7,"name":'Marketing'}, {id:8,"name":'Marketing'},  {id:9,"name":'Marketing'},
    {id:10,"name":'Marketing'}
  ];

const Addskillpage = () => {
    const navigate=useNavigate();
    const [selectedskill, setSelectedSkill] = useState<skill[]>([]);

   //if selected then change the color and look like selected 
   const changeSkillColor = (id:number,name:string) => {
    setSelectedSkill(prevSelected =>
        prevSelected.some(skill=>skill.id===id)
          ? prevSelected.filter(skill => skill.id !== id)
          : [...prevSelected,{id,name}]
      );
  };

  //save into the database and as well in the local storage for fetch the data in skill page
  const handleSaveClick=async()=>{
    try {
        localStorage.setItem('selectedskill',JSON.stringify(selectedskill));

        // Api integration to save the data in the database;

        // const res=await axios.post("api",{postdata need to mention});
        // if(res.data.success){
        //   alert("Data saved successfully");
        //navigate('/skills');
        // }else{
        //   alert("Data is not saved");
        // }
        navigate('/skills');
    } catch (error) {
        console.log(error)
    }

  }


  //handling the backbutton
  const handleBack=()=>{
       navigate('/skills')
  }


    return (
        <div className="skillscontainer">
          <h2>Add Skills</h2>
          <div className="searchskill">
            <CiSearch className='searchicon'/>
            <input type="text" placeholder="Skills (e.g., Data Analysis)" />
          </div>
          <p>Suggested skills based on your profile</p>
          <div className="skillsselect">
            {suggestedSkills.map((skill) => (
              <div
                key={skill.id}
                className={`skill ${selectedskill.some(select=>select.id===skill.id) ? 'selected' : ''}`}
                onClick={() => changeSkillColor(skill.id,skill.name)}
              >
                {skill.name}
              </div>
            ))}
          </div>
          <div className="buttons">
            <button className="btn" onClick={handleBack}>BACK</button>
            <button className="btn" onClick={handleSaveClick}>SAVE</button>
          </div>
        </div>
      );
}

export default Addskillpage
