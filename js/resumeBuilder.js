
var bio = {
	"name" : "Josh",
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "joshuathomas096@gmail.com",
		"github" : "https://github.com/joshuathomas096",
		"location" : "New York, New York"
	},
	"skills" : [
		"chilling", "sleeping", "napping", "lounging"

	],
	"biopic" : "this is my biopic",
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
	
};

bio.display();

var education = {
	"schools": [
		{
			"name": "Queens College",
			"location": "Queens, NY",
			"degree": "BA",
			"majors" : ["Economics", "Elementary Ed"],
			"dates" : "September 2016- June 2018",
			"url" : "link string"
		},
		{
		"name": "Columbia Univeristy",
		"location": "New York, New York",
		"degree": "BS",
		"majors": ["Computer Engineering"],
		"dates" : "September 2018- June 2020",
		"url" : "link string" 
		}
	],
	"onlineCourses": [{
		"title" : "Front End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : 2016,
		"url" : "www.udacity.com"

	}]
};

var work = {
	"jobs": [
		{
			"title": "Lifeguard",
			"employer": "YMCA",
			"location" : "New Rochelle, NY, USA",
			"dates": "March 2016- June 2016",
			"description" : "I guard the pool!"
		},
		{
			"title": "Human Behavioral Research Specialist",
			"employer": "UConn Neag",
			"location" : "Storrs, CT, USA",
			"dates": "September 2015-December 2015",
			"description" : "I study 3rd graders!"
		}
	]
};

var projects = {
	"frontend": [
		{
			"title" : "Portfolio Site",
			"date" : "June 2015",
			"description" : "I basically built a portofolio website.",
			"images" : ['image/google.png']
		},
		{
			"title" : "Resume Site",
			"date" : "June 2016",
			"description" : "I built a resume website.",
			"images" : ['image/google.png']
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

		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedMajors);
		$(".education-entry:last").append(formattedDates);


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
	for (project in projects.frontend) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.frontend[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.frontend[project].date);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.frontend[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.frontend[project].images.length > 0) {
			for (image in projects.frontend[project].image) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.frontend[project].image[image]);
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

