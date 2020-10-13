import $ from 'jquery'
import './app1.css'
const v = {
    m :{
        n : parseFloat(localStorage.getItem('n') || 100),
    },
    init(){
        let initHtml = `
        <div id="num">{{n}}</div>
        <button id="add">+1</button>
        <button id="sub">-1</button>
        <button id="mul">*2</button>
        <button id="div">÷2</button>
        `
        $('#app1')[0].innerHTML = initHtml.replace('{{n}}', this.m.n.toString())
        localStorage.setItem('n',this.m.n.toString())
    },
    render(){
        $('#num')[0].innerHTML = this.m.n.toString()
        localStorage.setItem('n',this.m.n.toString())
    },
}
const c = {
    init() {
        v.init()
        v.render()
        this.bindEvents()
    },
    eventHash:{
        '#add' : 'add',
        '#sub' : 'sub',
        '#mul' : 'mul',
        '#div' : 'div',
    },
    add(){
        v.m.n += 1;
        v.render()
    },
    sub(){
        v.m.n -= 1;
        v.render()
    },
    mul(){
        v.m.n *= 2;
        v.render()
    },
    div(){
        v.m.n /= 2;
        v.render()
    },
    bindEvents(){
        for(let key in this.eventHash){
            $(key).on('click', c[this.eventHash[key]])
        }
    }
}
export default c