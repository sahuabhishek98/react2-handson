import React,{useState} from 'react'
import './FormComp1.css';

const FormComp1=()=>{
      const [name,setName]=useState("");
      const [department,setDepartment]=useState("");
      const [rating,setRating]=useState(undefined);
      const [allData,setAllData]=useState([]);
      const submitData=(e)=>{
        e.preventDefault();
              const newData = {
                name:name,
                department:department,
                rating:rating
              }
              setAllData([...allData,newData])
              console.log(allData)
      }

      return (
       <div>
         <form className="form-main" onSubmit={submitData}>
              <h1>EMPOLYEE FEEDBACK FORM</h1>

              <div>
                  <label>Name :-</label>
                  <input type={"text"} 
                  name="name" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Enter Your Name..."
                  autoComplete="off"//remove auto suggesion
                   />
              </div>
              

              <div>
                  <label>Department :-</label>
                  <input 
                  type={"text"} 
                  name="department" 
                  value={department}
                  onChange={(e)=>setDepartment(e.target.value)}
                  placeholder="Enter Your Department..."
                  autoComplete="off"//remove auto suggesion
                   />
              </div>
              

              <div>
                 <label>Rating :-</label>
                 <input 
                 type={"number"} 
                 name="rating" 
                 value={rating}
                 onChange={(e)=>setRating(e.target.value)}
                 placeholder="Enter Your Rating..."
                 autoComplete="off"//remove auto suggesion
                  />
              </div>

              <button type="submit">Submit</button>
          </form>
             
          <div className="DisplayContainer">
                  {
                    allData.map((item)=>{
                           return(
                            <div className='displayData'>
                              <p>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</p>
                            </div>
                           )
                    })
                  }
          </div>

       </div>
      );
}

export default FormComp1;
