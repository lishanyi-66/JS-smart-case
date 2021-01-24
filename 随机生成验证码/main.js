window.onload = function () {
    var codeBox = document.getElementById("codeBox")
    // console.log(codeBox);
    // codeBox.style.backgroundColor = 'red'

    // codeBox.innerHTML = "111111"
    let Btn = document.getElementById('btn')
    console.log(Btn)
    function createCode() {
        let area = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
        codeText = "";
        for (let i = 1; i <= 6; i++) {
            let ran = Math.round(Math.random() * (61 - 0) + 0);
            // console.log(ran)
            char = area.charAt(ran)
            // console.log(char)
            codeText += char
            // console.log(codeText)
        }

        codeBox.innerText = codeText
        console.log(codeBox)

    }
    createCode()
    // 为什么不加（）  
    Btn.onclick = createCode

}




