import './app2.css'
import $ from 'jquery'
const active = localStorage.getItem('localKey') === 'yes'

const v = {

    init(){
        let initHtml = `
        <div id="action1" class="action active">
            <span>1号</span>
        </div>
        <div id="action2" class="action">
            <span>2号</span>
        </div>
        <div id="content1" class="content">内容1</div>
        <div id="content2" class="content invisible">内容2</div>
        `
        if(!active){
            $('#app2')[0].innerHTML = initHtml
        }else{
            $('#app2')[0].innerHTML = initHtml
            $('#action2').addClass("active")
            $('#content2').addClass('visible')
            $('#action1').removeClass("active")
            $('#content1').removeClass('visible').addClass('invisible')
        }

    },
}
const c = {
    init() {
        v.init()
        this.bindEvents()
    },
    bindEvents(){
        $('#action1').on('click', function () {
            $('#action1').addClass("active")
            $('#content1').addClass('visible')
            $('#action2').removeClass("active")
            $('#content2').removeClass('visible').addClass("invisible")
            localStorage.setItem('localKey', 'no')
        })
        $('#action2').on('click', function () {
            $('#action2').addClass("active")
            $('#content2').addClass('visible')
            $('#action1').removeClass("active")
            $('#content1').removeClass('visible').addClass('invisible')
            localStorage.setItem('localKey', 'yes')
        })
    }
}
export default c