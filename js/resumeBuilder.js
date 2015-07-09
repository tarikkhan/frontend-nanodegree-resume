var formattedName = HTMLheaderName.replace("%data%", "Tarik Hasan Khan");
var foramttedRole = HTMLheaderRole.replace("%data%", "Web Ninja");

$("#header").append(foramttedRole);
$("#header").prepend(formattedName);


var work = {

	"jobs" : [
		{
			"employer" : "Civil Arch Farm",
			"title" : "Site Engineer",
			"location" : "Sylhet",
			"duration" : "2.5 months",
			"description" : "Real Horrible Experience"
		},


		{
			"employer" : "Odesk Clients",
			"title" : "Contractor",
			"location" : "Internet",
			"duration" : "4 Years",
			"description" : "Steady Income, different buyers, interesting yet tough and stressful life"
		},


		{
			"employer" : "Upwork",
			"title" : "Web Developer Wannabe",
			"location" : "Internet",
			"duration" : "Present onward",
			"description" : "Do or die, make or break situation"
		}
	]
}

var projects = {
		"project" : [
			{
				"title" : "Article Writer",
				"duration" : "2 years",
				"description" : "Different wriiting and SEO projects",
				"images" : ["http:lorempixel.com/400/400", "http:lorempixel.com/404/404", "http:lorempixel.com/401/401", "http:lorempixel.com/402/402"]
			},

			{
				"title" : "Editor",
				"duration" : "2 years",
				"description" : "Wordpress Site Editing Job",
				"images" : ["http:lorempixel.com/400/400", "http:lorempixel.com/404/404", "http:lorempixel.com/401/401", "http:lorempixel.com/402/402"]
			},
		]
}

var bio = {
	"name" : "Tarik Hasan Khan",
	"role" : "Web Developer",
	"welcomeMessage" : "There is no try, only do - Yoda",
	"contact" : {
		"phone" : 01671096670,
		"email" : "tariksayshi@gmail.com",
		"githubUsername" : "tarikkhan",
		"location" : {
			"road" : 1,
			"house" : 32,
			"post"	: "Rangpur",
			"dist" : "Rangpur",
			"country" : "Bangladesh"
			},
		"twitter" : "alhamora"
	},

	"skills" : ["HTML", "CSS", "Writing", "JavaScript"]
};

var education = {
	"schools" : [
		{
			"name" : "Every School I have attended",
			"location" : "Bangladesh",
			"degree" : "Of no use",
			"major" : "Bangladeshi Culture and social diseases"
		}
	],

	"onlineCourses" : [
		{
			"title" : "every programming language",
			"school" : "All those tutorials online",
			"duration" : "unlimited",
			"url" : "http://google.com"
		}
	]
}

if (bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	var count = bio.skills.length - 1;
	for(i = 0; i <= count; i++)
	{
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		console.log(formattedSkill);
		$("#skills").append(formattedSkill);
	}

}