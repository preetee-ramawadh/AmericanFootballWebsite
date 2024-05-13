"use strict";

let teams = [
  {
    teamcode: "DAL",
    name: "Dallas Cowboys",
    locatedIn: "Arlington, TX"
  },
  {
    teamcode: "DEN",
    name: "Denver Broncos",
    locatedIn: "Denver, CO"
  },
  {
    teamcode: "HOU",
    name: "Houston Texans",
    locatedIn: "Houston, TX"
  },
  {
    teamcode: "KAN",
    name: "Kansas City Chiefs",
    locatedIn: "Kansas City, MO"
  }
];

let selectedTeamValue = null;

window.onload = function () {

  // load the dropdown list (see function below)
  initTeamsDropdown();

  const teamsList = document.getElementById("teamList");
  //call onchange event to store selected value in selectedTeamValue
  teamsList.onchange = onTeamSelectionChanged;

  //call button onclick event
  const teamSelectedBtn = document.getElementById("teamSelectedBtn");
  teamSelectedBtn.onclick = onBtnClick;

};

function initTeamsDropdown() {
  const teamsList = document.getElementById("teamList");
  //get size of teams data
  let teamsize = teams.length;

  for (let i = 0; i < teamsize; i++) {

    // create the option element and set the text and value at the same time
    let theOption = new Option(teams[i].name, teams[i].teamcode);

    // append the option as a child of (inside) the select element
    teamsList.appendChild(theOption);
  }
};

function onTeamSelectionChanged() {

  const teamsList = document.getElementById("teamList");
  // find the value of the team selected from options
  selectedTeamValue = teamsList.value;
};

function onBtnClick() {
  let messageDiv = document.getElementById("messageDiv");
  let teamName = null;
  let teamCode = null;
  let teamLocation = null;
  if (selectedTeamValue == null) {
    messageDiv.innerHTML = "nothing selected";
  } else {
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].teamcode == selectedTeamValue) {
        teamName = teams[i].name;
        teamCode = teams[i].teamcode;
        teamLocation = teams[i].locatedIn;

        messageDiv.innerHTML = `You selected the ${teamName} (${teamCode}) who play in ${teamLocation}`;
        return;
      }
    }
  }






}
