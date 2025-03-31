


function addCourseField() {
    let container = document.getElementById("courses-container");
    let wrapper = document.createElement("div");
    
    let courseId = document.createElement("input");
    courseId.type = "text";
    courseId.name = "course_id[]";
    courseId.placeholder = "Course ID";
    courseId.required = true;
    
    let courseName = document.createElement("input");
    courseName.type = "text";
    courseName.name = "course_name[]";
    courseName.placeholder = "Course Name";
    courseName.required = true;
    
    let courseReason = document.createElement("input");
    courseReason.type = "text";
    courseReason.name = "course_reason[]";
    courseReason.placeholder = "Reason for taking course";
    courseReason.required = true;
    
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        container.removeChild(wrapper);
    };
    
    wrapper.appendChild(courseId);
    wrapper.appendChild(courseName);
    wrapper.appendChild(courseReason);
    wrapper.appendChild(deleteButton);
    container.appendChild(wrapper);
}

