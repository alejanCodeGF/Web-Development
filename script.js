let Frontendmentor = {"social-links-profile-main" : ["/photos/final_design1.png", "Profile with social links", 
"Presentation card with links to all the social networks (LinkedIn, GitHub, etc.) with dark/light mode"], 
"blog-preview-card-main" : ["/photos/final_design1.png", "Preview card of a blog", 
"Presentation card with a link to a blog, with a category, a title and a description of the theme, with the author at the end"]}

let OdinProject = {"odin-Calculator" : ["/images/final_design1.png", "Functional calculator made with HTML, CSS and JS", 
"Functional calculator made with HTML, CSS and JS, with sum, subtraction, division and multiplication, as well as dot annotation"], 
"odin-Etch-a-Sketch" : ["/images/final_design1.png", "Etch a Sketch (a.k.a. pixeled canvas) made with HTML, CSS, and JS", 
"Etch a Sketch made with HTML, CSS, and JS, with a multitude of colors, restart of the canvas, and pixel configuration"], 
"odin-landing-page" : ["/images/final_design1.png", "Example of a profesional landing page", 
"Example of a profesional landing page made with HTML and CSS styles"], "odin-Rock-Paper-Scissors" : ["/images/final_design1.png", 
"Rock paper scissors game made with JavaScript", "Rock paper scissors game made with JavaScript and a user interface (UI) to take your move"], 
"odin-recipes" : ["/images/final_design1.png", "Recipes page, with 3 examples"]}

const document_name = document.querySelector("#name");
const div_projects = document.querySelector(".all_projects");

// En el futuro cuando hayan más carpetas, hacer un switch
let dict_projects = (document_name.className == "Frontendmentor") ?  Frontendmentor : OdinProject

// Esto es porque en el Frontendmentor he puesto mi solución en una carpeta a parte, para separarlo, y en el de Odin la carpeta es la solución
let url_change = (document_name.className == "Frontendmentor") ? "/my_solution" : "" 

for (let key in dict_projects) {
    dict_projects[key]
    const project = document.createElement("div");
    project.className = "my_project";

    const img_project = document.createElement("img");
    img_project.className = "project_image";
    img_project.setAttribute("src", `./${key}${url_change}${dict_projects[key][0]}`);
    project.appendChild(img_project);

    const text_project = document.createElement("div");
    text_project.className = "text_project";

    const title = document.createElement("h2");
    title.className = "project_title";
    title.textContent = dict_projects[key][1];
    text_project.appendChild(title);

    const description = document.createElement("p");
    description.className = "project_description";
    description.textContent = dict_projects[key][2];
    text_project.appendChild(description);

    const directory = document.createElement("a");
    directory.className = "project_link";
    directory.textContent = "Go to the project";
    directory.setAttribute("href", `./${key}${url_change}/index.html`);
    text_project.appendChild(directory);

    project.appendChild(text_project);
    div_projects.appendChild(project);
}