/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name= "jhon doe"
var role = "Front end"
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(internationalizeButton);


var bio = {
	"name":name,
	"role":role,
	"contacts": 
		{
		"mobile":"xxx xxx xxx xxx",
		"email":'jhondoe@exemple.com',
		"location":'California',
		"twitter":"none",
		"github":"none",
		"blog":"none"
		},
	"skills":'CSS, HTML, Javascript, Jquery ',
	"urlImage":'http://allenbukoff.com/newwavepsychology/JohnDoeMasthead.jpg',
}

var formatBioImg = HTMLbioPic.replace("%data%", bio.urlImage);
var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatEmail= HTMLemail.replace("%data%", bio.contacts.email);
var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatBlog = HTMLblog.replace("%data%", bio.contacts.blog);


$("#header").append(formatBioImg);

if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart+bio.skills);
}
else {
	$("#skills").append(HTMLskills);
}
$("#topContacts").append(formatLocation+formatMobile+formatEmail+formatTwitter+formatGithub+formatBlog);



var education = {
	"schools": [
	{
		"name": "School one",
		"city": "USA",
		"degree": "nn",
		"major": ["ESP", "CAT"],
		"location":"USA"
	},
	{
		"name": "School Two",
		"city": "USA",
		"degree": "ddd",
		"major": ["ESP", "CAT", "KK"],
		"location":"USA"
	}
	]
}

//education["name"] ="Ies Joan Brossa";
//education["years"] ="3";

var work = {
	"jobs":[
	{
		"employer":"Front End Developer",
		"title":" Job 1",
		"dates":"April 2013 - June 2015",
		"description":"HTLML, CSS, Javascript, HTML, ",
		"location":"USA"

	},
		{
		
		"employer":"Front End Developer",
		"title":"Job 2",
		"dates":"September 2012 July 2013",
		"description":"HTLML, CSS, Javascript, HTML, JQuery",
		"location":"USA"
		
		}

	]
};

var projects = {
	"projects":[
	{
		"title": "Web Page 1",
		"dates":"2015",
		"description":"Web using CSS, HTML, JQUERY, Responsive Design",
		"images": [
		"http://www.webmastergranada.es/wp-content/uploads/2015/06/desarrollo-web-tiendas-online-amvos-digital.jpg-768x446.jpg",
		"http://www.webmastergranada.es/wp-content/uploads/2015/06/desarrollo-web-tiendas-online-amvos-digital.jpg-768x446.jpg",
		"hhttp://www.laurenwood.org/anyway/wp-content/uploads/2007/10/web20tagcloud.png"
		]
	},
	{
		"title": "Web 2",
		"dates":"2015",
		"description":"Web using CSS, HTML, JQUERY, Responsive Design, CSS3",
		"images": [
		"http://www.laurenwood.org/anyway/wp-content/uploads/2007/10/web20tagcloud.png",
		"http://www.laurenwood.org/anyway/wp-content/uploads/2007/10/web20tagcloud.png",
		"http://www.webmastergranada.es/wp-content/uploads/2015/06/desarrollo-web-tiendas-online-amvos-digital.jpg-768x446.jpg"
		]
	}
	]
}


displayWork();


function displayWork() {
	for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);
	 var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	 var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	 var formatDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	 var formatDesc= HTMLworkDescription.replace("%data%", work.jobs[job].description);

 	 $(".work-entry:last").append(jobEmployer+" "+jobTitle + "<br>" +formatDate+"<br>"+formatDesc);
}
}


function inName(names){
	var nameSeparated = names.trim().split(" ");
	var  newName = nameSeparated[0].replace(nameSeparated[0].charAt(), nameSeparated[0].charAt().toUpperCase())+ " " + nameSeparated[1].toUpperCase();
	return newName;

}


projects.display = function () {
	for (project in projects.projects) {

	$("#projects").append(HTMLprojectStart);
	 var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

 	 var formatDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 	 var formatDesc= HTMLprojectDescription.replace("%data%",  projects.projects[project].description);
 	 
 	 $(".project-entry:last").append(projectTitle+" "+formatDate + "<br>" +formatDesc);
 	 if (projects.projects[project].images.length > 0) {

 	 	for (image in projects.projects[project].images){
 	 		var formatImg= HTMLprojectImage.replace("%data%",  projects.projects[project].images[image]);
 	 		$(".project-entry:last").append(formatImg);
 	 	}

 	 }
 	 
}

}
projects.display();

$("#mapDiv").append("<div id='map'></div>");