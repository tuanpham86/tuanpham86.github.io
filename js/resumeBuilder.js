/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Peter Parker");

/*var awesomeThoughts = "I am Peter Parker and I am awesome!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts);
console.log(awesomeThoughts);
console.log(funThoughts);
*/

/*
var skills = ["run", "walk", "sling"];
var bio = {
	"name": "Peter Parker 2",
	"role": "Slinger",
	"picture URL": "images/me.jpg",
	"welcome message": "Welcome",
	"skills": skills
};

$("#main").append(bio.name);
*/

var bio = {
	"name": "Peter Parker",
	"role": "Web slinger",
	"welcomeMessage": "Learning JavaSript",
	"contacts": {
		"mobile": 19001956,
		"email": "test@test.test",
		"github": "githubUs",
		"twitter": "@twitterN",
		"location":	"Sydney"
	},
	"skills": ["code","test","read","write"],
	"bioPic": "images/fry.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Student",
			"title": "Title A",
			"location": "Adelaide",
			"dates": "20/01/1900 - 20/04/1992",
			"description": "walking around"
		},
		{
			"employer": "Photographer",
			"title": "Title B",
			"location": "Melbourne",
			"dates": "20/04/1902 - 20/04/1994",
			"description": "sitting on chairs"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project A",
			"dates": 1991,
			"description": "JavaSript typing",
			"images": ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0iPJihKLJn06AVJtx3rUgBJDu456HSTdqn_N4Yd6EFdHKCx0','http://felixconstruction.com/wp-content/uploads/bb-plugin/cache/IMAG1156-300x169-circle.jpg']
		},
		{
			"title": "Project B",
			"dates": 1993,
			"description": "JavaSript typing",
			"images": ['images/197x148.gif']
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Project B",
			"city": "Melbourne",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 1990,
			"url": "http:google.com"
		},
		{
			"name": "Project B",
			"city": "Sydney",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 1991,
			"url": "http:google.com"
		}
	],
	"onlineCourses": [
		{
		"title": "Basic JS",
		"school": "Udacity",
		"dates": 2016,
		"url": "www.google.com"
		},
		{
		"title": "Web development",
		"school": "Udacity",
		"dates": 2016,
		"url": "www.google.com.vn"
		}
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	lastName = name[1].toUpperCase();
	return firstName +" "+ lastName;
}

$("#main").append(internationalizeButton);

/*
function inName() {
    var array = bio.name.split(" "); 
    array[array.length - 1] = array[array.length - 1].toUpperCase();     
    for(var i = 0; i < (array.length - 1); i++) {
        array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1).toLowerCase();
    }
    var internationalName = array.join(" ");

    return internationalName;
}
*/

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);