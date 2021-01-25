window.onload = function () {
    var tabItem = document.getElementsByClassName('tab-item')
    console.log(tabItem)
    var item = tabItem[0].getElementsByTagName('div')
    console.log(item)

    var tabContent = document.getElementsByClassName('tab-content')
    var content = tabContent[0].getElementsByTagName('div')

    // 给三个选项添加点击事件
    for (let i = 0; i < item.length; i++) {
        item[i].index = i;
        item[i].onclick = function () {
            for (let j = 0; j < item.length; j++) {
                item[j].className = '';
                content[j].style.display = 'none'
            }
            this.className = 'active'
            content[item[i].index].style.display = 'block'
        }
    }
}