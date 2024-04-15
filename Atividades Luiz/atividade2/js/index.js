const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nameA = urlParams.get('name')
const address = urlParams.get('address')
const city = urlParams.get('city')
const state = urlParams.get('state')
const job = urlParams.get('job')
const curriculum = urlParams.get('curriculum')


{/* 'computer'
'biology'
'environment'
'engineering'
'history' */}


let h1Name = document.getElementById("index-name");
let h2Address = document.getElementById("index-address");
let h2City = document.getElementById("index-city");
let h2State = document.getElementById("index-state");
let h2Job = document.getElementById("index-job");
let h2Curriculum = document.getElementById("index-curriculum");

if (nameA != "" && nameA != undefined) {
    h1Name.innerHTML = nameA
}

if (address != "" && address != undefined) {
    h2Address.innerHTML = address
}
if (city != "" && city != undefined) {
    h2City.innerHTML = city
}

if (state != "" && state != undefined) {
    h2State.innerHTML = state
}

if (job != "" && job != undefined) {
    h2Job.innerHTML = job
}

if (curriculum != "" && curriculum != undefined) {
    h2Curriculum.innerHTML = curriculum
}