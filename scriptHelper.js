// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    console.log(name, diameter, star, distance, moons, imageUrl)
    const missionTarget = document.getElementById('missionTarget')

    missionTarget.innerHTML =`<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
 }
 
 function validateInput(testInput) {

    if(testInput.trim() === '')
    {
        return 'Empty'
    }

    else 
    {
        if(!isNaN(testInput)){
            return 'Is a Number'
        }
    
        if(isNaN(testInput))
        {
            return 'Not a Number'
        }
    }

    return 'valid'


 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    list.style.visibility = 'visible';

    const heading = document.getElementById('launchStatus')
    const pilotStatus = document.getElementById('pilotStatus')
    const copilotStatus = document.getElementById('copilotStatus')
    const fuelStatus = document.getElementById('fuelStatus')
    const cargoStatus = document.getElementById('cargoStatus')

    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`

    fuelStatus.textContent = 'Fuel level high enough for launch'
    cargoStatus.textContent = 'Cargo mass low enough for launch'


    if(fuelLevel < 10000) {
        heading.textContent = 'Shuttle Not Ready for Launch';
        heading.style.color = 'red';
        fuelStatus.textContent = 'Fuel level too low for launch';
    }

    if(cargoLevel > 10000) {
        heading.textContent = 'Shuttle Not Ready for Launch'
        heading.style.color = 'red';
        cargoStatus.textContent = 'Cargo mass too heavy for launch'
    }

    if((fuelLevel >= 10000) && (cargoLevel <= 10000)) {
        const heading = document.getElementById('launchStatus')
        heading.textContent = 'Shuttle is Ready for Launch'
        heading.style.color = 'green'
    }

}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
                return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const randomPlanetId = Math.floor(Math.random() * planets.length)
    return planets[randomPlanetId]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;


//  module.exports = {
//     addDestinationInfo:addDestinationInfo,
//     validateInput:validateInput,
//     formSubmission:formSubmission,
//     pickPlanet:pickPlanet,
//     myFetch:myFetch
//  }