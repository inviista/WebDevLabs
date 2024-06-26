const add = (event) => {
    console.log(event);

    //searching
    const listElement = document.getElementById('list');
    const inputElement = document.getElementById("input")
    console.log(listElement);

    //creating
    const checkboxElement = document.createElement('input')
    checkboxElement.type = 'checkbox'
    checkboxElement.className = "checkbox";

    const textElement = document.createElement('span')
    textElement.textContent = inputElement.value;

    const iconElement = document.createElement('img')
    iconElement.src = 'images/delete-svgrepo-com.png';
    iconElement.className = 'img-delete';


    //actions
    if (inputElement.value.trim() !== "") {
        const newElement = document.createElement('li')
        newElement.className = "task";
        clearInput();

    checkboxElement.onchange = function () {
        this.checked ? textElement.style.textDecoration = "line-through" :
            textElement.style.textDecoration = "none";
    }

    iconElement.onclick = function() {
        newElement.remove();
    };

    //appending
    newElement.appendChild(checkboxElement)
    newElement.appendChild(textElement)
    newElement.appendChild(iconElement)

    listElement.appendChild(newElement)
}
}

function clearInput() {
    document.getElementById('input').value = ''; // Обнуляем значение поля ввода
}
