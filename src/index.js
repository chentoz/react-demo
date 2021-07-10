import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import printMe from './print'

function component() {
    const element = document.createElement('div')
    const btn = document.createElement('button')

    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe

    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)
    element.appendChild(btn)

    return element
}

document.body.appendChild(component())
