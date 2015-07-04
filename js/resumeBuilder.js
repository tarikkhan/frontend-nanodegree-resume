var bio = {
	//"name" : "Tarik",
	"age" : 31,
	"role" : "Web Ninja",
	"contact_info" : {
		"street" : 01,
		"house" : 32,
		"post" : "Rangpur Sadar",
		"dist" : "Rangpur",
		"postCode" : "5300",
		"country" : "Bangladesh"
	},
	"skills" : ["js", "walking", "reading"],
	"welcomeMessage" : "Come Get Some"
};

bio.email = "zinga";

var work = {};

work.company = "Internet";
work.jobTitle = "Developer";


var education = {};

education["school"] = "Lots";
education["college"] = "Notre Dame";

$("#main").append(education["college"]);