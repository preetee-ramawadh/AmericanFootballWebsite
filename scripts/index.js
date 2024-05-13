"use strict";

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

  window.onload = function() {
    // load the dropdown list (see function below)
    initTeamsDropdown();
  };

  function initTeamsDropdown(){

    const teamsList = document.getElementById("teamList");

    let teamsize = teams.length;

    for (let i = 0; i < teamsize; i++) {

        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(teams[i].name, teams[i].teamcode); 
  
        // append the option as a child of (inside) the 
        // select element
        teamsList.appendChild(theOption);
     }
  

  }