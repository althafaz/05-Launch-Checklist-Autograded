// Write your JavaScript code here!

// fuel level that is too low (less than 10,000 liters)

window.addEventListener("load", function() {

    const personalDataForm = document.body.querySelector('[data-testid="testForm"]');
    personalDataForm.addEventListener('submit',(e)=>{

        const pilotName = personalDataForm.querySelector("[name='pilotName']");
        const copilotName = personalDataForm.querySelector("[name='copilotName']");
        const fuelLevel = personalDataForm.querySelector("[name='fuelLevel']");
        const cargoMass = personalDataForm.querySelector("[name='cargoMass']");

        const formData = [pilotName,copilotName,fuelLevel,cargoMass]
        let count = 0

        const heading = document.getElementById('launchStatus')

        heading.textContent = 'Awaiting Information Before Launch';
        heading.style.color = 'black';

        for(field of formData){

            if(validateInput(field.value) === 'Empty'){
                console.log(field.value)
                field.classList.add('errorForm')
                field.setAttribute('placeholder','Please enter a value')
            }

            else
            {
                if(field.name === 'pilotName' || field.name === 'copilotName'){
                    if(validateInput(field.value) === 'Is a Number'){
                        field.classList.add('errorForm')
                        field.value = ''
                        field.setAttribute('placeholder','Please enter a string value')
                    }

                    else {
                        count++
                        field.classList.remove('errorForm')
                        field.removeAttribute('placeholder')
                    }
                }

                if(field.name === 'fuelLevel' || field.name === 'cargoMass'){
                    if(validateInput(field.value) === 'Not a Number'){
                        field.classList.add('errorForm')
                        field.value = ''
                        field.setAttribute('placeholder','Please enter a number')
                    }

                    else {
                        count++
                        field.classList.remove('errorForm')
                        field.removeAttribute('placeholder')
                    }

                }

            }
        }

        const list = document.getElementById('faultyItems');

      (count === 4) ?  formSubmission(document = this.document,list,pilotName.value,copilotName.value,fuelLevel.value,cargoMass.value) : list.style.visibility = 'hidden';
        e.preventDefault();
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        const pickedPlanet = pickPlanet(listedPlanets)
        const {name,diameter,star,distance,moons,image} = pickedPlanet
        addDestinationInfo(document, name, diameter, star, distance, moons, image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });