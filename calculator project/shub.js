var string = "";
var button = document.querySelectorAll('.button')
Array.from(button).forEach(button) => {
    button.addEventlistner('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'c') {
            string = ""
            document.querySelector('input').value = string;
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string

        }
    })
}