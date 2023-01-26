
const reactions=document.querySelector('.button_reactions');
const ul_reactions=document.querySelector('.ul_reactions');
const all=document.querySelectorAll('*:not(.button_reactions)');
const li=document.querySelectorAll('.li');
const input=document.querySelector('#input');
const hex=document.querySelector('#hex');
const position=document.querySelector('#position');
const Appearance_titr=document.querySelector('#Appearance_titr');
const steps_titr=document.querySelector('#steps_titr');
const target_titr=document.querySelector('#target_titr');
const steps=document.querySelector('#steps');
const box_main=document.querySelector('#box_main');
const target=document.querySelector('#target');
const div_option=document.querySelector('.div_option');
const div_option2=document.querySelector('.div_option2');
const div_option3=document.querySelector('.div_option3');
const div_option4=document.querySelector('.div_option4')
const div_iframe1=document.querySelector('.iframe_div1');
const div_iframe2=document.querySelector('.iframe_div2');
const iframe_page=document.querySelector('#iframe_page');
const iframe=document.querySelector('#iframe');
const icon_appearance=document.querySelector('#icon_appearance');
const icon_steps=document.querySelector('#icon_steps')
const icon_target=document.querySelector('#icon_target');
var position_value=position.value;
var count_page='';
const meno_item=document.querySelectorAll('.meno_item');
var clicke=0; 
var txt="";  
var frame = document.querySelector("#iframe");
const lan_option=document.querySelectorAll('.lan_option');
var steps_open=true;
var Appearance_open=true;
var target_open=true;
var forward_open=true;
const switch_b = document.querySelector('#switch');
const select_devices=document.querySelectorAll('.select_devices');
const desktop2=document.querySelector('#desktop2');
const tablet=document.querySelector('#tablet');
const mobile=document.querySelector('#mobile');
const reset_main=document.querySelector('#reset_main');
function Appearanceclose(Appearance_open,Appearance,div_option,div_iframe1,Appearance_titr,icon_appearance){
    Appearance_open=false;
    Appearance.classList.remove('Appearance_height_max');
    Appearance.classList.add('Appearance_height_min');
    div_option.classList.add('dno');
    div_iframe1.classList.add('dno');
    Appearance_titr.classList.remove('padding');
    Appearance_titr.classList.add('no_padding');
    icon_appearance.classList.add('icon2');
    icon_appearance.classList.remove('icon3');
    document.querySelector('#circle1').classList.add('fa');
    document.querySelector('#circle1').classList.add('fa-check-circle');
    document.querySelector('#circle1').classList.remove('circle');
    document.querySelector('.number1').innerHTML='';
    document.querySelector('#next').classList.add('vibh');
}
function Appearanceopen(icon_appearance,Appearance,div_option,div_iframe1,Appearance_titr){
    icon_appearance.classList.remove('icon2');
    icon_appearance.classList.add('icon3');
    Appearance.classList.add('Appearance_height_max');
    Appearance.classList.remove('Appearance_height_min');
    div_option.classList.remove('dno');
    div_iframe1.classList.remove('dno');
    Appearance_titr.classList.add('padding');
    Appearance_titr.classList.remove('no_padding');
    document.querySelector('#next').classList.remove('vibh');
    document.querySelector('#circle1').classList.remove('fa-check-circle');
    document.querySelector('#circle1').classList.remove('fa');
    document.querySelector('#circle1').classList.add('circle');
    document.querySelector('.number1').innerHTML='1';
}
function stepsclose(steps_open,steps,div_option2,div_iframe2,steps_titr,icon_steps){
    steps_open=false;
    steps.classList.remove('steps_height_max');
    steps.classList.add('steps_height_min');
    div_option2.classList.add('dno');
    div_iframe2.classList.add('dno');
    steps_titr.classList.remove('padding');
    steps_titr.classList.add('padding_5');
    icon_steps.classList.add('icon2');
    icon_steps.classList.remove('icon3');
    document.querySelector('#circle2').classList.add('fa');
    document.querySelector('#circle2').classList.add('fa-check-circle');
    document.querySelector('#circle2').classList.remove('circle');
    document.querySelector('.number2').innerHTML='';
    document.querySelector('#next2').classList.add('vibh');
}
function stepsopen(icon_steps,steps,div_option2,div_iframe2,steps_titr){
    icon_steps.classList.remove('icon2');
    icon_steps.classList.add('icon3');
    steps.classList.add('steps_height_max');
    steps.classList.remove('steps_height_min');
    div_option2.classList.remove('dno');
    div_iframe2.classList.remove('dno');
    steps_titr.classList.add('padding');
    steps_titr.classList.remove('padding_5');
    document.querySelector('#next2').classList.remove('vibh');
    document.querySelector('#circle2').classList.remove('fa-check-circle');
    document.querySelector('#circle2').classList.remove('fa');
    document.querySelector('#circle2').classList.add('circle');
    document.querySelector('.number2').innerHTML='2';
}
function targetclose(target_open,target,target_titr,icon_target){
    target_open=false;
        target.classList.remove('target_height_max');
        target.classList.add('target_height_min');
        target_titr.classList.remove('padding');
        target_titr.classList.add('padding_5');
        document.querySelector('.div_option3').classList.add('dno')
        icon_target.classList.add('icon2');
        icon_target.classList.remove('icon3');
        document.querySelector('#circle3').classList.add('fa');
        document.querySelector('#circle3').classList.add('fa-check-circle');
        document.querySelector('#circle3').classList.remove('circle');
        document.querySelector('.number3').innerHTML='';
        document.querySelector('#next3').classList.add('vibh');
}
function targetopen(target_open,target,icon_target,target_titr){
    target_open=true;
    target.classList.add('target_height_max');
    target.classList.remove('target_height_min');
    document.querySelector('.div_option3').classList.remove('dno')
    icon_target.classList.remove('icon2');
    icon_target.classList.add('icon3');
    target_titr.classList.add('padding');
    target_titr.classList.remove('padding_5');
    document.querySelector('#next3').classList.remove('vibh');
    document.querySelector('#circle3').classList.remove('fa-check-circle');
    document.querySelector('#circle3').classList.remove('fa');
    document.querySelector('#circle3').classList.add('circle');
    document.querySelector('.number3').innerHTML='3';
}
function forwardclose(forward_open,forward,forward_titr,icon_forward){
    forward_open=false;
    forward.classList.remove('forward_height_max');
    forward.classList.add('forward_height_min');
    forward_titr.classList.remove('padding');
    forward_titr.classList.add('padding_5');
    document.querySelector('#email_forward').classList.remove('dbf')
    document.querySelector('#email_forward').classList.add('dno')
    icon_forward.classList.add('icon2');
    icon_forward.classList.remove('icon3');
    document.querySelector('#circle4').classList.add('fa');
    document.querySelector('#circle4').classList.add('fa-check-circle');
    document.querySelector('#circle4').classList.remove('circle');
    document.querySelector('.number4').innerHTML='';
    document.querySelector('#next4').classList.add('vibh');
}
function forwardopen(forward_open,forward,icon_forward,forward_titr){
    forward_open=true;
    forward.classList.add('forward_height_max');
    forward.classList.remove('forward_height_min');
    document.querySelector('#email_forward').classList.remove('dno');
    document.querySelector('#email_forward').classList.add('dbf')
    icon_forward.classList.remove('icon2');
    icon_forward.classList.add('icon3');
    forward_titr.classList.add('padding');
    forward_titr.classList.remove('padding_5');
    document.querySelector('#next4').classList.remove('vibh');
    document.querySelector('#circle4').classList.remove('fa-check-circle');
    document.querySelector('#circle4').classList.remove('fa');
    document.querySelector('#circle4').classList.add('circle');
    document.querySelector('.number4').innerHTML='4';
}
function add_fun(){
    const type_url=document.querySelectorAll('.type_url');
    const txt_url=document.querySelectorAll('.txt_url');
    const empity_error= document.querySelectorAll('#empity_error');
    const div_input=document.querySelectorAll('.div_input');
    const trash=document.querySelectorAll('.trash');
    type_url.forEach(function(value,index){
        
        value.addEventListener('change',function(){
            console.log(type_url);
            v_url=value.value;
            console.log('change');
            if(v_url==1){
                txt_url[index].placeholder ='e.g. http://www.example.com/';
            }
            else if(v_url==2){
                txt_url[index].placeholder='e.g. http://www.example.com/?product=X';
            }
            else if(v_url==3){
                txt_url[index].placeholder='e.g. http://www.example.com/page/';
            }
            else if(v_url==4){
                txt_url[index].placeholder='e.g. /detail';
            }
            else if(v_url==5){
                txt_url[index].placeholder='e.g. register/';
            }
            else if(v_url==6){
                txt_url[index].placeholder='e.g. \/pages\/[^\/]+';
            }

            if( txt_url[index].value==''){
               empity_error[index].innerHTML='This field cannot be left empty.';
                div_input[index].classList.add('border-red');
        }})
    })

    trash.forEach(function(value,index){
        value.addEventListener('click',function(){
            var x = value.parentElement.id;
            value.parentElement.remove();
    })
    })
}
window.addEventListener('load',function(){
    switch_b.checked=false;
    document.querySelector('#target_radio2').checked=false;
    document.querySelector('#target_radio1').checked=false;
    mobile.checked=true;
    desktop2.checked=true;
    tablet.checked=true;
    document.querySelector('#check').checked=false;
    document.querySelector('#address_email').value='';
 
  });
meno_item.forEach(function(value,index){
    value.addEventListener('click',function(){
        meno_item.forEach(function(value2,index2){
            if(index!==index2){
                value2.classList.remove('meno_item_click');
            }
            else{
                value2.classList.add('meno_item_click');
            }
        })
})})
li.forEach(function(value,index){
    value.addEventListener('click',function(){
     txt=value.textContent;
       reactions.innerHTML=txt;
    })
})
position.addEventListener('click',function(){
    position_value=position.value;
})

hex.innerHTML=input.value;
input.addEventListener('input',function(){
    hex.innerHTML=input.value;
   
}); 
reactions.addEventListener('click',function(e1){
  
    if(ul_reactions.classList.contains("dno")===true){
         ul_reactions.classList.remove('dno');
    }
    else{
        ul_reactions.classList.add('dno');
    }
    clicke =1;
    if(clicke===1){
        all.forEach(function(value,index){
            value.addEventListener('click',function(e){
            
           
           if(e.target.classList.contains('button_reactions')===false){
                    ul_reactions.classList.add('dno');
           }
                
        })
    })}  })
li.forEach(function(value,index){
    value.addEventListener('mouseover',function(){
        value.classList.add('style-li');
    })
    
})
li.forEach(function(value,index){
    value.addEventListener('mouseout',function(){
        value.classList.remove('style-li');
    })
    
})

lan_option.forEach(function(value,index){
    value.addEventListener('click',function(){

        value.classList.add('border_blue');
        lan_option.forEach(function(value1,index1){
            if(index !== index1){
                value1.classList.remove('border_blue');
            }
        })
    })
})
Appearance_titr.addEventListener('click',function(){
    div_option.classList.remove('dno');
    div_option2.classList.add('dno');
    div_option3.classList.add('dno');
    div_option4.classList.add('dno');
    iframe_page.classList.remove('iframe_div2');
    iframe_page.classList.add('iframe_div1');
    iframe.classList.remove('iframe2');
    iframe.classList.add('iframe1');
    iframe_page.classList.remove('dno');
    reset_main.classList.add('div_reset1');
    reset_main.classList.remove('div_reset2');
})
 
steps_titr.addEventListener('click',function(){
    div_option.classList.add('dno');
    div_option2.classList.remove('dno');
    div_option3.classList.add('dno')
    div_option4.classList.add('dno');
    iframe_page.classList.add('iframe_div2');
    iframe_page.classList.remove('iframe_div1');
    iframe.classList.add('iframe2');
    iframe.classList.remove('iframe1');
    iframe_page.classList.remove('dno');
    reset_main.classList.remove('div_reset1');
    reset_main.classList.add('div_reset2');
    
})
const confirmation=document.querySelector('#confirmation');
const confirmation_steps=document.querySelector('#confirmation_steps');
reset_main.addEventListener('click',function(){
    confirmation.classList.add('confirmation2');
    confirmation.classList.remove('confirmation1');
    if(reset_main.classList.contains('div_reset2')==true){
        confirmation.classList.add('steps_left');
    }
    else{
        confirmation.classList.remove('steps_left');
        reactions.innerHTML='Noroweb Buddies';
    }
    
    document.querySelector('#check').checked=false;
    setTimeout(function(){ 
        confirmation.classList.remove('confirmation2');
        confirmation.classList.add('confirmation1');
         }, 2000);
})
reset_main.addEventListener('mouseover',function(){
    document.querySelector('#tooltip_reset').classList.remove('vibh');
})
reset_main.addEventListener('mouseout',function(){
    document.querySelector('#tooltip_reset').classList.add('vibh');
})
// document.querySelector('#div_reset2').addEventListener('click',function(){
//     confirmation_steps.classList.add('confirmation2');
//     confirmation_steps.classList.remove('confirmation1');
//     setTimeout(function(){ 
//         confirmation_steps.classList.remove('confirmation2');
//         confirmation_steps.classList.add('confirmation1');
//          }, 2000);
// })
// document.querySelector("#div_reset2").addEventListener('mouseover',function(){
//     document.querySelector('#tooltip_reset2').classList.remove('vibh');
// })
// document.querySelector("#div_reset2").addEventListener('mouseout',function(){
//     document.querySelector('#tooltip_reset2').classList.add('vibh');
// })
// target
target_titr.addEventListener('click',function(){
    div_option.classList.add('dno');
    div_option2.classList.add('dno');
    div_option3.classList.remove('dno')
    div_option4.classList.add('dno');
    iframe_page.classList.add('dno');
    
})
select_devices.forEach(function(value,index){
    value.addEventListener('click',function(){
        if(mobile.checked==false & desktop2.checked==false & tablet.checked==false){
            document.querySelector('.no_checkbox').classList.remove('dno');
        }
        else{
            document.querySelector('.no_checkbox').classList.add('dno');
        }
})
})
const type_page=document.querySelectorAll('.page');
type_page.forEach(function( value,index){
    value.addEventListener('click',function(){
        if(document.querySelector('#target_radio2').checked==true){
            count_page='not_all';
            document.querySelector('#select_specifal_pages').classList.remove('dno');
        }

        else{
            count_page='all';
            document.querySelectorAll('.remove').forEach(function(v,i){
                v.remove();
            })
            document.querySelector('#select_specifal_pages').classList.add('dno');
            

        }  
 })
})

add_fun();
const add_bottom=document.querySelector('#add');
var i=0;


add_bottom.addEventListener('click',function(){
    i=i+1;
    const str=`
    <div class='remove'>
        <select class="url type_url">
        <option value="1">Simple URL match</option>
        <option value="2">Exact URL match</option>
        <option value="3">URL starts with</option>
        <option value="4">URL ends with</option>
        <option value="5">URL contains</option>
        <option value="6">URL regular expression</option>
    </select>
    <div class="div_input">
        <input class="url txt_url"  type="text">
        <span style="color: red;" class="fa fa-exclamation-circle"></span>
    </div>
    <svg class="trash" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 458.5 458.5" style="enable-background:new 0 0 458.5 458.5;" xml:space="preserve">
            <g>
              <g>
                <g>
                  <path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421     c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508     c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z      M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501     c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778     c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657     c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z"/>
                  <path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705     C214.249,385.607,220.965,392.323,229.249,392.323z"/>
                  <path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705     C291.671,385.607,298.387,392.323,306.671,392.323z"/>
                  <path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705     C136.828,385.607,143.544,392.323,151.828,392.323z"/>
                </g>
              </g>
            </g>
            </svg>
        <p id="empity_error"></p>
    </div>`;
    document.querySelector('.add_box').innerHTML+=str;
    add_fun();
})

// forward
const forward_titr=document.querySelector('#forward_titr');
const forward=document.querySelector('#forward');
const icon_forward=document.querySelector('#icon_forward')
forward_titr.addEventListener('click',function(){
    div_option.classList.add('dno');
    div_option2.classList.add('dno');
    div_option3.classList.add('dno')
    div_option4.classList.remove('dno');
    iframe_page.classList.add('dno');
       
})
const element=document.querySelector('#lable_s');
switch_b.addEventListener('click',function(){
    if(switch_b.checked==true){
        document.querySelector('#give_email').classList.remove('dno'); 
    }
    else{
        document.querySelector('#give_email').classList.add('dno');
        document.querySelector('#address_email').value='';
    }
})

