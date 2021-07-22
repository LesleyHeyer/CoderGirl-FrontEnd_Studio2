function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      renderBios(data);
    })
}

//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {
  
  return (
   <div className="astronaut">
     <div className="bio">
       <h3>{ astronaut.firstName } {astronaut.lastName}</h3>
      <ul>
        <li>Hours in Space: { astronaut.hoursInSpace }</li>
        <li>Active: { astronaut.active === true ? "Active" : "Inactive" }</li>
        <li>Skills: { astronaut.skills.join(', ') }</li>
      </ul>
     </div>
     <img className="avatar" src={astronaut.picture}></img>
   </div>
  )
  
}

//Function should render all astronaut bios
function renderBios(data) {
  const astronautArray = [];

  data.forEach( (astronaut) => {
      astronautArray.push(AstronautBios(astronaut));
  });



  //The AstronautBios component should be repeated to display bios for all 
  //astronaunts in the returned data object.
  const root = document.getElementById('root');
  const container = 
  <div className='container'>
  {astronautArray}
  </div>

  ReactDOM.render( container, root );
  //Then attach to the 'root' div!


}



getData();


