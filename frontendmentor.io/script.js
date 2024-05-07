let Frontendmentor = {"social-links-profile-main" : ["URL imagen", "Profile with social links", 
"lorem ipsum noseque mas que habia aquí"], "blog-preview-card-main" : ["URL imagen", "Preview card of a blog", 
"lorem ipsum noseque mas que habia aquí"]}

const div_projects = document.querySelector(".all_projects");

for (let key in Frontendmentor) {
    Frontendmentor[key]
    // Hacer lo que tienes arriba mas el [i], para coger la info de cada cosa ([0] = imagen, [1] = titulo, y el [2] es la descripción)
    // El link al proyecto es simplemente url = "./key/index.html" creo
    const project = document.createElement("div");
    project.className = "my_project";

    const img_project = document.createElement("img");
    img_project.className = "project_image";
    img_project.setAttribute("src", Frontendmentor[key][0]);
    project.appendChild(img_project);

    const text_project = document.createElement("div");
    text_project.className = "text_project";

    const title = document.createElement("h2");
    title.className = "project_title";
    title.textContent = Frontendmentor[key][1];
    text_project.appendChild(title);

    const description = document.createElement("p");
    description.className = "project_description";
    description.textContent = Frontendmentor[key][2];
    text_project.appendChild(description);

    const directory = document.createElement("a");
    directory.className = "project_link";
    directory.textContent = "Go to the project";
    directory.setAttribute("href", `./${key}/index.html`);
    text_project.appendChild(directory);

    project.appendChild(text_project);
    div_projects.appendChild(project);
}