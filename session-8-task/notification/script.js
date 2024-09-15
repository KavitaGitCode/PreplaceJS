let button = document.querySelector(".notify-me");
let toastMessage = document.querySelector(".toast-message");

let notificationMessage = [
    {
        type: "success",
        message: "Your are successfully login"
    },
    {
        type: "error",
        message: "Your request is not fullfiled"
    },
    {
        type: "warning",
        message: "You are out of space"
    },
    {
        type: "secondary",
        message: "You are on queue"
    }
];

function showInnerHTML(selectedArr){
    /* toastMessage.textContent =  selectedArr.message;
    toastMessage.classList.remove("success", "error", "warning", "secondary");
    toastMessage.classList.add(selectedArr.type); */

    let creatElement = document.createElement('div');
    creatElement.textContent =  selectedArr.message;
    creatElement.classList.add(selectedArr.type, 'toast');

    return creatElement;
}

function showToastMessage(){
    toastMessage.style.display = "block";
    let selectRandomNotification = Math.floor(Math.random() * notificationMessage.length);
    let result = showInnerHTML(notificationMessage[selectRandomNotification]);
    console.log(result)
    toastMessage.appendChild(result)

    setTimeout(() => {
       result.remove();
       /* toastMessage.innerHTML = "" */
    }, 3000)
}

button.addEventListener("click", function(){
    showToastMessage(); 
   /*  clearTimeout(showResult) */
});