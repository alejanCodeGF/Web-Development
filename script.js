let Frontendmentor = {"social-links-profile-main" : ["URL imagen", "Profile with social links", 
"lorem ipsum noseque mas que habia aquí"], "blog-preview-card-main" : ["URL imagen", "Preview card of a blog", 
"lorem ipsum noseque mas que habia aquí"]}

let OdinProject = {"odin-Calculator" : ["URL imagen", "Functional calculator made with HTML, CSS and JS", 
"lorem ipsum noseque mas que habia aquí"], "odin-Etch-a-Sketch" : ["URL imagen", 
"Etch a Sketch (a.k.a. pixeled canvas) made with HTML, CSS, and JS", "lorem ipsum noseque mas que habia aquí"]}

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
    img_project.setAttribute("src", dict_projects[key][0]);
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