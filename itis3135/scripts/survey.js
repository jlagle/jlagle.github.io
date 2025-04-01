const form = document.querySelector("form");
const coursesContainer = document.getElementById("courses-container");

function displayFormData() {
    let formData = new FormData(document.querySelector("form"));
    let resultContainer = document.createElement("div");
    resultContainer.style.maxWidth = "800px";
    resultContainer.style.margin = "0 auto";
    
    let fullName = `<div style="display: block; text-align: center; margin-top: 20px;"><h1>${formData.get("fname")} ${formData.get("lname")} || Jumpy Lemur</h1></div>`;
    resultContainer.innerHTML += fullName;
    
    let imgSrc = formData.get("image") 
    ? `<div style="display: block; text-align: center; margin-top: 20px;">
        <figure>
            <img src="${URL.createObjectURL(formData.get("image"))}" 
                 alt="${formData.get("fname")} ${formData.get("lname")}" 
                 style="display: block; margin: 0 auto; width: 60%; max-width: 900px;">
            <figcaption><em>${formData.get("caption")}</em></figcaption>
        </figure>
       </div>` 
    : "";
    resultContainer.innerHTML += "<br>";
    resultContainer.innerHTML += imgSrc;
    
    let sections = {
        "Personal Background": "personal",
        "Professional Background": "professional",
        "Academic Background": "academic",
        "Background in this Subject": "webdev",
        "Primary Computer Platform": "platform"
    };
    
    let list = "<ul>";
    for (let [label, key] of Object.entries(sections)) {
        let value = formData.get(key);
        if (value) list += `<li><b>${label}: </b>${value}</li>`;
    }
    
    let courses = formData.getAll("course_name[]");
    if (courses.length > 0) {
        let courseList = `<li><b>Courses I'm Taking & Why:</b><ul>`;
        courses.forEach((course, index) => {
            courseList += `<li><b>${formData.getAll("course_id[]")[index]} (${course}): </b>${formData.getAll("course_reason[]")[index]}</li>`;
        });
        courseList += `</ul></li>`;
        list += courseList;
    }
    
    let additionalSections = {
        "Funny/Interesting Item About Myself": "funny",
        "I'd also Like to Share": "anything"
    };
    
    for (let [label, key] of Object.entries(additionalSections)) {
        let value = formData.get(key);
        if (value) list += `<li><b>${label}: </b>${value}</li>`;
    }
    
    list += "</ul>";
    resultContainer.innerHTML += list;
    
    let resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.onclick = function () { location.reload(); };
    
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(resultContainer);
    document.querySelector("main").appendChild(resetButton);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
        alert("Please fill out all required fields.");
        return;
    }
    displayFormData();
});

form.addEventListener("reset", function () {
    setTimeout(() => location.reload(), 100);
});

function createInput(type, name, placeholder, required) {
    let input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    if (required) input.required = true;
    return input;
}

function addCourseField() {
    let container = document.getElementById("courses-container");
    let wrapper = document.createElement("div");
    wrapper.classList.add("course-entry");
    
    let courseId = createInput("text", "course_id[]", "Course ID", true);
    let courseName = createInput("text", "course_name[]", "Course Name", true);
    let courseReason = createInput("text", "course_reason[]", "Reason for taking course", true);
    
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        container.removeChild(wrapper);
    };
    
    wrapper.append(courseId, courseName, courseReason, deleteButton);
    container.appendChild(wrapper);
}


