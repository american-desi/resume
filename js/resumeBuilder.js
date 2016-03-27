
var bio = {
	"name" : "Joshua Thomas",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "joshuathomas096@gmail.com",
		"github" : "https://github.com/joshuathomas096",
		"location" : "New York, New York",
		"mobile" : "377-393-4448"
	},
	"skills" : [
		"chilling", "sleeping", "napping", "lounging"

	],
	"biopic" : '',
	"welcomeMessage" : "Welcome to my site!",
};


bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

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

	//var HTMLbioPic = '<img src="%data%" class="biopic">';
	//$("#topContacts: last").append(HTMLbioPic);


	var formattedEmail = HTMLcontactGeneric.replace("%contact%", "email: ");
	formattedEmail = formattedEmail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGit = HTMLcontactGeneric.replace("%contact%", "github: ");
	formattedGit = formattedGit.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGit);
	$("#footerContacts").append(formattedGit);
	var formattedLocation = HTMLcontactGeneric.replace("%contact%", "location: ");
	formattedLocation = formattedLocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$('#header').append(formattedWelcome);
	
};

bio.display();

var education = {
	"schools": [
		{
			"name": "Queens College",
			"location": "Queens, NY",
			"degree": "BA",
			"majors" : ["Economics", "Elementary Ed"],
			"dates" : "09/01/16 - 06/01/18",
			"url" : "link string"
		},
		{
		"name": "Columbia Univeristy",
		"location": "New York, New York",
		"degree": "BS",
		"majors": ["Computer Engineering"],
		"dates" : "09/01/18 - 06/01/20",
		"url" : "link string" 
		}
	],
	"onlineCourses": [{
		"title" : "Front End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : "03/15/16 - 04/16/16",
		"url" : "www.udacity.com"

	}]
};

var work = {
	"jobs": [
		{
			"title": "Lifeguard",
			"employer": "YMCA",
			"location" : "New Rochelle, NY, USA",
			"dates": "03/01/16 - 06/01/16",
			"description" : "I guard the pool!"
		},
		{
			"title": "Human Behavioral Research Specialist",
			"employer": "UConn Neag",
			"location" : "Storrs, CT, USA",
			"dates": "09/01/15 - 12/01/15",
			"description" : "I study 3rd graders!"
		}
	]
};

var projects = {
	"projects": [ //FIX PROJECTS PROJECTS IN DISPLAY FUNCTION
		{
			"title" : "Portfolio Site",
			"date" : "2015",
			"description" : "I basically built a portofolio website.",
			"images" : ['images/google.png']
		},
		{
			"title" : "Resume Site",
			"date" : "2016",
			"description" : "I built a resume website.",
			"images" : ['images/google.png']
		}

	]
};




education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);



		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajors);
		$(".education-entry:last").append(formattedDates);
	}
	$(".education-entry:last").append(HTMLonlineClasses)

	for (course in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	}
};

education.display();

work.display = function(){
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	}
};

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			};
		};
	}
};

projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#mapDiv").append(googleMap);

