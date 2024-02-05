const container = document.querySelector(".container")
const edit_optn = document.querySelector(".edit_optn")
const heading = document.querySelector(".heading h1")
const name = document.querySelector("#name")
const phone_number = document.querySelector("#phone_number")
const img = document.querySelector("#img")
const email = document.querySelector("#email")
const edit = document.querySelector("#edit")
const delete_field = document.querySelector("#delete")

edit.addEventListener('click', () => {
    console.log(heading);
    container.style.visibility = "hidden";
    heading.innerHTML = "Select which field you want to edit";
    edit_optn.style.display = 'block'
    handleEdit();


})
function handleEdit() {
    console.log("handleedit");
    
    const edit_list = document.querySelectorAll('.edit_optn p')
    console.log(edit_list);
    edit_list.forEach((item) => {

        item.addEventListener('click', (e) => {
            console.log(e.target);
            const targetItem = e.target.className;
            console.log("event ewnter");
            handleNewValue(e.target);
        })
    })

}
function handleNewValue(targetItem) {
    console.log("enter");
    
    let prompt_value = null;
    prompt_value = prompt(`please enter new ${targetItem.innerHTML}`);
    console.log(prompt_value);
    if (prompt_value) {
        if (targetItem.className == 'sel_name') {
            name.innerHTML = prompt_value;
        } else if (targetItem.className == 'sel_ph') {
            phone_number.innerHTML = prompt_value;
        }
        else if (targetItem.className == 'sel_email') {
            email.innerHTML = prompt_value;
        }
        alert("Successful")
        edit_optn.style.display = 'none'
        container.style.visibility = "visible";
    }
    else {
        edit_optn.style.display = 'none'
        container.style.visibility = "visible";
    }
}