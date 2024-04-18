function User(props){
 
    return(
        <div className="card-container">
         <span className={props.online?"pro online":"pro offline"}>{props.online?"online":"offline"}</span> <br></br>
        <img src={props.profile} alt="user"></img>
        
       <h3>{props.name}</h3>
       <h3>{props.city}</h3>
       <p>{props.desciption}</p>
       <div className="buttons"><button className="primary">Message</button>
       <button className="primary outline">Following</button></div>
       <div className="skills">
        <h6>Skills</h6>
        <ul>
           {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>))}
        </ul>
       </div>
        </div>
    )
}
const Usercard = () => {
  const userdata=[{
    name:"janani",
  city:"chennai" ,
desciption:"full stack developer",
skills: ["UI/UX","web development","Java","SQL","HTML","CSS","javascript","NODE"],
online:true,
profile:"images/img1.jpg"},
{
  name:"harshini",
  city:"chennai" ,
desciption:"datascientist",
skills: ["UI/UX","data science","python","SQL","analytics","hadoop","javascript","big data"],
online:false,
profile:"images/img2.webp"},
{ name:"pandimeena",
city:"madurai" ,
desciption:"frontend developer",
skills: ["UI/UX","web development","Java","SQL","HTML","CSS","javascript","NODE"],
online:true,
profile:"images/img3.webp"}
];
  return (
    
    <>{userdata.map((user,index)=>(
      <User key={index} 
      name={user.name}
       profile={user.profile}
       description={user.description}
       skills={user.skills}
       online={user.online}
      />
    ))

    }</>

  )
}

export default Usercard
