import './app3.css'
import $ from 'jquery'

const v = {
    init(){
        if(localStorage.getItem('formKey') === 'square'){
            $('#app3-box')[0].innerHTML = `
            <div class="square"></div>
            `
        }else {
            $('#app3-box')[0].innerHTML = `
            <div class="square circle"></div>
            `
        }
    },
}
const c = {
    init() {
        v.init()
        this.bindEvents()
    },
    bindEvents(){
        $('#app3-box').on('click' ,function () {
            if (!$('.square').hasClass('active') && localStorage.getItem('formKey') === 'square'){
                $('.square').addClass('active').removeClass('reverse').removeClass('circle')
                localStorage.setItem('formKey', "circle")
            }else {
                $('.square').removeClass('active').removeClass('circle').addClass('reverse')
                localStorage.setItem('formKey', "square")
            }
        })
    }
}
export default c