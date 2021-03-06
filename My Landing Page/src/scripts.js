//corner buttons
const mode_button = document.getElementById('mode-selector');
const lang_button = document.getElementById('lang-selector');

//mode classes to change
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const headerbg = document.getElementsByClassName('header')[0];
const headerimg = document.getElementsByClassName('header-image')[0];
const menu = document.getElementsByClassName('menu')[0];
const menuIcon = document.getElementsByTagName('label')[0];
const menuText = document.getElementsByTagName('nav')[0];
const h3 = document.getElementsByTagName('h3')[0];
const h4 = document.getElementsByTagName('h4')[0];
const h1 = document.getElementsByTagName('h1')[0];
const form_btn = document.getElementsByClassName('form-btn')[0];
const form_input = document.getElementsByClassName('form-input')[0];
const form_input2 = document.getElementsByClassName('form-input')[1];
const form_message = document.getElementsByClassName('form-message')[0];

//mode class array
const classArray = [mode_button, lang_button, //buttons
                    body, footer, headerbg, headerimg, menu, menuIcon, menuText, h4, h3, h1, //body
                    form_btn, form_input,form_input2, form_message]; //email form
//text areas
let language = 'en-us';
let mode = 'light';
const cv = document.getElementById('cv');
const ct = document.getElementById('ct');
const ht = document.getElementById('ht');
const card_0 = document.getElementById('card-0');
const card_1 = document.getElementById('card-1');
const card_2 = document.getElementById('card-2');
const card_3 = document.getElementById('card-3');
const card_4 = document.getElementById('card-4');
const form_title = document.getElementById('form-title');

//toggle text language (including active mode button)
function changeBodyText(language){
    switch(language){
        case 'en-us':
            //active button
            if(mode == 'dark'){mode_button.innerHTML = "Light Years";}
            if(mode == 'light'){mode_button.innerHTML = "Dark Mode";}
            lang_button.innerHTML = "pt-BR";
            //menu
            cv.innerHTML = 'Curriculum';
            cv.href = "pdf/Tarso Galvao CV 2022 EN-US.pdf"
            ct.innerHTML = 'Contact';
            //head
            ht.innerHTML = "Full-Stack Developer"
            //cards
            card_0.innerHTML = "These are the languages that I'm currently studying and focusing on. All my projects available are developed with them but I'm always searching for new ways to improve my skills.";
            card_1.innerHTML = "On Github you will find most of my projects and studies. I do my best to keep everything up-to-date on my own, contributors are welcome! From Web Design to Game Engines, algorithms and art, to Bash scripts, here is where I'll keep them, feel free to snoop around!";
            card_2.innerHTML = "On Linkedin you will find my certifications for courses and bootcamps I completed.";
            card_3.innerHTML = "URCade is an operating system that turns your Raspberry Pi into a retro gaming system. The system was initially created as an exercise on dealing with Raspberry Pi and its Raspbian OS. As it grew, tools were written to help with its development. A project was born and URCade became a framework for building ready-to-use Pi images.";
            card_4.innerHTML = "The Playground contains mini-games I developed for my toddler to play. They are simple games and clones I developed just to exercise and learn. I'll tell you: he loves them! =)"
            form_title.innerHTML = "Leave me a message!"
            form_input.placeholder = "   name"
            form_input2.placeholder = "   e-mail"
            form_message.placeholder = " type your message"
            form_btn.innerHTML = "Send"
            break;
        
        case 'pt-br':
            //active button
            if(mode == 'dark'){mode_button.innerHTML = "Plasma";}
            if(mode == 'light'){mode_button.innerHTML = "Sombra";}
            lang_button.innerHTML = "en-US";
            //menu
            cv.innerHTML = 'Curriculo';
            cv.href = "pdf/Tarso Galvao CV 2022 PT-BR.pdf"
            ct.innerHTML = 'Contato';
            //head
            ht.innerHTML = 'Desenvolvedor Full-Stack'
            //cards
            card_0.innerHTML = "Estas s??o as linguagens que aprendi durante meus estudos e nas quais desenvolvo meus projetos. Mas estou sempre a procura de novos conhecimentos."
            card_1.innerHTML = "No Github voc?? pode encontrar meus estudos e projetos, que procuro manter sempre atualizados. Contribuidores s??o bem vindos! De web-design ?? engine de jogos, algor??tmos e arte ?? scripts em bash, ?? l?? que vai encontrar. Vai l?? dar uma fu??ada!";
            card_2.innerHTML = "No Linkedin est??o listados meus certificados de cursos e bootcamps que conquistei.";
            card_3.innerHTML = "URCade ?? uma plataforma que transforma seu Raspberry Pi em um multi video-game retr??. O sistema foi inicialmente criado como um exerc??cio para lidar com o Raspberry Pi e seu sistema operacional. Com o tempo o exerc??cio cresceu e v??rias ferramentas foram desenvolvidas durante o processo, at?? que nasceu o Projeto URCade como um framework para sistemas embarcados.";
            card_4.innerHTML = "O Playground ?? onde hospedo os mini-games que desenvolvi para meu filhote jogar. S??o jogos simples e clones que desenvolvo apenas como exerc??cio e estudo. Posso dizer que ele adora! =)";
            form_title.innerHTML = "Deixe uma mensagem!"
            form_input.placeholder = "   nome"
            form_input2.placeholder = "   e-mail"
            form_message.placeholder = " deixe sua mensagem"
            form_btn.innerHTML = "Enviar"
            break;
    }
}

//toggle dark/light mode
mode_button.addEventListener('click', function(){
    for (i = 0; i < classArray.length; i++) {
        classArray[i].classList.toggle('dark-mode');
    }
    if(body.classList.contains('dark-mode')) {
        mode = 'dark';
    } else mode = 'light';
    changeBodyText(language); 
});

//toggle language
lang_button.addEventListener('click', function(){
    if (language == 'en-us') language = 'pt-br';
    else language = 'en-us';
    changeBodyText(language);
});

//start page language
if(window.navigator.language == 'pt-BR' || 
    window.navigator.language == 'pt-br' || 
        window.navigator.language == 'pt'){ changeBodyText('pt-br'); } 
else changeBodyText('en-us');