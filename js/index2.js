const show_feedback = document.querySelector("#show_feedback");
const feedback_content = document.querySelector(".feedback_content");
const close_feedback = document.querySelector("#close_feedback");
const question = document.querySelector("#question");
const text = document.querySelector(".textarea");
const fa = document.querySelector('.fa-mouse-pointer');
const send = document.querySelector('.send');
const fix = document.querySelector('.fixed_left');
const border = document.querySelectorAll('.show');
const emoje = document.querySelectorAll(".emoje");
const text_emoje = document.querySelectorAll(".text");
const tooltip = document.querySelector('.text_tooltip');
const close_select = document.querySelector('#close');
const select2 = parent.document.querySelector('#position');
const radio = parent.document.querySelectorAll(".alternate_color");
const feedback = document.querySelector('.feedback');
const text_tooltip_bottom = document.querySelector('.text_tooltip_bottom');
const close_tooltip = document.querySelector('#close_tooltip');
const desktop = parent.document.querySelector('#desktop');
const phone = parent.document.querySelector('#phone');
const desktop_steps = parent.document.querySelector('#desktop_steps');
const phone_steps = parent.document.querySelector('#phone_steps');
const iframe = parent.document.querySelector('#iframe');
const bold = parent.document.querySelector('.fa-bold');
const italic = parent.document.querySelector('.fa-italic');
const textx = parent.document.querySelector('.fa-text-width');
const paperclip = parent.document.querySelector('.fa-paperclip');
const fastrikethrough = parent.document.querySelector('.fa-strikethrough');
let show_feedback_click = false;
const tooltip_thank = document.querySelector('.tooltiptext');
const text_thank = document.querySelector('.text_thank');
const reset_main = parent.document.querySelector('#reset_main');
const Appearance_titr = parent.document.querySelector('#Appearance_titr');
const steps_titr = parent.document.querySelector('#steps_titr');
const div_option = parent.document.querySelector('.div_option');
const txt_footer = document.querySelector('#txt_footer');
const textarea_footer = parent.document.querySelector('#footer');
const lan_select = parent.document.querySelector('#lan_select');
const accent_color = parent.document.querySelector('#input');
let position_feed = 0;
var emoje_select = 0;
var click = 0;
var select = 0;
var close_border = 0;
var fa_click = 0;
var kind_emj = 1;
let hide = false;
// var over=0;
var bottom_right_click = 0;
var bottom_left_click = 0;
var alternate_color = 'light';

const textarea_steps = parent.document.querySelector('#textarea_steps');
const textarea_email = parent.document.querySelector('#textarea_email');
const textarea_thank = parent.document.querySelector('#textarea_thank');
const type_emoje = parent.document.querySelectorAll('.li');
var phone_click = false;
let arr = []
const noro = document.querySelector('.noro');
parent.document.querySelector('#Creation').addEventListener('click', function() {
    parent.document.querySelectorAll('.txt_url').forEach(function(v, i) {
        arr[i] = v.value;
    })
    email_forward = parent.document.querySelector('.txt_url2').value;
    let mobile_version = parent.mobile.checked;
    let tablet_version = parent.tablet.checked;
    let desktop_version = parent.desktop2.checked;
    const myjson = {
        language: lan_select.value,
        position: position_feed,
        reactions: kind_emj,
        color: accent_color.value,
        alternate_color: alternate_color,
        hide: hide,
        question: question.innerHTML,
        txt_footer: txt_footer.innerHTML,
        text_thank: text_thank.innerHTML,
        textarea_email: textarea_email.value,
        mobile_version: mobile_version,
        tablet_version: tablet_version,
        desktop_version: desktop_version,
        count_page: parent.count_page,
        arr,
        email_forward: email_forward
    };
    console.log(JSON.stringify(myjson));

})

parent.window.addEventListener('load', function() {
    position_feed = 0;
    hide = false;
    alternate_color = 'light';
    question.innerHTML = "How would you rate your experience?";
    positionn();
    show_feedback.style.backgroundColor = '#f4364c';
    feedback.classList.add('color_light');
    feedback.classList.remove('color_dark');
    close_feedback.classList.add('color_light');
    close_feedback.classList.remove('color_dark');
    accent_color.value = '#f4364c';
    parent.document.querySelector('#hex').innerHTML = '#f4364c';
    this.document.querySelector('#checkbox2').checked = false;
    select2.value = '0';
    phone_click = false;
    noro.classList.remove('vibh');
    txt_footer.innerHTML = '';
    textarea_footer.value = '';
    lan_select.value = 'English';
    radio.forEach(function(value, index) {
        if (value.value == 'dark' & value.checked == true) {
            value.checked = false;
            radio[0].checked = true;
        }

    })
    textarea_steps.value = 'How would you rate your experience?';
    textarea_email.value = 'We may wish to follow up. Enter your email if you are happy for us to contact you.';
    textarea_thank.value = 'Thank you for sharing your feedback with us!';
    this.document.querySelector('.include').checked = true;
    desktop.classList.add('select_show');
    phone.classList.remove('select_show');
})

function feedback_open_min() {
    show_feedback_click = true;
    noro.classList.remove('vibh');
    document.querySelector('#email').classList.add('dno');
    document.querySelector('#email').classList.remove('dbl');
    question.innerHTML = textarea_steps.value;
    // close_feedback1();
    feedback_content.classList.add('right_feedback');
    feedback_content.classList.add('dbl');
    feedback_content.classList.remove('dno');
    show_feedback.classList.remove('dbl');
    show_feedback.classList.add('dno');
    emoje.forEach(function(value, index) {
        value.classList.add('pr' + index);
    })
}

function feedback_open_max() {
    textarea_footer.classList.remove('dno');
    emoje_select = 1;
    txt_footer.classList.remove('dno');
    feedback_content.classList.remove('height_min');
    feedback_content.classList.add('height_max');
    text.classList.remove('dno');
    text.classList.add('dbl');
    text.style.height = '100px';
    fa.classList.remove('dno');
    fa.classList.add('fa');
    question.classList.remove("dbl");
    question.classList.add("dno");
    send.classList.remove('vibh');
    send.classList.add('vib');
    if (position_feed == 1 | position_feed == 0) {
        txt_footer.classList.remove('footer_bottom');
        txt_footer.classList.add('footer_top');
        noro.classList.remove('noro_bottom');
        noro.classList.add('noro_top');
    }
    if (position_feed == 2) {
        txt_footer.classList.add('footer_bottom');
        txt_footer.classList.remove('footer_top');
        noro.classList.add('noro_bottom');
        noro.classList.remove('noro_top');
        fix.classList.remove('bottom_right_click');
        fix.classList.remove('bottom_right');
        fix.classList.add('emoje_click_right');
    }
    if (position_feed == 3) {
        txt_footer.classList.add('footer_bottom');
        txt_footer.classList.remove('footer_top');
        noro.classList.add('noro_bottom');
        noro.classList.remove('noro_top');
        fix.classList.remove('bottom_left_click');
        fix.classList.remove('bottom_left');
        fix.classList.add('emoje_click_left');
    }
    emoje.forEach(function(value2, index2) {
        if (index2 !== index) {
            value2.classList.remove("opacity_full");
            value2.classList.add('opacity_low');
            text_emoje[index2].classList.remove('vib');
            text_emoje[index2].classList.add('vibh');
            text_emoje[index2].classList.remove('pr1' + index2);

        } else {
            click = index2;
            text_emoje[index2].classList.add('pr1' + index2);
            text_emoje[index2].classList.remove('vibh');
            value2.classList.remove("opacity");
            value2.classList.remove('opacity_low');
            value2.classList.add("opacity_full");

        }
    })
    document.querySelector('#email').classList.add('dno');
    document.querySelector('#email').classList.remove('dbl');
}

function positionn() {

    if (position_feed == 0) {
        if (show_feedback_click == false) {
            feedback_content.classList.remove('anymation_right');
            feedback_content.classList.remove('anymation_left');
            feedback_content.classList.remove('left_feedback');
            feedback_content.classList.remove('right_feedback');
            feedback.style.removeProperty('background-color');
            show_feedback.style.backgroundColor = accent_color.value;

        } else {
            feedback_content.classList.add('anymation_right');
            feedback_content.classList.remove('anymation_left');
            feedback_content.classList.add('right_feedback');
            feedback_content.classList.remove('left_feedback');
            show_feedback.classList.add('dno');
            show_feedback.classList.remove('dbl');
            feedback.style.removeProperty('background-color');

        }
        txt_footer.classList.remove('footer_bottom');
        txt_footer.classList.add('footer_top');
        noro.classList.remove('noro_bottom');
        noro.classList.add('noro_top');
        feedback.classList.add('transform');
        feedback.innerHTML = 'feedback';
        fix.classList.remove('left');
        fix.classList.remove('bottom_right');
        fix.classList.add('right');
        show_feedback.classList.remove('bottom_style');
        show_feedback.classList.add('left_right_style');
        text_tooltip_bottom.classList.remove('vib');
        text_tooltip_bottom.classList.add('vibh');
        feedback.classList.remove('bottom_right_close');
        fix.classList.remove('bottom_right_click');
        fix.classList.remove('emoje_click_right');
        fix.classList.remove('emoje_click_left');
        fix.classList.remove('bottom_left');
        fix.classList.remove('bottom_left_click');
        feedback.classList.remove('bottom_left_close');
        feedback.classList.remove('feedback_left');
        feedback.classList.add('feedback_right');
    }
    if (position_feed == 1) {
        if (show_feedback_click == false) {
            feedback_content.classList.remove('anymation_right');
            feedback_content.classList.remove('anymation_left');
            feedback_content.classList.remove('left_feedback');
            feedback_content.classList.remove('right_feedback');
            feedback.style.removeProperty('background-color');
            show_feedback.style.backgroundColor = accent_color.value;
        } else {
            feedback_content.classList.add('anymation_left');
            feedback_content.classList.remove('anymation_right');
            feedback_content.classList.remove('right_feedback');
            feedback_content.classList.add('left_feedback');
            show_feedback.classList.add('dno');
            show_feedback.classList.remove('dbl');
            feedback.style.removeProperty('background-color');
        }
        txt_footer.classList.remove('footer_bottom');
        txt_footer.classList.add('footer_top');
        noro.classList.remove('noro_bottom');
        noro.classList.add('noro_top');
        feedback.classList.add('transform');
        fix.classList.remove('right');
        fix.classList.remove('bottom_right');
        fix.classList.remove('bottom_left');
        fix.classList.remove('bottom_left_click');
        feedback.classList.remove('bottom_left_close');
        fix.classList.add('left');
        fix.classList.remove('bottom_right_click');
        show_feedback.classList.remove('bottom_style');
        show_feedback.classList.add('left_right_style');
        text_tooltip_bottom.classList.remove('vib');
        text_tooltip_bottom.classList.add('vibh');
        text_tooltip_bottom.classList.remove('text_tooltip_left');
        text_tooltip_bottom.classList.remove('text_tooltip_right');
        fix.classList.remove('emoje_click_right');
        fix.classList.remove('emoje_click_left');
        feedback.innerHTML = 'feedback';
        feedback.classList.remove('bottom_right_close');
        feedback.classList.remove('feedback_left');
        feedback.classList.add('feedback_right');

    }
    if (position_feed == 2) {

        if (show_feedback_click == false) {
            feedback.innerHTML = '&#128515;';
            text_tooltip_bottom.classList.remove('vibh');
            text_tooltip_bottom.classList.add('vib');
            text_tooltip_bottom.classList.remove('text_tooltip_left');
            text_tooltip_bottom.classList.add('text_tooltip_right');
            fix.classList.add('bottom_right');
        } else {
            fix.classList.add('bottom_right_click');
            text_tooltip_bottom.classList.remove('vib');
            text_tooltip_bottom.classList.add('vibh');
            text_tooltip_bottom.classList.remove('text_tooltip_left');
            text_tooltip_bottom.classList.remove('text_tooltip_right');
            fix.classList.remove('bottom_right');
            feedback.classList.add('bottom_right_close');
            feedback.innerHTML = '&times';
            show_feedback.classList.remove('dno');
            show_feedback.classList.add('dbl');
            fix.classList.remove('emoje_click_left');
            bottom_right_click = 1;
            feedback.style.backgroundColor = accent_color.value;
            if (emoje_select == 1) {
                fix.classList.add('emoje_click_right');
                fix.classList.remove('bottom_right_click');
            } else {
                fix.classList.remove('emoje_click_right');
                fix.classList.add('bottom_right_click');
            }
        }
        txt_footer.classList.add('footer_bottom');
        txt_footer.classList.remove('footer_top');
        noro.classList.add('noro_bottom');
        noro.classList.remove('noro_top');
        fix.classList.remove('bottom_left');
        fix.classList.remove('bottom_left_click');
        feedback.classList.remove('bottom_left_close');
        show_feedback.style.removeProperty('background-color');
        fix.classList.remove('right');
        fix.classList.remove('left');
        feedback_content.classList.remove('anymation_left');
        feedback_content.classList.remove('anymation_right');
        feedback_content.classList.remove('right_feedback');
        feedback_content.classList.remove('left_feedback');
        show_feedback.classList.add('bottom_style');
        show_feedback.classList.remove('left_right_style');
        feedback.classList.remove('transform');
        feedback.classList.remove('feedback_left');
        feedback.classList.add('feedback_right')
    }
    if (position_feed == 3) {

        if (show_feedback_click == false) {
            feedback.innerHTML = '&#128515;';
            text_tooltip_bottom.classList.remove('vibh');
            text_tooltip_bottom.classList.add('vib');
            text_tooltip_bottom.classList.add('text_tooltip_left');
            text_tooltip_bottom.classList.remove('text_tooltip_right');
            fix.classList.add('bottom_left');
            fix.classList.remove('bottom_right');
        } else {
            fix.classList.add('bottom_left_click');
            text_tooltip_bottom.classList.remove('vib');
            text_tooltip_bottom.classList.add('vibh');
            text_tooltip_bottom.classList.remove('text_tooltip_left');
            text_tooltip_bottom.classList.remove('text_tooltip_right');
            fix.classList.remove('bottom_left');
            feedback.classList.add('bottom_left_close');
            feedback.innerHTML = '&times';
            show_feedback.classList.remove('dno');
            show_feedback.classList.add('dbl')
            fix.classList.remove('emoje_click_right');
            bottom_left_click = 1;
            feedback.style.backgroundColor = accent_color.value;

            if (emoje_select == 1) {
                fix.classList.add('emoje_click_left');
                fix.classList.remove('bottom_left_click');
            } else {
                fix.classList.remove('emoje_click_left');
                fix.classList.add('bottom_left_click');
            }
        }
        noro.classList.add('noro_bottom');
        noro.classList.remove('noro_top');
        txt_footer.classList.add('footer_bottom');
        txt_footer.classList.remove('footer_top');
        feedback.classList.add('feedback_left');
        feedback.classList.remove('feedback_right')
        show_feedback.style.removeProperty('background-color');
        fix.classList.remove('right');
        fix.classList.remove('left');
        feedback_content.classList.remove('anymation_left');
        feedback_content.classList.remove('anymation_right');
        feedback_content.classList.remove('right_feedback');
        feedback_content.classList.remove('left_feedback');
        show_feedback.classList.add('bottom_style');
        show_feedback.classList.remove('left_right_style');
        feedback.classList.remove('transform');
        fix.classList.remove('bottom_right_click');
        fix.classList.remove('bottom_right');
        fix.classList.remove('bottom_right_click');
        feedback.classList.remove('bottom_right_close');
    }
}

console.log(parent.mobile.checked);
const button_reactions = document.querySelector('.button_reactions');
type_emoje.forEach(function(value, index) {
    value.addEventListener('click', function() {
        kind_emj = value.value;
        if (kind_emj == '1') {
            document.querySelector('.e1').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
                <g id="angry" transform="translate(-348.019 -184.357)">
                <path id="Path_38" data-name="Path 38" d="M349.442,219.128c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.714,34.458-46.565,34.333C365.116,253.335,349.158,245.892,349.442,219.128Z" fill="#ef7a87" fill-rule="evenodd"/>
                <path id="Path_39" data-name="Path 39" d="M349.442,219.127c.015-1.427.078-2.794.184-4.109,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.106,1.319.17,2.69.186,4.122.292,27.434-16.715,34.458-46.566,34.334C365.116,253.335,349.158,245.893,349.442,219.127Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
                <path id="Path_40" data-name="Path 40" d="M348.023,219.117c.147-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.642,6.925c8.172,5.282,12.5,13.991,12.646,27.835.152,14.26-4.252,23.255-12.624,28.7-8.211,5.341-20.175,7.124-35.366,7.06-15.02-.064-26.638-2.021-34.54-7.421-8.051-5.5-12.181-14.432-12.034-28.341Zm14.185-25.466c-7.328,4.735-11.212,12.7-11.348,25.488-.136,12.855,3.571,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.605,33.808-6.6,7.521-4.892,11.474-13.127,11.334-26.3-.136-12.776-4.017-20.741-11.344-25.477-7.485-4.838-18.638-6.465-33.107-6.468C380.849,187.189,369.7,188.81,362.208,193.651Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_41" data-name="Path 41" d="M383.237,223.551a1.42,1.42,0,0,1-2.147-1.858,18.055,18.055,0,0,1,1.869-1.872,19.148,19.148,0,0,1,24.681,0l0,0a18.077,18.077,0,0,1,1.876,1.878,1.419,1.419,0,0,1-2.146,1.858,15.162,15.162,0,0,0-1.587-1.578v-.006a16.309,16.309,0,0,0-20.97,0A15.238,15.238,0,0,0,383.237,223.551Z" fill="#1a1818" fill-rule="evenodd"/>
                <g id="Group_10" data-name="Group 10">
                    <path id="Path_42" data-name="Path 42" d="M371.558,213.838a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,371.558,213.838Z" fill="#1a1818" fill-rule="evenodd"/>
                    <path id="Path_43" data-name="Path 43" d="M370.963,207.222a2,2,0,1,0-2-2A2,2,0,0,0,370.963,207.222Z" fill="#fff" fill-rule="evenodd"/>
                    <path id="Path_44" data-name="Path 44" d="M368.865,210.541a1.241,1.241,0,1,0-1.24-1.24A1.242,1.242,0,0,0,368.865,210.541Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                <g id="Group_11" data-name="Group 11">
                    <path id="Path_45" data-name="Path 45" d="M419.049,213.838a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,419.049,213.838Z" fill="#1a1818" fill-rule="evenodd"/>
                    <path id="Path_46" data-name="Path 46" d="M418.455,207.222a2,2,0,1,0-2-2A2,2,0,0,0,418.455,207.222Z" fill="#fff" fill-rule="evenodd"/>
                    <path id="Path_47" data-name="Path 47" d="M416.356,210.541a1.241,1.241,0,1,0-1.24-1.24A1.243,1.243,0,0,0,416.356,210.541Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                <path id="Path_48" data-name="Path 48" d="M374.588,220.233l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.753,5.753,0,0,1,7.927-.459,5.439,5.439,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
                <path id="Path_49" data-name="Path 49" d="M422.078,220.234H416.02a1.68,1.68,0,0,1-1.163-2.893,5.581,5.581,0,0,1,.462-.449,5.77,5.77,0,0,1,7.458,0,5.474,5.474,0,0,1,.567.56,1.678,1.678,0,0,1-1.266,2.781Z" fill="#eb505e" fill-rule="evenodd"/>
                <path id="Path_50" data-name="Path 50" d="M365.607,200.614a1.421,1.421,0,0,1,1.28-2.537l13.965,7.075a1.421,1.421,0,0,1-1.279,2.537Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_51" data-name="Path 51" d="M423.724,198.077A1.421,1.421,0,0,1,425,200.614l-13.965,7.075a1.421,1.421,0,0,1-1.279-2.537Z" fill="#1a1818" fill-rule="evenodd"/>
                </g>
            </svg>
            `;
            document.querySelector('.e2').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
            <g id="sad" transform="translate(-205.409 -53.014)">
                <path id="Path_14" data-name="Path 14" d="M206.832,87.785c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.715,34.458-46.565,34.333C222.506,121.992,206.548,114.549,206.832,87.785Z" fill="#b9e2f8" fill-rule="evenodd"/>
                <path id="Path_15" data-name="Path 15" d="M206.832,87.785c.015-1.428.078-2.8.184-4.11,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.106,1.319.17,2.69.185,4.123.293,27.433-16.714,34.458-46.565,34.333C222.506,121.992,206.548,114.55,206.832,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
                <path id="Path_16" data-name="Path 16" d="M205.413,87.774c.148-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.643,6.925c8.171,5.282,12.5,13.991,12.645,27.835.152,14.26-4.252,23.255-12.624,28.7-8.211,5.341-20.176,7.124-35.366,7.06-15.021-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.181-14.431-12.034-28.34ZM219.6,62.308c-7.328,4.735-11.212,12.7-11.348,25.488-.136,12.855,3.571,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.606,33.808-6.6,7.52-4.893,11.474-13.128,11.334-26.3C297,75.02,293.123,67.056,285.8,62.319c-7.485-4.838-18.638-6.464-33.107-6.469C238.239,55.846,227.089,57.467,219.6,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_17" data-name="Path 17" d="M240.627,92.208a1.419,1.419,0,0,1-2.147-1.857,17.965,17.965,0,0,1,1.869-1.873,19.154,19.154,0,0,1,24.684,0,18.133,18.133,0,0,1,1.876,1.874,1.419,1.419,0,0,1-2.146,1.857,15.317,15.317,0,0,0-1.588-1.584,16.308,16.308,0,0,0-20.969,0A15.239,15.239,0,0,0,240.627,92.208Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_18" data-name="Path 18" d="M228.951,82.24a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,228.951,82.24Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_19" data-name="Path 19" d="M228.356,75.624a2,2,0,1,0-2-2A2,2,0,0,0,228.356,75.624Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_20" data-name="Path 20" d="M226.258,78.943a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,226.258,78.943Z" fill="#fff" fill-rule="evenodd"/>
                <g id="Group_5" data-name="Group 5">
                <path id="Path_21" data-name="Path 21" d="M276.439,82.24a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,276.439,82.24Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_22" data-name="Path 22" d="M275.845,75.624a2,2,0,1,0-2-2A2,2,0,0,0,275.845,75.624Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_23" data-name="Path 23" d="M273.747,78.943a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,273.747,78.943Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                <path id="Path_24" data-name="Path 24" d="M231.978,88.89l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.51,5.51,0,0,1,.471-.459,5.767,5.767,0,0,1,7.456,0,5.536,5.536,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
                <path id="Path_25" data-name="Path 25" d="M279.468,88.892H273.41A1.68,1.68,0,0,1,272.247,86a5.581,5.581,0,0,1,.462-.449,5.77,5.77,0,0,1,7.458,0,5.471,5.471,0,0,1,.567.56,1.68,1.68,0,0,1-1.266,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
                <path id="Path_26" data-name="Path 26" d="M228.95,82.738c2.345,0,4.258-.717,4.258-1.6s-1.913-1.6-4.258-1.6-4.258.717-4.258,1.6S226.6,82.738,228.95,82.738Z" fill="#00a1ed" fill-rule="evenodd"/>
                <path id="Path_27" data-name="Path 27" d="M276.439,82.738c2.345,0,4.258-.717,4.258-1.6s-1.913-1.6-4.258-1.6-4.259.717-4.259,1.6S274.093,82.738,276.439,82.738Z" fill="#00a1ed" fill-rule="evenodd"/>
            </g>
            </svg>
            `;
            document.querySelector('.e3').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.56 94.56" xmlns="http://www.w3.org/2000/svg">
            <g id="embarrassed" transform="translate(-62.806 -315.87)">
            <path id="Path_176" data-name="Path 176" d="M64.228,350.637c.283-26.645,16.424-33.358,45.851-33.349,29.455.009,45.58,6.732,45.864,33.349.293,27.431-16.712,34.454-46.56,34.329C79.9,384.84,63.943,377.4,64.228,350.637Z" fill="#ecc3dc" fill-rule="evenodd"/>
            <path id="Path_177" data-name="Path 177" d="M64.228,350.637c.015-1.427.078-2.794.184-4.109,1.853,22.4,17.568,28.837,44.971,28.954,27.8.115,44.455-5.971,46.375-28.967.107,1.319.17,2.69.186,4.122.292,27.431-16.713,34.454-46.561,34.33C79.9,384.841,63.944,377.4,64.228,350.637Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_178" data-name="Path 178" d="M62.81,350.626c.147-13.86,4.476-22.574,12.647-27.855,8.007-5.174,19.644-6.9,34.622-6.9s26.627,1.745,34.639,6.924c8.171,5.282,12.5,13.989,12.644,27.832.152,14.259-4.252,23.253-12.623,28.7-8.209,5.341-20.173,7.123-35.361,7.06-15.019-.065-26.635-2.021-34.536-7.421-8.05-5.5-12.18-14.43-12.032-28.338Zm14.182-25.463c-7.327,4.735-11.211,12.7-11.346,25.485-.137,12.854,3.57,21.028,10.8,25.969,7.377,5.041,18.482,6.87,32.946,6.931,14.658.062,26.121-1.606,33.8-6.6,7.519-4.892,11.473-13.126,11.332-26.3-.136-12.774-4.016-20.738-11.342-25.473-7.485-4.838-18.637-6.464-33.1-6.469C95.631,318.7,84.483,320.322,76.992,325.163Z" fill="#1a1818" fill-rule="evenodd"/>
            <g id="Group_46" data-name="Group 46">
                <path id="Path_179" data-name="Path 179" d="M86.341,345.348a6.225,6.225,0,1,0-6.225-6.225A6.237,6.237,0,0,0,86.341,345.348Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_180" data-name="Path 180" d="M85.747,338.733a2,2,0,1,0-2-2A2,2,0,0,0,85.747,338.733Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_181" data-name="Path 181" d="M83.649,342.052a1.24,1.24,0,1,0-1.241-1.241A1.243,1.243,0,0,0,83.649,342.052Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_47" data-name="Group 47">
                <path id="Path_182" data-name="Path 182" d="M133.827,345.348a6.225,6.225,0,1,0-6.225-6.225A6.237,6.237,0,0,0,133.827,345.348Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_183" data-name="Path 183" d="M133.233,338.733a2,2,0,1,0-2-2A2,2,0,0,0,133.233,338.733Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_184" data-name="Path 184" d="M131.135,342.052a1.24,1.24,0,1,0-1.241-1.241A1.243,1.243,0,0,0,131.135,342.052Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <path id="Path_185" data-name="Path 185" d="M91.736,355.68l-10.782,0a2.99,2.99,0,0,1-2.085-5.134,9.944,9.944,0,0,1,.839-.817,10.262,10.262,0,0,1,13.271,0,9.843,9.843,0,0,1,1.012,1.01,2.988,2.988,0,0,1-2.255,4.937Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_186" data-name="Path 186" d="M81.89,330.3a1.419,1.419,0,1,1-2.146-1.856,8.322,8.322,0,0,1,.869-.872,8.879,8.879,0,0,1,11.451,0,8.267,8.267,0,0,1,.879.877A1.419,1.419,0,0,1,90.8,330.3a5.61,5.61,0,0,0-.578-.576l-.006-.006a6.033,6.033,0,0,0-7.743,0A5.592,5.592,0,0,0,81.89,330.3Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_187" data-name="Path 187" d="M129.372,330.3a1.418,1.418,0,1,1-2.145-1.856,8.324,8.324,0,0,1,.869-.872,8.879,8.879,0,0,1,11.457,0,8.357,8.357,0,0,1,.873.872,1.419,1.419,0,0,1-2.146,1.856,5.527,5.527,0,0,0-.584-.582,6.033,6.033,0,0,0-7.743,0A5.6,5.6,0,0,0,129.372,330.3Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_188" data-name="Path 188" d="M102.144,356.919c-.476,0-.862-.633-.862-1.413s.386-1.413.862-1.413h15.882c.476,0,.862.633.862,1.413s-.386,1.413-.862,1.413Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_189" data-name="Path 189" d="M139.22,355.68l-10.781,0a2.991,2.991,0,0,1-2.086-5.134,10.238,10.238,0,0,1,14.11-.817,9.647,9.647,0,0,1,1.012,1.01,2.982,2.982,0,0,1-.3,4.2A3.014,3.014,0,0,1,139.22,355.68Z" fill="#eb505e" fill-rule="evenodd"/>
            </g>
             </svg>
             `;
            document.querySelector('.e4').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
            <g id="happy" transform="translate(-62.8 -53.014)">
            <path id="Path_1" data-name="Path 1" d="M64.223,87.785c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.715,34.458-46.566,34.333C79.9,121.992,63.938,114.549,64.223,87.785Z" fill="#a4d4b2" fill-rule="evenodd"/>
            <path id="Path_2" data-name="Path 2" d="M64.223,87.785c.015-1.428.078-2.8.184-4.11,1.853,22.4,17.569,28.84,44.977,28.957,27.8.116,44.46-5.971,46.379-28.97.107,1.319.171,2.69.186,4.123.292,27.433-16.714,34.458-46.565,34.333C79.9,121.992,63.939,114.55,64.223,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_3" data-name="Path 3" d="M62.8,87.774c.147-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.642,6.925c8.172,5.282,12.5,13.991,12.646,27.835.152,14.26-4.252,23.255-12.625,28.7-8.21,5.341-20.175,7.124-35.365,7.06-15.021-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.182-14.431-12.034-28.34ZM76.988,62.308C69.661,67.043,65.776,75.01,65.641,87.8c-.137,12.855,3.57,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.606,33.808-6.6,7.52-4.893,11.474-13.128,11.334-26.3-.137-12.776-4.017-20.74-11.344-25.477-7.485-4.838-18.638-6.464-33.107-6.469C95.63,55.846,84.48,57.467,76.988,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_4" data-name="Path 4" d="M95.871,86.318a1.419,1.419,0,1,1,2.146-1.857,15.345,15.345,0,0,0,1.58,1.584,16.308,16.308,0,0,0,20.969,0,15.318,15.318,0,0,0,1.588-1.584,1.419,1.419,0,1,1,2.146,1.857,17.937,17.937,0,0,1-1.877,1.873,19.151,19.151,0,0,1-24.683,0A17.964,17.964,0,0,1,95.871,86.318Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_5" data-name="Path 5" d="M89.369,88.893l-6.057,0a1.68,1.68,0,0,1-1.172-2.884,5.753,5.753,0,0,1,7.928-.46,5.537,5.537,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_6" data-name="Path 6" d="M136.858,88.895H130.8A1.68,1.68,0,0,1,129.638,86a5.438,5.438,0,0,1,.462-.45,5.77,5.77,0,0,1,7.458,0,5.575,5.575,0,0,1,.567.56,1.68,1.68,0,0,1-1.267,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
            <g id="Group_1" data-name="Group 1">
            <path id="Path_7" data-name="Path 7" d="M86.342,82.325A6.226,6.226,0,1,0,80.116,76.1,6.237,6.237,0,0,0,86.342,82.325Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_8" data-name="Path 8" d="M85.747,75.709a2,2,0,1,0-2-2A2,2,0,0,0,85.747,75.709Z" fill="#fff" fill-rule="evenodd"/>
            <path id="Path_9" data-name="Path 9" d="M83.649,79.028a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,83.649,79.028Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_2" data-name="Group 2">
            <path id="Path_10" data-name="Path 10" d="M133.83,82.325A6.226,6.226,0,1,0,127.6,76.1,6.238,6.238,0,0,0,133.83,82.325Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_11" data-name="Path 11" d="M133.236,75.709a2,2,0,1,0-2-2A2,2,0,0,0,133.236,75.709Z" fill="#fff" fill-rule="evenodd"/>
            <path id="Path_12" data-name="Path 12" d="M131.137,79.028a1.241,1.241,0,1,0-1.241-1.24A1.243,1.243,0,0,0,131.137,79.028Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            </g>
            </svg>
            `;
            document.querySelector('.e5').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.571 94.571" xmlns="http://www.w3.org/2000/svg">
            <g id="loved" transform="translate(-490.629 -53.014)">
            <path id="Path_68" data-name="Path 68" d="M492.051,87.785c.283-26.649,16.427-33.362,45.857-33.353,29.458.009,45.585,6.732,45.87,33.353.292,27.433-16.715,34.458-46.566,34.333C507.725,121.992,491.767,114.549,492.051,87.785Z" fill="#ecc3dc" fill-rule="evenodd"/>
            <path id="Path_69" data-name="Path 69" d="M492.051,87.785c.016-1.428.079-2.8.184-4.11,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.107,1.319.17,2.69.186,4.123.292,27.433-16.715,34.458-46.566,34.333C507.725,121.992,491.767,114.55,492.051,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_70" data-name="Path 70" d="M490.633,87.774c.147-13.863,4.476-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.626-6.9s26.629,1.745,34.643,6.925c8.171,5.282,12.5,13.991,12.645,27.835.152,14.26-4.252,23.255-12.624,28.7-8.21,5.341-20.175,7.124-35.366,7.06-15.02-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.181-14.431-12.033-28.34Zm14.184-25.466c-7.328,4.735-11.212,12.7-11.347,25.488-.137,12.855,3.57,21.031,10.8,25.971,7.378,5.043,18.484,6.871,32.949,6.932,14.66.062,26.126-1.606,33.808-6.6,7.521-4.893,11.475-13.128,11.334-26.3-.136-12.776-4.016-20.74-11.343-25.477-7.486-4.838-18.639-6.464-33.108-6.469C523.458,55.846,512.309,57.467,504.817,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_71" data-name="Path 71" d="M517.2,88.893l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.534,5.534,0,0,1,.472-.46,5.765,5.765,0,0,1,7.455,0,5.435,5.435,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_72" data-name="Path 72" d="M564.687,88.895h-6.058A1.68,1.68,0,0,1,557.466,86a5.6,5.6,0,0,1,.462-.45,5.77,5.77,0,0,1,7.458,0,5.588,5.588,0,0,1,.568.56,1.68,1.68,0,0,1-1.267,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_73" data-name="Path 73" d="M514.167,69.321c1.013-1.866,2.028-2.8,4.058-2.8a3.905,3.905,0,0,1,4.057,3.732c0,3.733-4.057,7.466-8.115,11.2-4.059-3.732-8.116-7.465-8.116-11.2a3.905,3.905,0,0,1,4.057-3.732C512.138,66.523,513.153,67.455,514.167,69.321Z" fill="#eb505e" stroke="#eb505e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.549" fill-rule="evenodd"/>
            <path id="Path_74" data-name="Path 74" d="M561.657,69.321c1.014-1.866,2.029-2.8,4.059-2.8a3.905,3.905,0,0,1,4.057,3.732c0,3.733-4.057,7.466-8.116,11.2-4.058-3.732-8.115-7.465-8.115-11.2a3.905,3.905,0,0,1,4.057-3.732C559.629,66.523,560.644,67.455,561.657,69.321Z" fill="#eb505e" stroke="#eb505e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.549" fill-rule="evenodd"/>
            <g id="Group_18" data-name="Group 18">
                <path id="Path_75" data-name="Path 75" d="M518.428,72.2a2,2,0,1,0-2-1.995A2,2,0,0,0,518.428,72.2Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_76" data-name="Path 76" d="M516.33,75.518a1.24,1.24,0,1,0-1.241-1.241A1.243,1.243,0,0,0,516.33,75.518Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_19" data-name="Group 19">
                <path id="Path_77" data-name="Path 77" d="M565.952,72.2a2,2,0,1,0-2-1.995A2,2,0,0,0,565.952,72.2Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_78" data-name="Path 78" d="M563.853,75.518a1.24,1.24,0,1,0-1.24-1.241A1.243,1.243,0,0,0,563.853,75.518Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <path id="Path_79" data-name="Path 79" d="M547.815,85.445l0,.217a12.308,12.308,0,0,1-2.862,8.031,9.014,9.014,0,0,1-14.081,0,12.325,12.325,0,0,1-2.865-8.031l.006-.279a.709.709,0,0,1,.709-.7l18.38,0a.713.713,0,0,1,.713.712Z" fill="#1a1818" fill-rule="evenodd"/>
            </g>
            </svg>
            `;
        }
        if (kind_emj == '2') {
            document.querySelector('.e1').innerHTML = '&#128544;';
            document.querySelector('.e2').innerHTML = '&#128546;';
            document.querySelector('.e3').innerHTML = '&#128528;';
            document.querySelector('.e4').innerHTML = '&#128513;';
            document.querySelector('.e5').innerHTML = '&#128525;';
        }
        if (kind_emj == '3') {
            document.querySelector('.e1').innerHTML = `<svg width="30px" height="30px" fill="red" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M53.124 111.719c-19.81 .058 -38.793 11.221 -47.906 30.281 -12.679 26.518 -1.457 58.321 25.063 71l151.813 80.25c-3.034 45.712 8.308 92.828 34.031 128.125 20.554 28.23 51.333 49.125 87.344 49.125 90.142 0 126.618 -107.279 121.188 -179.406 -119.785 -52.833 -231.843 -114.748 -348.438 -174.156 -7.459 -3.566 -15.342 -5.242 -23.094 -5.219zm893.5 0c-7.752 -.023 -15.635 1.653 -23.094 5.219 -116.595 59.408 -228.653 121.323 -348.438 174.156 -5.431 72.128 31.045 179.406 121.188 179.406 36.011 0 66.79 -20.895 87.344 -49.125 25.723 -35.297 37.065 -82.413 34.031 -128.125l151.813 -80.25c26.519 -12.679 37.742 -44.482 25.063 -71 -9.113 -19.061 -28.096 -30.223 -47.906 -30.281zm-452.594 537.125c-165.217 .478 -330.443 61.75 -460.656 184l-2.906 2.969c-5.883 5.581 -10.716 10.191 -14.438 13.938 -20.747 20.849 -20.973 54.992 -.594 76.219 20.376 21.227 53.783 21.473 74.531 .625l12.094 -11.969 2.75 -2.406c111.938 -105.096 254.356 -156.932 396.219 -155.656 142.934 1.235 285.543 56.401 396.063 165.125 4.188 4.106 8.294 8.253 12.094 12.219 20.398 21.227 53.784 21.493 74.531 .625 20.747 -20.848 20.971 -55.023 .594 -76.25 -4.773 -4.983 -9.499 -9.749 -14.156 -14.313 -130.564 -128.436 -299.191 -193.67 -468.25 -195.125 -2.622 -.023 -5.253 -.008 -7.875 0z" fill="#1f1a17"/></svg>`;
            document.querySelector('.e2').innerHTML = `<svg width="30px" height="30px" viewBox="-0.5 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M261.346 50c-60.551 0 -109.688 64.791 -109.688 144.375 0 79.505 49.137 144.313 109.688 144.313s109.656 -64.808 109.656 -144.313c0 -79.584 -49.106 -144.375 -109.656 -144.375zm476.438 0c-60.552 0 -109.656 64.791 -109.656 144.375 0 79.505 49.105 144.313 109.656 144.313 60.55 0 109.688 -64.808 109.688 -144.313 0 -79.584 -49.138 -144.375 -109.688 -144.375zm-244.063 598.844c-165.217 .478 -330.443 61.75 -460.656 184l-2.906 2.969c-5.883 5.581 -10.716 10.191 -14.438 13.938 -20.747 20.849 -20.973 54.992 -.594 76.219 20.376 21.227 53.783 21.473 74.531 .625l12.094 -11.969 2.75 -2.406c111.938 -105.096 254.356 -156.932 396.219 -155.656 142.934 1.235 285.543 56.401 396.063 165.125 4.188 4.106 8.294 8.253 12.094 12.219 20.398 21.227 53.784 21.493 74.531 .625 20.747 -20.848 20.971 -55.023 .594 -76.25 -4.773 -4.983 -9.499 -9.749 -14.156 -14.313 -130.564 -128.436 -299.191 -193.67 -468.25 -195.125 -2.622 -.023 -5.253 -.008 -7.875 0z"/></svg>`;
            document.querySelector('.e3').innerHTML = `<svg width="30px" height="30px" viewBox="-56 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M52.574 157.281c-10.33 .193 -20.697 3.36 -29.781 9.75 -24.224 17.04 -30.071 50.494 -13.031 74.719 44.703 63.799 118.793 102.188 196.656 102.188 70.063 0 137.93 -31.631 183.031 -84.531 19.527 -22.045 17.64 -55.789 -4.281 -75.5 -22.013 -19.802 -55.979 -18.015 -75.781 4l-.281 .313 -1 1.281 -.031 -.031 -.125 .219 -.844 1.031c-3.224 3.715 -6.751 7.247 -10.313 10.531l-.938 1.031 -.438 .406c-3.869 3.531 -7.656 6.544 -11.094 9.063l-.063 -.063c-59.227 42.708 -143.675 29.749 -186.75 -31.656 -10.651 -15.14 -27.721 -23.072 -44.938 -22.75zm485.094 0c-10.33 .193 -20.728 3.36 -29.813 9.75 -24.224 17.04 -30.041 50.494 -13 74.719 44.702 63.799 118.794 102.188 196.656 102.188 70.064 0 137.897 -31.631 183 -84.531 19.527 -22.045 17.671 -55.789 -4.25 -75.5 -22.015 -19.802 -55.978 -18.015 -75.781 4l-.281 .313 -1 1.281 -.031 -.031 -.125 .219 -.875 1.031c-3.224 3.715 -6.719 7.247 -10.281 10.531l-.938 1.031 -.438 .406c-3.868 3.531 -7.686 6.544 -11.125 9.063l-.063 -.063c-59.226 42.708 -143.643 29.749 -186.719 -31.656 -10.65 -15.14 -27.721 -23.072 -44.938 -22.75zm-434.656 578.375c-29.536 0 -53.531 23.995 -53.531 53.531 0 29.536 23.995 53.5 53.531 53.5l682 .031c29.536 0 53.531 -23.964 53.531 -53.5s-23.995 -53.531 -53.531 -53.531l-682 -.031z"/></svg>`
            document.querySelector('.e4').innerHTML = `<svg width="30px" height="30px" viewBox="-0.5 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M261.346 50c-60.551 0 -109.688 64.791 -109.688 144.375 0 79.505 49.137 144.313 109.688 144.313s109.656 -64.808 109.656 -144.313c0 -79.584 -49.106 -144.375 -109.656 -144.375zm476.438 0c-60.552 0 -109.656 64.791 -109.656 144.375 0 79.505 49.105 144.313 109.656 144.313 60.55 0 109.688 -64.808 109.688 -144.313 0 -79.584 -49.138 -144.375 -109.688 -144.375zm208.219 598.844c-13.491 .11 -26.926 5.48 -37.125 16.094 -3.8 3.966 -7.906 8.113 -12.094 12.219 -110.519 108.724 -253.129 163.89 -396.063 165.125 -141.863 1.276 -284.281 -50.56 -396.219 -155.656l-2.75 -2.406 -12.094 -11.969c-20.749 -20.848 -54.155 -20.602 -74.531 .625 -20.379 21.227 -20.154 55.401 .594 76.25 3.722 3.746 8.554 8.357 14.438 13.938l2.906 2.969c132.28 124.191 300.701 185.444 468.531 183.969 169.059 -1.455 337.686 -66.658 468.25 -195.094 4.657 -4.564 9.383 -9.361 14.156 -14.344 20.378 -21.227 20.154 -55.371 -.594 -76.219 -10.374 -10.434 -23.915 -15.61 -37.406 -15.5z"/></svg>`;
            document.querySelector('.e5').innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="30px" height="30px" viewBox="0 0 51.505 51.505" style="enable-background:new 0 0 51.505 51.505;"
            xml:space="preserve">
       <g>
           <path d="M50.072,29.977L1.435,29.91c0,0-0.001,0-0.002,0c-0.479,0-0.926,0.272-1.191,0.729c-0.267,0.455-0.316,1.033-0.132,1.54
               c4.134,11.375,14.228,18.726,25.714,18.726c11.245,0,21.28-7.316,25.563-18.637c0.191-0.506,0.148-1.089-0.117-1.55
               C51.005,30.255,50.555,29.978,50.072,29.977z M14.612,45.5c-2.64-1.154-5.017-2.713-7.013-4.615h7.013V45.5z M14.612,37.583H4.827
               v-4.95l9.785,0.011V37.583z M27.956,47.693c-0.729,0.057-1.46,0.096-2.2,0.096c-2.636,0-5.186-0.36-7.585-1.024v-5.88h9.785V47.693
               z M27.956,37.583h-9.785v-4.936l9.785,0.012V37.583z M41.298,42.899c-2.835,2.046-6.17,3.521-9.785,4.283v-6.299h9.785V42.899z
                M41.298,37.583h-9.785v-4.92l9.785,0.012V37.583z M48.496,34.333c-0.533,1.145-1.179,2.226-1.9,3.25h-1.738v-4.904l2.47,0.002
               c0.43,0.001,0.827,0.202,1.064,0.534C48.627,33.549,48.666,33.969,48.496,34.333z M5.407,5.14c0-1.025,0.365-2.114,1.002-2.988
               c0.729-1,1.684-1.551,2.691-1.551c1,0,1.942,0.437,2.625,1.173c0.684-0.736,1.626-1.173,2.626-1.173
               c1.006,0,1.961,0.551,2.688,1.551c0.637,0.874,1.002,1.963,1.002,2.988c0,1.628-1.006,3.473-2.991,5.485
               c-1.414,1.434-2.812,2.425-2.87,2.466c-0.137,0.097-0.296,0.145-0.455,0.145c-0.156,0-0.313-0.046-0.446-0.138
               C11.039,12.933,5.407,9.03,5.407,5.14z M33.525,5.14c0-1.025,0.365-2.114,1.002-2.988c0.729-1,1.685-1.551,2.691-1.551
               c1,0,1.942,0.437,2.625,1.173c0.684-0.736,1.626-1.173,2.626-1.173c1.006,0,1.961,0.551,2.688,1.551
               c0.637,0.874,1.002,1.963,1.002,2.988c0,1.628-1.007,3.473-2.991,5.485c-1.414,1.434-2.812,2.425-2.87,2.466
               c-0.137,0.097-0.296,0.145-0.455,0.145c-0.156,0-0.313-0.046-0.446-0.138C39.157,12.933,33.525,9.03,33.525,5.14z"/>
       </g></svg>`;
        }

    })
})
textarea_footer.addEventListener('input', function() {
    txt_footer.innerHTML = textarea_footer.value;

})
radio.forEach(function(value, index) {
    if (value.value === 'light') {
        feedback.classList.add('color_light');
        feedback.classList.remove('color_dark');
        close_feedback.classList.add('color_light');
        close_feedback.classList.remove('color_dark');

    }
    value.addEventListener('click', function() {
        alternate_color = value.value;
        if (value.value === 'light') {
            feedback.classList.add('color_light');
            feedback.classList.remove('color_dark');
            close_feedback.classList.add('color_light');
            close_feedback.classList.remove('color_dark');

        }
        if (value.value === 'dark') {
            feedback.classList.add('color_dark');
            feedback.classList.remove('color_light');
            close_feedback.classList.remove('color_light');
            close_feedback.classList.add('color_dark');
        }
    })
})

select2.addEventListener('click', function() {

    position_feed = select2.value;
    close_feedback.style.backgroundColor = accent_color.value;
    close_tooltip.style.backgroundColor = accent_color.value;
    console.log(show_feedback_click);
    positionn();

    if (position_feed == 2) {

        text_tooltip_bottom.addEventListener('mouseover', function() {
            close_tooltip.classList.remove('vibh');
            close_tooltip.classList.add('vib');
        })
        text_tooltip_bottom.addEventListener('mouseout', function() {
            close_tooltip.classList.add('vibh');
            close_tooltip.classList.remove('vib');
        })
        close_tooltip.addEventListener('click', function() {
            text_tooltip_bottom.classList.remove('vib');
            text_tooltip_bottom.classList.add('vibh');
            text_tooltip_bottom.classList.remove('text_tooltip_left');
            text_tooltip_bottom.classList.remove('text_tooltip_right');
            close_tooltip.classList.remove('vib');
            close_tooltip.classList.add('vibh');
        })


    }
    if (position_feed == 3) {

        text_tooltip_bottom.addEventListener('mouseover', function() {
            close_tooltip.classList.remove('vibh');
            close_tooltip.classList.add('vib');
        })
        text_tooltip_bottom.addEventListener('mouseout', function() {
            close_tooltip.classList.add('vibh');
            close_tooltip.classList.remove('vib');
        })
        close_tooltip.addEventListener('click', function() {
            text_tooltip_bottom.classList.remove('vib');
            text_tooltip_bottom.classList.add('vibh');
            text_tooltip_bottom.classList.remove('text_tooltip_left');
            text_tooltip_bottom.classList.remove('text_tooltip_right');
            close_tooltip.classList.remove('vib');
            close_tooltip.classList.add('vibh');
        })

    }
})

show_feedback.addEventListener("click", function() {

    question.innerHTML = textarea_steps.value
    show_feedback_click = true;
    txt_footer.classList.add('dno');
    noro.classList.add('vib');
    if (position_feed == 0) {
        feedback_open_min();
    }
    if (position_feed == 1) {
        feedback.innerHTML = 'feedback';
        feedback.classList.add('transform');
        feedback_content.classList.add('anymation_left');
        feedback_content.classList.remove('anymation_right');
        feedback_content.classList.remove('right_feedback');
        feedback_content.classList.add('left_feedback');
        feedback_content.classList.remove('dno');
        feedback_content.classList.add('dbl');
        show_feedback.classList.add('dno');
        show_feedback.classList.remove('dbl');
    }
    if (position_feed == 2) {
        bottom_right_click = bottom_right_click + 1;
        feedback.style.backgroundColor = accent_color.value;
        text_tooltip_bottom.classList.remove('vib');
        text_tooltip_bottom.classList.add('vibh');
        text_tooltip_bottom.classList.remove('text_tooltip_left');
        text_tooltip_bottom.classList.remove('text_tooltip_right');
        fix.classList.add('bottom_right_click');
        fix.classList.remove('bottom_right');
        feedback.classList.add('bottom_right_close');
        feedback.innerHTML = '&times';
        feedback.classList.remove('transform');
        show_feedback.classList.remove('dno');
        show_feedback.classList.add('dbl');
        feedback_content.classList.remove("dno");
        feedback_content.classList.add("dbl");
    }
    if (position_feed == 3) {
        bottom_left_click = bottom_left_click + 1;
        feedback.style.backgroundColor = accent_color.value;
        text_tooltip_bottom.classList.remove('vib');
        text_tooltip_bottom.classList.add('vibh');
        text_tooltip_bottom.classList.remove('text_tooltip_left');
        text_tooltip_bottom.classList.remove('text_tooltip_right');
        fix.classList.add('bottom_left_click');
        fix.classList.remove('bottom_left');
        feedback.classList.add('bottom_left_close');
        feedback.innerHTML = '&times';
        feedback.classList.remove('transform');
        show_feedback.classList.remove('dno');
        show_feedback.classList.add('dbl');
        feedback_content.classList.remove("dno");
        feedback_content.classList.add("dbl");
    }
    if (feedback.classList.contains('bottom_right_close') == true & bottom_right_click == 2) {
        bottom_right_click = 0;
        show_feedback_click = false;
        feedback.style.removeProperty('background-color');
        feedback_content.classList.add("dno");
        feedback_content.classList.remove("dbl");
        feedback.classList.remove('bottom_right_close');
        fix.classList.remove('bottom_right_click');
        fix.classList.add('bottom_right');
        feedback.innerHTML = '&#128515;';
        fix.classList.remove('emoje_click_right');
        text_tooltip_bottom.classList.remove('vibh');
        text_tooltip_bottom.classList.add('vib');
        text_tooltip_bottom.classList.remove('text_tooltip_left');
        text_tooltip_bottom.classList.add('text_tooltip_right');
        emoje.forEach(function(value, index) {
            value.classList.remove('pr' + index);
            value.classList.add('top');
            value.classList.add('vibh');
        })
        text_emoje.forEach(function(value, index) {
            value.classList.remove('pr1' + index);
        })
        show_feedback.classList.add('dbl');
        show_feedback.classList.remove('dno');
        fa.classList.remove('color_red');
        fa.classList.add('opacity_low');
        fa.classList.remove('opacity_full');
        tooltip.classList.add('vibh');
        tooltip.classList.remove('vib');
        emoje.forEach(function(value, index) {
            value.classList.remove('opacity_low');
            value.classList.add('opacity_full');
            text_emoje[index].classList.remove('vib');
            text_emoje[index].classList.add('vibh');
            send.classList.remove("vib");
            send.classList.add("vibh");
        });
        emoje_select = 0;
        text.classList.remove('dbl');
        text.classList.add('dno');
        feedback_content.classList.remove('height_max');
        feedback_content.classList.add('height_min');
        question.classList.remove("dno");
        question.classList.add("dbl");
        fa.classList.remove('fa');
        fa.classList.add('dno');
    }
    if (feedback.classList.contains('bottom_left_close') == true & bottom_left_click == 2) {
        bottom_left_click = 0;
        show_feedback_click = false;
        feedback.style.removeProperty('background-color');
        feedback_content.classList.add("dno");
        feedback_content.classList.remove("dbl");
        feedback.classList.remove('bottom_left_close');
        fix.classList.remove('bottom_left_click');
        fix.classList.add('bottom_left');
        feedback.innerHTML = '&#128515;';
        fix.classList.remove('emoje_click_left');
        text_tooltip_bottom.classList.remove('vibh');
        text_tooltip_bottom.classList.add('vib');
        text_tooltip_bottom.classList.remove('text_tooltip_right');
        text_tooltip_bottom.classList.add('text_tooltip_left');
        emoje.forEach(function(value, index) {
            value.classList.remove('pr' + index);
            value.classList.add('top');
            value.classList.add('vibh');
        })
        text_emoje.forEach(function(value, index) {
            value.classList.remove('pr1' + index);
        })
        show_feedback.classList.add('dbl');
        show_feedback.classList.remove('dno');
        fa.classList.remove('color_red');
        fa.classList.add('opacity_low');
        fa.classList.remove('opacity_full');
        tooltip.classList.add('vibh');
        tooltip.classList.remove('vib');
        emoje.forEach(function(value, index) {
            value.classList.remove('opacity_low');
            value.classList.add('opacity_full');
            text_emoje[index].classList.remove('vib');
            text_emoje[index].classList.add('vibh');
            send.classList.remove("vib");
            send.classList.add("vibh");
        });
        emoje_select = 0;
        text.classList.remove('dbl');
        text.classList.add('dno');
        feedback_content.classList.remove('height_max');
        feedback_content.classList.add('height_min');
        question.classList.remove("dno");
        question.classList.add("dbl");
        fa.classList.remove('fa');
        fa.classList.add('dno');
    }

    emoje.forEach(function(value, index) {

        value.classList.add('pr' + index);


    })

});

show_feedback.addEventListener('mouseover', function() {

    if (position_feed == 0 | position_feed == 1) {
        //  show_feedback.style.width=33+'px';
        show_feedback.classList.add('showdow');
    }
})
show_feedback.addEventListener('mouseout', function() {
    if (position_feed == 0 | position_feed == 1) {
        // show_feedback.style.width=30+'px';
        show_feedback.classList.remove('showdow');
    }
})

fa.addEventListener('mouseover', function() {
    if (select !== 1) {
        fa.classList.remove('opacity_low');
        fa.classList.add('opacity_full');
        tooltip.classList.remove('vibh');
        tooltip.classList.add('vib');
    }
});
fa.addEventListener("mouseout", function() {

    if (select !== 1) {
        tooltip.classList.remove('vib');
        tooltip.classList.add('vibh');
        fa.classList.remove('opacity_full');
        fa.classList.add("opacity_low");
    }
});
fa.addEventListener("click", function() {
    // over=0;
    select = 0;
    close_border = 0;
    feedback_content.classList.remove('dbl');
    feedback_content.classList.add('dno');
    show_feedback.classList.remove('dbl');
    show_feedback.classList.add('dno');
    emoje.forEach(function(value, index) {
        value.classList.remove('pr' + index);
        value.classList.remove('vibh');
        value.classList.remove('top');
    })
    border.forEach(function(value, index) {
        value.classList.remove('vibh');
        value.classList.add('vib');

    })
})

function close_feedback1() {
    show_feedback_click = false;
    txt_footer.classList.add('dno');
    bottom_right_click = 0;
    bottom_left_click = 0;
    tooltip_thank.classList.remove('vib');
    tooltip_thank.classList.add('vibh');
    document.querySelector('#email').classList.add('dno');
    document.querySelector('#email').classList.remove('dbl');
    feedback_content.classList.remove('anymation_right');
    feedback_content.classList.remove('anymation_left');
    feedback_content.classList.remove('left_feedback');
    feedback_content.classList.remove('right_feedback');
    feedback_content.classList.remove("dbl");
    feedback_content.classList.add("dno");
    if (position_feed == 2) {
        fix.classList.remove('bottom_right_click');
        fix.classList.add('bottom_right');
        fix.classList.remove('emoje_click_right');
        feedback.classList.remove('bottom_right_close');
        feedback.innerHTML = '&#128515;';
        text_tooltip_bottom.classList.remove('vibh');
        text_tooltip_bottom.classList.add('vib');
        text_tooltip_bottom.classList.remove('text_tooltip_left');
        text_tooltip_bottom.classList.add('text_tooltip_right');
        feedback.style.removeProperty('background-color');
    }
    if (position_feed == 3) {
        fix.classList.remove('bottom_left_click');
        fix.classList.add('bottom_left');
        fix.classList.remove('emoje_click_left');
        feedback.classList.remove('bottom_left_close');
        feedback.innerHTML = '&#128515;';
        text_tooltip_bottom.classList.remove('vibh');
        text_tooltip_bottom.classList.add('vib');
        text_tooltip_bottom.classList.add('text_tooltip_left');
        text_tooltip_bottom.classList.remove('text_tooltip_right');
        feedback.style.removeProperty('background-color');
    }
    fa_click = 0;
    select = 0;
    emoje.forEach(function(value, index) {
        value.classList.remove('pr' + index);
        value.classList.add('top');
        value.classList.add('vibh');
    })
    text_emoje.forEach(function(value, index) {
            value.classList.remove('pr1' + index);
        })
        // over=1;
    show_feedback.classList.add('dbl');
    show_feedback.classList.remove('dno');
    fa.classList.remove('color_red');
    fa.classList.add('opacity_low');
    fa.classList.remove('opacity_full');
    tooltip.classList.add('vibh');
    tooltip.classList.remove('vib');
    emoje.forEach(function(value, index) {
        value.classList.remove('opacity_low');
        value.classList.add('opacity_full');
        text_emoje[index].classList.remove('vib');
        text_emoje[index].classList.add('vibh');
        send.classList.remove("vib");
        send.classList.add("vibh");
    });
    emoje_select = 0;
    text.classList.remove('dbl');
    text.classList.add('dno');
    feedback_content.classList.remove('height_max');
    feedback_content.classList.add('height_min');
    question.classList.remove("dno");
    question.classList.add("dbl");
    fa.classList.remove('fa');
    fa.classList.add('dno');
}
close_feedback.addEventListener("click", function() {
    console.log(show_feedback_click);
    close_feedback1();
    console.log(show_feedback_click);
});

send.addEventListener('click', function() {
    tooltip.classList.remove('vib');
    tooltip.classList.add('vibh');
})
emoje.forEach(function(value, index) {
    value.addEventListener("click", function() {
        emoje_select = 1;
        txt_footer.classList.remove('dno');
        feedback_content.classList.remove('height_min');
        feedback_content.classList.add('height_max');
        text.classList.remove('dno');
        text.classList.add('dbl');
        text.style.height = '100px';
        fa.classList.remove('dno');
        fa.classList.add('fa');
        question.classList.remove("dbl");
        question.classList.add("dno");
        send.classList.remove('vibh');
        send.classList.add('vib');
        if (position_feed == 1 | position_feed == 0) {
            txt_footer.classList.remove('footer_bottom');
            txt_footer.classList.add('footer_top');
            noro.classList.remove('noro_bottom');
            noro.classList.add('noro_top');
        }
        if (position_feed == 2) {
            txt_footer.classList.add('footer_bottom');
            txt_footer.classList.remove('footer_top');
            noro.classList.add('noro_bottom');
            noro.classList.remove('noro_top');
            fix.classList.remove('bottom_right_click');
            fix.classList.remove('bottom_right');
            fix.classList.add('emoje_click_right');
        }
        if (position_feed == 3) {
            txt_footer.classList.add('footer_bottom');
            txt_footer.classList.remove('footer_top');
            noro.classList.add('noro_bottom');
            noro.classList.remove('noro_top');
            fix.classList.remove('bottom_left_click');
            fix.classList.remove('bottom_left');
            fix.classList.add('emoje_click_left');
        }
        emoje.forEach(function(value2, index2) {
            if (index2 !== index) {
                value2.classList.remove("opacity_full");
                value2.classList.add('opacity_low');
                text_emoje[index2].classList.remove('vib');
                text_emoje[index2].classList.add('vibh');
                text_emoje[index2].classList.remove('pr1' + index2);

            } else {
                click = index2;
                value2.classList.remove("opacity");
                value2.classList.add("opacity_full");

            }
        });
    });
    value.addEventListener("mouseover", function() {

        emoje.forEach(function(value3, index3) {
            if (index3 !== index & emoje_select == 0) {
                value3.classList.remove("opacity_full");
                value3.classList.add("opacity_low");
                text_emoje[index3].classList.add('vibh');

            } else if (index3 === index & emoje_select == 0) {
                text_emoje[index3].classList.remove('vibh');
                text_emoje[index3].classList.add('vib');
                text_emoje[index3].classList.add('pr1' + index);
            } else if (emoje_select == 1 & index3 === index & index3 !== click) {

                value3.classList.remove('opacity_low');
                value3.classList.add('opacity');
                text_emoje[index3].classList.remove('vibh');
                text_emoje[index3].classList.add('vib');
                text_emoje[index3].classList.add('pr1' + index);
            }


        });

        value.style.cursor = 'pointer';
    });

    value.addEventListener("mouseout", function() {
        emoje.forEach(function(value4, index4) {
            if (emoje_select == 0) {
                value4.classList.remove("opacity_low");
                value4.classList.add('opacity_full');
                text_emoje[index4].classList.remove('vib');
                text_emoje[index4].classList.add('vibh');
                text_emoje[index4].classList.remove('pr1' + index);
            };
            if (emoje_select == 1 & index4 === index & index4 !== click) {
                value4.classList.remove("opacity");
                value4.classList.add('opacity_low');
                text_emoje[index4].classList.remove('vib');
                text_emoje[index4].classList.add('vibh');
                text_emoje[index4].classList.remove('pr1' + index);
            }
        });
    });

});
close_select.addEventListener('click', function() {
    border.forEach(function(value, index) {
        value.classList.remove('vib');
        value.classList.add('vibh');
    })
    feedback_content.classList.remove('dno');
    feedback_content.classList.add('dbl');

});
close_select.addEventListener('mouseover', function() {
    close_select.classList.add('close_over');
})
close_select.addEventListener('mouseout', function() {
    close_select.classList.remove('close_over');
});

parent.document.querySelector('#input').addEventListener('input', function() {
    close_feedback.style.backgroundColor = accent_color.value;
    show_feedback.style.backgroundColor = accent_color.value;
    if (position_feed == 2 | position_feed == 3) {

        show_feedback.style.removeProperty('background-color');
        close_tooltip.style.backgroundColor = accent_color.value;
        if (bottom_left_click == 1 | bottom_right_click == 1) {
            feedback.style.backgroundColor = accent_color.value;
        }
    }
})
parent.document.querySelector('#check').addEventListener('click', function() {
    if (parent.document.querySelector('#check').checked == true) {
        hide = true;
        noro.classList.add('vibh');
    } else {
        hide = false;
        noro.classList.remove('vibh');
    }

})
parent.document.querySelector('#reset').addEventListener('click', function() {
    accent_color.value = '#f4364c';
    parent.document.querySelector('#hex').innerHTML = '#f4364c';
    feedback.style.removeProperty('background-color');
    show_feedback.style.removeProperty('background-color');
    close_feedback.style.removeProperty('background-color');
    close_tooltip.style.removeProperty('background-color');

})
desktop.addEventListener('click', function() {
    iframe.classList.add('iframe_desktop');
    iframe.classList.remove('iframe_mobile');
    phone.classList.remove('select_show');
    desktop.classList.add('select_show');
    document.querySelector('#close_thank').classList.add('vibh')
    phone_click = false;
});
phone.addEventListener('click', function() {
    phone_click = true;
    iframe.classList.remove('iframe_desktop');
    iframe.classList.add('iframe_mobile');
    phone.classList.add('select_show');
    desktop.classList.remove('select_show');
    document.querySelector('#close_thank').classList.remove('vibh')
})



//steps//********************************************************
question.innerHTML = textarea_steps.value;
textarea_steps.addEventListener('input', function() {
    question.innerHTML = textarea_steps.value;
})

parent.document.querySelector('#checkbox2').addEventListener('click', function() {
    if (this.checked) {
        textarea_footer.value = 'Write your comments for us to provide better services!';
        txt_footer.innerHTML = 'Write your comments for us to provide better services!';
        feedback_open_max()
    } else {
        textarea_footer.classList.add('dno');
        txt_footer.innerHTML = '';
        textarea_footer.value = '';
        feedback_open_min();
    }
});
const box2 = parent.document.querySelector('.box2');
const box1 = parent.document.querySelector('.box1');
const box3 = parent.document.querySelector('.box3');
box2.addEventListener('mouseover', function() {
    close_feedback1();
    document.querySelector('#email').classList.remove('dno');
    document.querySelector('#email').classList.add('dbl');
    feedback_content.classList.add('right_feedback');
    feedback_content.classList.add('dbl');
    feedback_content.classList.remove('dno');
    show_feedback.classList.remove('dbl');
    show_feedback.classList.add('dno');
    noro.classList.add('vibh');
    question.innerHTML = textarea_email.value;
})
box1.addEventListener('mouseover', function() {
    if (parent.document.querySelector('#checkbox2').checked == false) {
        feedback_open_min();
    } else {
        feedback_open_max()
        emoje.forEach(function(value, index) {
            value.classList.add('pr' + index);
        })
    }
})
question.innerHTML = textarea_email.value;
textarea_email.addEventListener('input', function() {
    question.innerHTML = textarea_email.value;
})
Appearance_titr.addEventListener('click', function() {
    if (div_option.classList.contains('dno') == false) {
        question.innerHTML = "How would you rate your experience?";
        tooltip_thank.classList.add('vibh');
        tooltip_thank.classList.remove('vib');
        feedback_content.classList.remove('dbl');
        feedback_content.classList.add('dno');
        show_feedback.classList.add('dbl');
        show_feedback.classList.remove('dno');
        document.querySelector('#email').classList.add('dno');
        document.querySelector('#email').classList.remove('dbl');
        emoje_select = 0;
        close_feedback1();
    }
})
const target_titr = parent.document.querySelector('#target_titr');

steps_titr.addEventListener('click', function() {
    emoje_select = 0;
    close_feedback1();
    position_feed = 0;
    noro.classList.remove('noro_bottom');
    noro.classList.add('noro_top');
    txt_footer.classList.remove('footer_bottom');
    txt_footer.classList.add('footer_top');
    show_feedback_click = false;
    feedback.style.removeProperty('background-color');
    feedback_content.classList.remove('anymation_right');
    feedback_content.classList.remove('anymation_left');
    feedback_content.classList.remove('left_feedback');
    feedback_content.classList.remove('right_feedback');
    feedback.classList.add('transform');
    feedback.innerHTML = 'feedback';
    fix.classList.remove('left');
    fix.classList.remove('bottom_right');
    fix.classList.add('right');
    show_feedback.classList.remove('bottom_style');
    show_feedback.classList.add('left_right_style');
    text_tooltip_bottom.classList.remove('vib');
    text_tooltip_bottom.classList.add('vibh');
    feedback.classList.remove('bottom_right_close');
    fix.classList.remove('bottom_right_click');
    fix.classList.remove('emoje_click_right');
    fix.classList.remove('emoje_click_left');
    fix.classList.remove('bottom_left');
    fix.classList.remove('bottom_left_click');
    feedback.classList.remove('bottom_left_close');
    feedback.classList.remove('feedback_left');
    feedback.classList.add('feedback_right');
    show_feedback.style.backgroundColor = parent.document.querySelector('#input').value;

})
text_thank.innerHTML = textarea_thank.value;
textarea_thank.addEventListener('input', function() {
    text_thank.innerHTML = textarea_thank.value;
});
box3.addEventListener('mouseover', function() {
    noro.classList.remove('vibh');
    feedback_content.classList.remove('dbl');
    feedback_content.classList.add('dno');
    show_feedback.classList.add('dbl');
    show_feedback.classList.remove('dno');
    question.innerHTML = textarea_steps.value;
    document.querySelector('#email').classList.add('dno');
    document.querySelector('#email').classList.remove('dbl');
    if (div_option.classList.contains('dno') == true) {
        tooltip_thank.classList.remove('vibh');
        tooltip_thank.classList.add('vib');
    }
});
reset_main.addEventListener('click', function() {

    if (reset_main.classList.contains('div_reset1') == true) {

        position_feed = 0;
        positionn();
        show_feedback.style.backgroundColor = '#f4364c';
        feedback.classList.add('color_light');
        feedback.classList.remove('color_dark');
        close_feedback.classList.add('color_light');
        close_feedback.classList.remove('color_dark');
        accent_color.value = '#f4364c';
        parent.document.querySelector('#hex').innerHTML = '#f4364c';
        close_feedback.style.backgroundColor = '#f4364c';
        select2.value = '0';
        desktop.classList.add('select_show');
        phone.classList.remove('select_show');
        lan_select.value = 'English';
        document.querySelector('.e1').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
            <g id="angry" transform="translate(-348.019 -184.357)">
            <path id="Path_38" data-name="Path 38" d="M349.442,219.128c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.714,34.458-46.565,34.333C365.116,253.335,349.158,245.892,349.442,219.128Z" fill="#ef7a87" fill-rule="evenodd"/>
            <path id="Path_39" data-name="Path 39" d="M349.442,219.127c.015-1.427.078-2.794.184-4.109,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.106,1.319.17,2.69.186,4.122.292,27.434-16.715,34.458-46.566,34.334C365.116,253.335,349.158,245.893,349.442,219.127Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_40" data-name="Path 40" d="M348.023,219.117c.147-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.642,6.925c8.172,5.282,12.5,13.991,12.646,27.835.152,14.26-4.252,23.255-12.624,28.7-8.211,5.341-20.175,7.124-35.366,7.06-15.02-.064-26.638-2.021-34.54-7.421-8.051-5.5-12.181-14.432-12.034-28.341Zm14.185-25.466c-7.328,4.735-11.212,12.7-11.348,25.488-.136,12.855,3.571,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.605,33.808-6.6,7.521-4.892,11.474-13.127,11.334-26.3-.136-12.776-4.017-20.741-11.344-25.477-7.485-4.838-18.638-6.465-33.107-6.468C380.849,187.189,369.7,188.81,362.208,193.651Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_41" data-name="Path 41" d="M383.237,223.551a1.42,1.42,0,0,1-2.147-1.858,18.055,18.055,0,0,1,1.869-1.872,19.148,19.148,0,0,1,24.681,0l0,0a18.077,18.077,0,0,1,1.876,1.878,1.419,1.419,0,0,1-2.146,1.858,15.162,15.162,0,0,0-1.587-1.578v-.006a16.309,16.309,0,0,0-20.97,0A15.238,15.238,0,0,0,383.237,223.551Z" fill="#1a1818" fill-rule="evenodd"/>
            <g id="Group_10" data-name="Group 10">
                <path id="Path_42" data-name="Path 42" d="M371.558,213.838a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,371.558,213.838Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_43" data-name="Path 43" d="M370.963,207.222a2,2,0,1,0-2-2A2,2,0,0,0,370.963,207.222Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_44" data-name="Path 44" d="M368.865,210.541a1.241,1.241,0,1,0-1.24-1.24A1.242,1.242,0,0,0,368.865,210.541Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_11" data-name="Group 11">
                <path id="Path_45" data-name="Path 45" d="M419.049,213.838a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,419.049,213.838Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_46" data-name="Path 46" d="M418.455,207.222a2,2,0,1,0-2-2A2,2,0,0,0,418.455,207.222Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_47" data-name="Path 47" d="M416.356,210.541a1.241,1.241,0,1,0-1.24-1.24A1.243,1.243,0,0,0,416.356,210.541Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <path id="Path_48" data-name="Path 48" d="M374.588,220.233l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.753,5.753,0,0,1,7.927-.459,5.439,5.439,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_49" data-name="Path 49" d="M422.078,220.234H416.02a1.68,1.68,0,0,1-1.163-2.893,5.581,5.581,0,0,1,.462-.449,5.77,5.77,0,0,1,7.458,0,5.474,5.474,0,0,1,.567.56,1.678,1.678,0,0,1-1.266,2.781Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_50" data-name="Path 50" d="M365.607,200.614a1.421,1.421,0,0,1,1.28-2.537l13.965,7.075a1.421,1.421,0,0,1-1.279,2.537Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_51" data-name="Path 51" d="M423.724,198.077A1.421,1.421,0,0,1,425,200.614l-13.965,7.075a1.421,1.421,0,0,1-1.279-2.537Z" fill="#1a1818" fill-rule="evenodd"/>
            </g>
        </svg>
            `;
        document.querySelector('.e2').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
            <g id="sad" transform="translate(-205.409 -53.014)">
                <path id="Path_14" data-name="Path 14" d="M206.832,87.785c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.715,34.458-46.565,34.333C222.506,121.992,206.548,114.549,206.832,87.785Z" fill="#b9e2f8" fill-rule="evenodd"/>
                <path id="Path_15" data-name="Path 15" d="M206.832,87.785c.015-1.428.078-2.8.184-4.11,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.106,1.319.17,2.69.185,4.123.293,27.433-16.714,34.458-46.565,34.333C222.506,121.992,206.548,114.55,206.832,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
                <path id="Path_16" data-name="Path 16" d="M205.413,87.774c.148-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.643,6.925c8.171,5.282,12.5,13.991,12.645,27.835.152,14.26-4.252,23.255-12.624,28.7-8.211,5.341-20.176,7.124-35.366,7.06-15.021-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.181-14.431-12.034-28.34ZM219.6,62.308c-7.328,4.735-11.212,12.7-11.348,25.488-.136,12.855,3.571,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.606,33.808-6.6,7.52-4.893,11.474-13.128,11.334-26.3C297,75.02,293.123,67.056,285.8,62.319c-7.485-4.838-18.638-6.464-33.107-6.469C238.239,55.846,227.089,57.467,219.6,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_17" data-name="Path 17" d="M240.627,92.208a1.419,1.419,0,0,1-2.147-1.857,17.965,17.965,0,0,1,1.869-1.873,19.154,19.154,0,0,1,24.684,0,18.133,18.133,0,0,1,1.876,1.874,1.419,1.419,0,0,1-2.146,1.857,15.317,15.317,0,0,0-1.588-1.584,16.308,16.308,0,0,0-20.969,0A15.239,15.239,0,0,0,240.627,92.208Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_18" data-name="Path 18" d="M228.951,82.24a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,228.951,82.24Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_19" data-name="Path 19" d="M228.356,75.624a2,2,0,1,0-2-2A2,2,0,0,0,228.356,75.624Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_20" data-name="Path 20" d="M226.258,78.943a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,226.258,78.943Z" fill="#fff" fill-rule="evenodd"/>
                <g id="Group_5" data-name="Group 5">
                <path id="Path_21" data-name="Path 21" d="M276.439,82.24a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,276.439,82.24Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_22" data-name="Path 22" d="M275.845,75.624a2,2,0,1,0-2-2A2,2,0,0,0,275.845,75.624Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_23" data-name="Path 23" d="M273.747,78.943a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,273.747,78.943Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                <path id="Path_24" data-name="Path 24" d="M231.978,88.89l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.51,5.51,0,0,1,.471-.459,5.767,5.767,0,0,1,7.456,0,5.536,5.536,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
                <path id="Path_25" data-name="Path 25" d="M279.468,88.892H273.41A1.68,1.68,0,0,1,272.247,86a5.581,5.581,0,0,1,.462-.449,5.77,5.77,0,0,1,7.458,0,5.471,5.471,0,0,1,.567.56,1.68,1.68,0,0,1-1.266,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
                <path id="Path_26" data-name="Path 26" d="M228.95,82.738c2.345,0,4.258-.717,4.258-1.6s-1.913-1.6-4.258-1.6-4.258.717-4.258,1.6S226.6,82.738,228.95,82.738Z" fill="#00a1ed" fill-rule="evenodd"/>
                <path id="Path_27" data-name="Path 27" d="M276.439,82.738c2.345,0,4.258-.717,4.258-1.6s-1.913-1.6-4.258-1.6-4.259.717-4.259,1.6S274.093,82.738,276.439,82.738Z" fill="#00a1ed" fill-rule="evenodd"/>
            </g>
            </svg>
            `;
        document.querySelector('.e3').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.56 94.56" xmlns="http://www.w3.org/2000/svg">
            <g id="embarrassed" transform="translate(-62.806 -315.87)">
            <path id="Path_176" data-name="Path 176" d="M64.228,350.637c.283-26.645,16.424-33.358,45.851-33.349,29.455.009,45.58,6.732,45.864,33.349.293,27.431-16.712,34.454-46.56,34.329C79.9,384.84,63.943,377.4,64.228,350.637Z" fill="#ecc3dc" fill-rule="evenodd"/>
            <path id="Path_177" data-name="Path 177" d="M64.228,350.637c.015-1.427.078-2.794.184-4.109,1.853,22.4,17.568,28.837,44.971,28.954,27.8.115,44.455-5.971,46.375-28.967.107,1.319.17,2.69.186,4.122.292,27.431-16.713,34.454-46.561,34.33C79.9,384.841,63.944,377.4,64.228,350.637Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_178" data-name="Path 178" d="M62.81,350.626c.147-13.86,4.476-22.574,12.647-27.855,8.007-5.174,19.644-6.9,34.622-6.9s26.627,1.745,34.639,6.924c8.171,5.282,12.5,13.989,12.644,27.832.152,14.259-4.252,23.253-12.623,28.7-8.209,5.341-20.173,7.123-35.361,7.06-15.019-.065-26.635-2.021-34.536-7.421-8.05-5.5-12.18-14.43-12.032-28.338Zm14.182-25.463c-7.327,4.735-11.211,12.7-11.346,25.485-.137,12.854,3.57,21.028,10.8,25.969,7.377,5.041,18.482,6.87,32.946,6.931,14.658.062,26.121-1.606,33.8-6.6,7.519-4.892,11.473-13.126,11.332-26.3-.136-12.774-4.016-20.738-11.342-25.473-7.485-4.838-18.637-6.464-33.1-6.469C95.631,318.7,84.483,320.322,76.992,325.163Z" fill="#1a1818" fill-rule="evenodd"/>
            <g id="Group_46" data-name="Group 46">
                <path id="Path_179" data-name="Path 179" d="M86.341,345.348a6.225,6.225,0,1,0-6.225-6.225A6.237,6.237,0,0,0,86.341,345.348Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_180" data-name="Path 180" d="M85.747,338.733a2,2,0,1,0-2-2A2,2,0,0,0,85.747,338.733Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_181" data-name="Path 181" d="M83.649,342.052a1.24,1.24,0,1,0-1.241-1.241A1.243,1.243,0,0,0,83.649,342.052Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_47" data-name="Group 47">
                <path id="Path_182" data-name="Path 182" d="M133.827,345.348a6.225,6.225,0,1,0-6.225-6.225A6.237,6.237,0,0,0,133.827,345.348Z" fill="#1a1818" fill-rule="evenodd"/>
                <path id="Path_183" data-name="Path 183" d="M133.233,338.733a2,2,0,1,0-2-2A2,2,0,0,0,133.233,338.733Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_184" data-name="Path 184" d="M131.135,342.052a1.24,1.24,0,1,0-1.241-1.241A1.243,1.243,0,0,0,131.135,342.052Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <path id="Path_185" data-name="Path 185" d="M91.736,355.68l-10.782,0a2.99,2.99,0,0,1-2.085-5.134,9.944,9.944,0,0,1,.839-.817,10.262,10.262,0,0,1,13.271,0,9.843,9.843,0,0,1,1.012,1.01,2.988,2.988,0,0,1-2.255,4.937Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_186" data-name="Path 186" d="M81.89,330.3a1.419,1.419,0,1,1-2.146-1.856,8.322,8.322,0,0,1,.869-.872,8.879,8.879,0,0,1,11.451,0,8.267,8.267,0,0,1,.879.877A1.419,1.419,0,0,1,90.8,330.3a5.61,5.61,0,0,0-.578-.576l-.006-.006a6.033,6.033,0,0,0-7.743,0A5.592,5.592,0,0,0,81.89,330.3Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_187" data-name="Path 187" d="M129.372,330.3a1.418,1.418,0,1,1-2.145-1.856,8.324,8.324,0,0,1,.869-.872,8.879,8.879,0,0,1,11.457,0,8.357,8.357,0,0,1,.873.872,1.419,1.419,0,0,1-2.146,1.856,5.527,5.527,0,0,0-.584-.582,6.033,6.033,0,0,0-7.743,0A5.6,5.6,0,0,0,129.372,330.3Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_188" data-name="Path 188" d="M102.144,356.919c-.476,0-.862-.633-.862-1.413s.386-1.413.862-1.413h15.882c.476,0,.862.633.862,1.413s-.386,1.413-.862,1.413Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_189" data-name="Path 189" d="M139.22,355.68l-10.781,0a2.991,2.991,0,0,1-2.086-5.134,10.238,10.238,0,0,1,14.11-.817,9.647,9.647,0,0,1,1.012,1.01,2.982,2.982,0,0,1-.3,4.2A3.014,3.014,0,0,1,139.22,355.68Z" fill="#eb505e" fill-rule="evenodd"/>
            </g>
            </svg>
            `;
        document.querySelector('.e4').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
            <g id="happy" transform="translate(-62.8 -53.014)">
            <path id="Path_1" data-name="Path 1" d="M64.223,87.785c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.715,34.458-46.566,34.333C79.9,121.992,63.938,114.549,64.223,87.785Z" fill="#a4d4b2" fill-rule="evenodd"/>
            <path id="Path_2" data-name="Path 2" d="M64.223,87.785c.015-1.428.078-2.8.184-4.11,1.853,22.4,17.569,28.84,44.977,28.957,27.8.116,44.46-5.971,46.379-28.97.107,1.319.171,2.69.186,4.123.292,27.433-16.714,34.458-46.565,34.333C79.9,121.992,63.939,114.55,64.223,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_3" data-name="Path 3" d="M62.8,87.774c.147-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.642,6.925c8.172,5.282,12.5,13.991,12.646,27.835.152,14.26-4.252,23.255-12.625,28.7-8.21,5.341-20.175,7.124-35.365,7.06-15.021-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.182-14.431-12.034-28.34ZM76.988,62.308C69.661,67.043,65.776,75.01,65.641,87.8c-.137,12.855,3.57,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.606,33.808-6.6,7.52-4.893,11.474-13.128,11.334-26.3-.137-12.776-4.017-20.74-11.344-25.477-7.485-4.838-18.638-6.464-33.107-6.469C95.63,55.846,84.48,57.467,76.988,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_4" data-name="Path 4" d="M95.871,86.318a1.419,1.419,0,1,1,2.146-1.857,15.345,15.345,0,0,0,1.58,1.584,16.308,16.308,0,0,0,20.969,0,15.318,15.318,0,0,0,1.588-1.584,1.419,1.419,0,1,1,2.146,1.857,17.937,17.937,0,0,1-1.877,1.873,19.151,19.151,0,0,1-24.683,0A17.964,17.964,0,0,1,95.871,86.318Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_5" data-name="Path 5" d="M89.369,88.893l-6.057,0a1.68,1.68,0,0,1-1.172-2.884,5.753,5.753,0,0,1,7.928-.46,5.537,5.537,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_6" data-name="Path 6" d="M136.858,88.895H130.8A1.68,1.68,0,0,1,129.638,86a5.438,5.438,0,0,1,.462-.45,5.77,5.77,0,0,1,7.458,0,5.575,5.575,0,0,1,.567.56,1.68,1.68,0,0,1-1.267,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
            <g id="Group_1" data-name="Group 1">
            <path id="Path_7" data-name="Path 7" d="M86.342,82.325A6.226,6.226,0,1,0,80.116,76.1,6.237,6.237,0,0,0,86.342,82.325Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_8" data-name="Path 8" d="M85.747,75.709a2,2,0,1,0-2-2A2,2,0,0,0,85.747,75.709Z" fill="#fff" fill-rule="evenodd"/>
            <path id="Path_9" data-name="Path 9" d="M83.649,79.028a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,83.649,79.028Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_2" data-name="Group 2">
            <path id="Path_10" data-name="Path 10" d="M133.83,82.325A6.226,6.226,0,1,0,127.6,76.1,6.238,6.238,0,0,0,133.83,82.325Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_11" data-name="Path 11" d="M133.236,75.709a2,2,0,1,0-2-2A2,2,0,0,0,133.236,75.709Z" fill="#fff" fill-rule="evenodd"/>
            <path id="Path_12" data-name="Path 12" d="M131.137,79.028a1.241,1.241,0,1,0-1.241-1.24A1.243,1.243,0,0,0,131.137,79.028Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            </g>
            </svg>
            `;
        document.querySelector('.e5').innerHTML = `<svg width="30px" height="45px" viewBox="0 -12.02 94.571 94.571" xmlns="http://www.w3.org/2000/svg">
            <g id="loved" transform="translate(-490.629 -53.014)">
            <path id="Path_68" data-name="Path 68" d="M492.051,87.785c.283-26.649,16.427-33.362,45.857-33.353,29.458.009,45.585,6.732,45.87,33.353.292,27.433-16.715,34.458-46.566,34.333C507.725,121.992,491.767,114.549,492.051,87.785Z" fill="#ecc3dc" fill-rule="evenodd"/>
            <path id="Path_69" data-name="Path 69" d="M492.051,87.785c.016-1.428.079-2.8.184-4.11,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.107,1.319.17,2.69.186,4.123.292,27.433-16.715,34.458-46.566,34.333C507.725,121.992,491.767,114.55,492.051,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
            <path id="Path_70" data-name="Path 70" d="M490.633,87.774c.147-13.863,4.476-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.626-6.9s26.629,1.745,34.643,6.925c8.171,5.282,12.5,13.991,12.645,27.835.152,14.26-4.252,23.255-12.624,28.7-8.21,5.341-20.175,7.124-35.366,7.06-15.02-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.181-14.431-12.033-28.34Zm14.184-25.466c-7.328,4.735-11.212,12.7-11.347,25.488-.137,12.855,3.57,21.031,10.8,25.971,7.378,5.043,18.484,6.871,32.949,6.932,14.66.062,26.126-1.606,33.808-6.6,7.521-4.893,11.475-13.128,11.334-26.3-.136-12.776-4.016-20.74-11.343-25.477-7.486-4.838-18.639-6.464-33.108-6.469C523.458,55.846,512.309,57.467,504.817,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
            <path id="Path_71" data-name="Path 71" d="M517.2,88.893l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.534,5.534,0,0,1,.472-.46,5.765,5.765,0,0,1,7.455,0,5.435,5.435,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_72" data-name="Path 72" d="M564.687,88.895h-6.058A1.68,1.68,0,0,1,557.466,86a5.6,5.6,0,0,1,.462-.45,5.77,5.77,0,0,1,7.458,0,5.588,5.588,0,0,1,.568.56,1.68,1.68,0,0,1-1.267,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
            <path id="Path_73" data-name="Path 73" d="M514.167,69.321c1.013-1.866,2.028-2.8,4.058-2.8a3.905,3.905,0,0,1,4.057,3.732c0,3.733-4.057,7.466-8.115,11.2-4.059-3.732-8.116-7.465-8.116-11.2a3.905,3.905,0,0,1,4.057-3.732C512.138,66.523,513.153,67.455,514.167,69.321Z" fill="#eb505e" stroke="#eb505e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.549" fill-rule="evenodd"/>
            <path id="Path_74" data-name="Path 74" d="M561.657,69.321c1.014-1.866,2.029-2.8,4.059-2.8a3.905,3.905,0,0,1,4.057,3.732c0,3.733-4.057,7.466-8.116,11.2-4.058-3.732-8.115-7.465-8.115-11.2a3.905,3.905,0,0,1,4.057-3.732C559.629,66.523,560.644,67.455,561.657,69.321Z" fill="#eb505e" stroke="#eb505e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.549" fill-rule="evenodd"/>
            <g id="Group_18" data-name="Group 18">
                <path id="Path_75" data-name="Path 75" d="M518.428,72.2a2,2,0,1,0-2-1.995A2,2,0,0,0,518.428,72.2Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_76" data-name="Path 76" d="M516.33,75.518a1.24,1.24,0,1,0-1.241-1.241A1.243,1.243,0,0,0,516.33,75.518Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <g id="Group_19" data-name="Group 19">
                <path id="Path_77" data-name="Path 77" d="M565.952,72.2a2,2,0,1,0-2-1.995A2,2,0,0,0,565.952,72.2Z" fill="#fff" fill-rule="evenodd"/>
                <path id="Path_78" data-name="Path 78" d="M563.853,75.518a1.24,1.24,0,1,0-1.24-1.241A1.243,1.243,0,0,0,563.853,75.518Z" fill="#fff" fill-rule="evenodd"/>
            </g>
            <path id="Path_79" data-name="Path 79" d="M547.815,85.445l0,.217a12.308,12.308,0,0,1-2.862,8.031,9.014,9.014,0,0,1-14.081,0,12.325,12.325,0,0,1-2.865-8.031l.006-.279a.709.709,0,0,1,.709-.7l18.38,0a.713.713,0,0,1,.713.712Z" fill="#1a1818" fill-rule="evenodd"/>
            </g>
            </svg>
            `;
        noro.classList.remove('vibh');
        radio.forEach(function(value, index) {
            if (value.value == 'dark' & value.checked == true) {
                value.checked = false;
                radio[0].checked = true;
            }

        })
    }
    if (reset_main.classList.contains('div_reset2') == true) {
        position_feed = 0;
        question.innerHTML = "How would you rate your experience?";
        textarea_steps.value = "How would you rate your experience?";
        textarea_email.value = 'We may wish to follow up. Enter your email if you are happy for us to contact you.';
        textarea_thank.value = 'Thank you for sharing your feedback with us!';
        text_thank.innerHTML = 'Thank you for sharing your feedback with us!';
        textarea_footer.value = 'Write your comments for us to provide better services!';
        txt_footer.innerHTML = 'Write your comments for us to provide better services!';
        phone_click = false;
    }
})
tooltip_thank.addEventListener('mouseover', function() {
    document.querySelector('#close_thank').classList.remove('vibh')
})
tooltip_thank.addEventListener('mouseout', function() {
    if (phone_click == false) {
        document.querySelector('#close_thank').classList.add('vibh')
    }

})
document.querySelector('#close_thank').addEventListener('click', function() {
    tooltip_thank.classList.add('vibh')
})