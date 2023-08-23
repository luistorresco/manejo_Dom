document.addEventListener("DOMContentLoaded", function () {
    var subjectSelect = document.getElementById("subject");
    var topicSelect = document.getElementById("topic");
    var chapterSelect = document.getElementById("chapter");
 
    for (var subject in subjectObject) {
        var option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    }
  
    subjectSelect.addEventListener("change", function () {
        var selectedSubject = subjectSelect.value;
        topicSelect.innerHTML = "<option value='' selected='selected'>Please select subject first</option>";
        chapterSelect.innerHTML = "<option value='' selected='selected'>Please select topic first</option>";

        if (selectedSubject !== "") {
            for (var topic in subjectObject[selectedSubject]) {
                var option = document.createElement("option");
                
                option.value = topic;
                option.textContent = topic;
                topicSelect.appendChild(option);
            } 
        }
    }); 

    topicSelect.addEventListener("change", function () {
        var selectedSubject = subjectSelect.value;
        var selectedTopic = topicSelect.value;
        chapterSelect.innerHTML = "<option value='' selected='selected'>Please select topic first</option>";

        if (selectedSubject !== "" && selectedTopic !== "") {
            for (var chapter of subjectObject[selectedSubject][selectedTopic]) {
                var option = document.createElement("option");
                option.value = chapter;
                option.textContent = chapter;
                chapterSelect.appendChild(option);
            }
        } 
    });
});

var subjectObject = {
    "Front-end": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
    },
    "Back-end": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
};
