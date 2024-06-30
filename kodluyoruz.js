
function newElement() {
    const listUlDOM = document.querySelector("#list")
    const taskDOM = document.querySelector("#task")

    if (taskDOM.value.trim() === ''){
        $('#deleteToast').toast("show")
    }else{
        $('#liveToast').toast("show")
        let liDOM = document.createElement("li")
        liDOM.textContent = taskDOM.value
        const DELETE = document.createElement("button")
        DELETE.textContent = "x"
        DELETE.className = "close"
        DELETE.onclick = () => {
            liDOM.remove()
        };

        liDOM.addEventListener("click", (event) => {
            if (!event.target.classList.contains("checked")) {
                event.target.classList.add("checked")
            } else {
                event.target.classList.remove("checked")
            }
        })
        liDOM.append(DELETE)
        listUlDOM.appendChild(liDOM)
    }
}
