let body = document.getElementsByTagName("body");
let piano_padre = document.getElementById("piano_padre");
let volume_bar = document.getElementById("volume_bar");

let white_sounds = ["Escala1/do.mp3","Escala1/re.mp3","Escala1/mi.mp3","Escala1/fa.mp3","Escala1/sol.mp3","Escala1/la.mp3","Escala1/si.mp3",
    "Escala2/do.mp3","Escala2/re.mp3","Escala2/mi.mp3","Escala2/fa.mp3","Escala2/sol.mp3","Escala2/la.mp3","Escala2/si.mp3",
    "Escala3/do.mp3","Escala3/re.mp3","Escala3/mi.mp3","Escala3/fa.mp3","Escala3/sol.mp3","Escala3/la.mp3","Escala3/si.mp3"
];

let black_sounds = ["EscalaB1/do_re.mp3","EscalaB1/re_mi.mp3","EscalaB1/fa_sol.mp3","EscalaB1/sol_la.mp3","EscalaB1/la_si.mp3",
    "EscalaB2/do_re.mp3","EscalaB2/re_mi.mp3","EscalaB2/fa_sol.mp3","EscalaB2/sol_la.mp3","EscalaB2/la_si.mp3",
    "EscalaB3/do_re.mp3","EscalaB3/re_mi.mp3","EscalaB3/fa_sol.mp3","EscalaB3/sol_la.mp3","EscalaB3/la_si.mp3"
];

let white_key_width = 45;
let black_key_width = white_key_width / 2;

let escala_do = ["do","re","mi","fa","sol","la","si"];
let escala_do_intermedias = ["do\nre","re\nmi","fa\nsol","sol\nla","la\nsi"];
let sonidos = 0;

const n_white_keys = 21;
const n_black_keys = 39;
const patron = [2,3];
let num_patron = 0;
let cont = 0;
let num_key = 0;

let white_keys = document.createElement("ul");
white_keys.className = "white_keys";
piano_padre.appendChild(white_keys);

for (let i = 0; i < n_white_keys; i++) {
    let key = document.createElement("li");
    key.id = "white_" + i;
    key.addEventListener("mouseover", () => {
        key.style.background = "rgb(231, 231, 231)";
    });
    key.addEventListener("mouseleave", () => {
        key.style.background = "rgb(244, 244, 244)";            
    });
    let sonido = new Audio(white_sounds[i]);
    key.addEventListener("click", () => {
        sonido = new Audio(white_sounds[i]);
        sonido.volume = volume_bar.value/100;
        sonido.currentTime = 0;
        //alert(key.id);
        sonido.play();
        key.style.boxShadow = "0px 5px 0px rgba(189, 189, 189, 0)";
        key.style.transform = "translateY(4px)";
        setTimeout(() => {
            key.style.boxShadow = "0px 5px 0px rgba(189, 189, 189, 0.546)";
            key.style.transform = "translateY(0px)";
        }, 150);
    });
    white_keys.appendChild(key);
    key.className = "white_key";
    key.style.width = white_key_width + "px";
    if (sonidos == 7) {
        sonidos = 0;
    }
    key.textContent = escala_do[sonidos];
    sonidos ++;
}

sonidos = 0;

let black_keys = document.createElement("ul");
black_keys.className = "black_keys";
piano_padre.appendChild(black_keys);
black_keys.style.marginLeft = black_key_width + black_key_width/2 + "px";

for (let i = 0; i < n_black_keys; i++) {
    let key = document.createElement("li");
    key.id = "black_" + num_key;
    black_keys.appendChild(key);
    if (i % 2 == 0 && cont < patron[num_patron]) {
        key.className = "black_key";
        key.addEventListener("mouseover", () => {
            key.style.background = "rgb(69, 69, 69)";
        });
        key.addEventListener("mouseleave", () => {
            key.style.background = "rgb(20, 20, 20)";
        }); 
        let num_sound = key.id.substring(6);
        num_sound *= 1;
        let sonido = new Audio(black_sounds[num_sound]);
        key.addEventListener("click", () => {
            //alert(key.id);
            num_sound = key.id.substring(6);
            num_sound *= 1;
            sonido = new Audio(black_sounds[num_sound]);
            sonido.volume = volume_bar.value/100;
            sonido.currentTime = 0;
            sonido.play();
            key.style.boxShadow = "0px 4px 0px rgba(58, 58, 58, 0)";
            key.style.transform = "translateY(4px)";
            setTimeout(() => {
                key.style.boxShadow = "0px 4px 0px rgba(58, 58, 58, 0.546)";
                key.style.transform = "translateY(0px)";
            }, 150);
        });
        if (sonidos == 5) {
            sonidos = 0;
        }
        key.textContent = escala_do_intermedias[sonidos];
        num_key ++;
        cont ++;
        sonidos ++;
    } else {
        if (i % 2 == 0) {
            if (num_patron == 0) {
                num_patron = 1;
            } else {
                num_patron = 0;
            }
            cont = 0;   
        }
        key.className = "vacio";
    }
    key.style.width = black_key_width + "px";
}

let fl_dir = "Flauta_Escala1/"
let agujeros = ["fl_orificio1","fl_orificio2","fl_orificio3","fl_orificio4","fl_orificio5","fl_orificio6","fl_orificio7"];
let fl_sounds = [`${fl_dir}do5.mp3`,`${fl_dir}re5.mp3`,`${fl_dir}mi5.mp3`,`${fl_dir}fa5.mp3`,`${fl_dir}sol5.mp3`,`${fl_dir}la5.mp3`,`${fl_dir}si5.mp3`];

for (let i = 0; i < agujeros.length; i++) {
    let agujero = document.getElementById(agujeros[i]);
    agujero.addEventListener("click", () => {
        let sonido = new Audio(fl_sounds[(fl_sounds.length*1-1)-i]);
        sonido.volume = volume_bar.value/100;
        sonido.currentTime = 0;
        sonido.play();
    });
    let back = agujero.style.background;
    agujero.addEventListener("mouseover", () => {
        agujero.style.background = "#2e281b";
    });
    agujero.addEventListener("mouseleave", () => {
        agujero.style.background = back;
    });
}

//bateria
const drum_folder = "Bateria/";
let drum_sounds_names = ["bass_drum", "crash1", "floor_tom", "ride1", "snare1", "tom1", "tom2"];
let drum_sounds = ["bass drum.wav", "crash1.wav", "floor tom.wav", "ride1.wav", "snare1.wav", "tom1.wav", "tom2.wav"];

for (let i = 0; i < drum_sounds.length; i++) {
    let button_drum = document.getElementById(drum_sounds_names[i]);

    button_drum.addEventListener("click", () => {
        let sonido = new Audio(drum_folder + drum_sounds[i]);
        sonido.volume = volume_bar.value/100;
        sonido.currentTime = 0;
        sonido.play();
    });
}
