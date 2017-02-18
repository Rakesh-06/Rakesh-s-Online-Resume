// start resume- bio
var bio = {
    "name": "Selvarajkumar Rakesh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "915-995-5659",
        "email": "rakesh.oct06@gmail.com",
        "github": "@Rakesh-06",
        "location": "TamilNadu"
    },
    "welcomeMessage": "Whatever happens, happens for good. Always hope for the BEST !!!",
    "skills": ["Critical-Thinker", "Musician", "Cryogenic sleeper", "Food-lover"],
    "biopic": "images/rakei-min.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var info = ["#topContacts", "#footerContacts"];
    for (var i = 0; i < info.length; i++) {
        infoID = info[i];
        $(infoID).append(formattedmobile);
        $(infoID).append(formattedemail);
        $(infoID).append(formattedgithub);
        $(infoID).append(formattedlocation);
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();
// end resume-bio

//resume- Education
var education = {
    "schools": [{
        "name": "Mahatma Montessori School",
        "location": "Madurai",
        "degree": "High-School",
        "majors": ["High-School Graduation"],
        "dates": "Till May, 2012",
        "url": "http://www.mahatmaschools.com"
    }, {
        "name": "Velammal College of Engineering and Technology",
        "location": "Madurai",
        "degree": "Bachelor of Engoneering",
        "majors": ["Mechanical Engineering"],
        "dates": "August, 2012 to April, 2016",
        "url": "http://www.vcet.ac.in"
    }],
    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": "September, 2016 - Going on....",
        "url": "http://www.udacity.com/nanodegrees/nd001"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedschoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $(".education-entry").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entr").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry").append(formattedonlineURL);
    }
};
education.display();
// end resume-education

// resume- work experience
var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "System Engineer",
        "dates": "January 2017 - Future",
        "location": "Mysore",
        "description": "Will be working in Infosys as a system engineer and will be designated as a web developer to work on website projects as per the client's request."
    }, {
        "employer": "VCET",
        "title": "Junior Research Fellowship",
        "dates": "May 2016 - September 2016",
        "location": "Madurai",
        "description": "Working for the projects leated to Computational Fluid Dynamics and assisting the professors and Ph.D pursuing staff with their paperworks. It also included the work of publishing journals in renouned journals and to take care pojects and inspect them those has government funding."
    }]
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        var FormattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var FormattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployertitle = FormattedEmployer + FormattedTitle;
        $(".work-entry:last").append(formattedEmployertitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedlocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();
// end resume-work experience

// resume- projects
var projects = {
    "projects": [{
        "title": "Computational Fluid Dynamics",
        "dates": "May, 2016",
        "description": " Computational Fluid Dynamics project on the lid driven cavity that was tested with the most renouned and the benchmark results of Ghia. this is one of the most basic problem in CFD that validates the procedure followed to iterate and analysis the working methods and handling of the professional software available",
        "images": ["images/cfd_example_1-min.jpg", "images/cfd_example_2-min.jpg"]
    }, {
        "title": "Animal- Trading Card",
        "dates": "October, 2016",
        "description": " It gives some important facts and interesting detail about our favorite animal. And my favorite one is Koala Bear; because it sleeps for 22 hours a day",
        "images": ["images/animal2-min-min.jpg", ]
    }]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var FormattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(FormattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedprojectDescription);

        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }
};
projects.display();
// end resume-projects

// to view map on the webpage bottom
$('#mapDiv').append(googleMap);

//Internationalize
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$('#header:last').append(internationalizeButton);
