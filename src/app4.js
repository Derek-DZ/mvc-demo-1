import './app4.css'
import $ from 'jquery'

const v = {
    init(){
        $('#app4')[0].innerHTML = `
            <div id="colorCircle"></div>
        `
    },
}
const c = {
    init() {
        v.init()
        this.bindEvents()
    },
    bindEvents(){
        $('#colorCircle').mouseenter(function(){
            $('#colorCircle').addClass('change')
        })
    }
}
export default c