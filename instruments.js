var body = document.getElementsByTagName("body")[0];
var piano_padre = document.getElementById("piano_padre");
var volume_bar = document.getElementById("volume_bar");
var white_sounds = ["Escala1/do.mp3", "Escala1/re.mp3", "Escala1/mi.mp3", "Escala1/fa.mp3", "Escala1/sol.mp3", "Escala1/la.mp3", "Escala1/si.mp3",
    "Escala2/do.mp3", "Escala2/re.mp3", "Escala2/mi.mp3", "Escala2/fa.mp3", "Escala2/sol.mp3", "Escala2/la.mp3", "Escala2/si.mp3",
    "Escala3/do.mp3", "Escala3/re.mp3", "Escala3/mi.mp3", "Escala3/fa.mp3", "Escala3/sol.mp3", "Escala3/la.mp3", "Escala3/si.mp3"
];
var black_sounds = ["EscalaB1/do_re.mp3", "EscalaB1/re_mi.mp3", "EscalaB1/fa_sol.mp3", "EscalaB1/sol_la.mp3", "EscalaB1/la_si.mp3",
    "EscalaB2/do_re.mp3", "EscalaB2/re_mi.mp3", "EscalaB2/fa_sol.mp3", "EscalaB2/sol_la.mp3", "EscalaB2/la_si.mp3",
    "EscalaB3/do_re.mp3", "EscalaB3/re_mi.mp3", "EscalaB3/fa_sol.mp3", "EscalaB3/sol_la.mp3", "EscalaB3/la_si.mp3"
];
var white_key_width = 45;
var black_key_width = white_key_width / 2;
var escala_do = ["do", "re", "mi", "fa", "sol", "la", "si"];
var escala_do_intermedias = ["do\nre", "re\nmi", "fa\nsol", "sol\nla", "la\nsi"];
var sonidos = 0;
var n_white_keys = 21;
var n_black_keys = 39;
var patron = [2, 3];
var num_patron = 0;
var cont = 0;
var num_key = 0;
var white_keys = document.createElement("ul");
white_keys.className = "white_keys";
piano_padre.appendChild(white_keys);
var _loop_1 = function (i) {
    var key = document.createElement("li");
    key.id = "white_" + i;
    key.addEventListener("mouseover", function () {
        key.style.background = "rgb(231, 231, 231)";
    });
    key.addEventListener("mouseleave", function () {
        key.style.background = "rgb(244, 244, 244)";
    });
    var sonido = new Audio(white_sounds[i]);
    key.addEventListener("click", function () {
        sonido = new Audio(white_sounds[i]);
        sonido.volume = parseInt(volume_bar.value) / 100;
        sonido.currentTime = 0;
        //alert(key.id);
        sonido.play();
        key.style.boxShadow = "0px 5px 0px rgba(189, 189, 189, 0)";
        key.style.transform = "translateY(4px)";
        setTimeout(function () {
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
    sonidos++;
};
for (var i = 0; i < n_white_keys; i++) {
    _loop_1(i);
}
sonidos = 0;
var black_keys = document.createElement("ul");
black_keys.className = "black_keys";
piano_padre.appendChild(black_keys);
black_keys.style.marginLeft = black_key_width + black_key_width / 2 + "px";
var _loop_2 = function (i) {
    var key = document.createElement("li");
    key.id = "black_" + num_key;
    black_keys.appendChild(key);
    if (i % 2 == 0 && cont < patron[num_patron]) {
        key.className = "black_key";
        key.addEventListener("mouseover", function () {
            key.style.background = "rgb(69, 69, 69)";
        });
        key.addEventListener("mouseleave", function () {
            key.style.background = "rgb(20, 20, 20)";
        });
        var num_sound_1 = parseInt(key.id.substring(6));
        var sonido_1 = new Audio(black_sounds[num_sound_1]);
        key.addEventListener("click", function () {
            //alert(key.id);
            num_sound_1 = parseInt(key.id.substring(6));
            num_sound_1 *= 1;
            sonido_1 = new Audio(black_sounds[num_sound_1]);
            sonido_1.volume = parseInt(volume_bar.value) / 100;
            sonido_1.currentTime = 0;
            sonido_1.play();
            key.style.boxShadow = "0px 4px 0px rgba(58, 58, 58, 0)";
            key.style.transform = "translateY(4px)";
            setTimeout(function () {
                key.style.boxShadow = "0px 4px 0px rgba(58, 58, 58, 0.546)";
                key.style.transform = "translateY(0px)";
            }, 150);
        });
        if (sonidos == 5) {
            sonidos = 0;
        }
        key.textContent = escala_do_intermedias[sonidos];
        num_key++;
        cont++;
        sonidos++;
    }
    else {
        if (i % 2 == 0) {
            if (num_patron == 0) {
                num_patron = 1;
            }
            else {
                num_patron = 0;
            }
            cont = 0;
        }
        key.className = "vacio";
    }
    key.style.width = black_key_width + "px";
};
for (var i = 0; i < n_black_keys; i++) {
    _loop_2(i);
}
var fl_dir = "Flauta_Escala1/";
var agujeros = ["fl_orificio1", "fl_orificio2", "fl_orificio3", "fl_orificio4", "fl_orificio5", "fl_orificio6", "fl_orificio7"];
var fl_sounds = ["".concat(fl_dir, "do5.mp3"), "".concat(fl_dir, "re5.mp3"), "".concat(fl_dir, "mi5.mp3"), "".concat(fl_dir, "fa5.mp3"), "".concat(fl_dir, "sol5.mp3"), "".concat(fl_dir, "la5.mp3"), "".concat(fl_dir, "si5.mp3")];
var _loop_3 = function (i) {
    var agujero = document.getElementById(agujeros[i]);
    agujero.addEventListener("click", function () {
        var sonido = new Audio(fl_sounds[(fl_sounds.length - 1) - i]);
        sonido.volume = parseInt(volume_bar.value) / 100;
        sonido.currentTime = 0;
        sonido.play();
    });
    var back = agujero.style.background;
    agujero.addEventListener("mouseover", function () {
        agujero.style.background = "#2e281b";
    });
    agujero.addEventListener("mouseleave", function () {
        agujero.style.background = back;
    });
};
for (var i = 0; i < agujeros.length; i++) {
    _loop_3(i);
}
//bateria
var drum_folder = "Bateria/";
var drum_sounds_names = ["bass_drum", "crash1", "floor_tom", "ride1", "snare1", "tom1", "tom2"];
var drum_sounds = ["bass drum.wav", "crash1.wav", "floor tom.wav", "ride1.wav", "snare1.wav", "tom1.wav", "tom2.wav"];
var _loop_4 = function (i) {
    var button_drum = document.getElementById(drum_sounds_names[i]);
    button_drum.addEventListener("click", function () {
        var sonido = new Audio(drum_folder + drum_sounds[i]);
        sonido.volume = parseInt(volume_bar.value) / 100;
        sonido.currentTime = 0;
        sonido.play();
    });
};
for (var i = 0; i < drum_sounds.length; i++) {
    _loop_4(i);
}
//xilofono
var xilof_folder = "Xilofono/xylophone-";
var xilof_sounds = ["".concat(xilof_folder, "c3.wav"), "".concat(xilof_folder, "d3.wav"), "".concat(xilof_folder, "e3.wav"), "".concat(xilof_folder, "f3.wav"), "".concat(xilof_folder, "g3.wav"), "".concat(xilof_folder, "a3.wav"), "".concat(xilof_folder, "b3.wav")];
var xilof_padre = document.getElementById("xilofono_padre");
var xilof_parts = 7;
var start_size = 100;
var _loop_5 = function (i) {
    var part = document.createElement("div");
    var cir1 = document.createElement("div");
    var cir2 = document.createElement("div");
    cir1.style.background = "black";
    cir1.style.width = "10px";
    cir1.style.height = "10px";
    cir1.style.borderRadius = "50%";
    cir2.style.background = "black";
    cir2.style.width = "10px";
    cir2.style.height = "10px";
    cir2.style.borderRadius = "50%";
    part.className = "xilof_part";
    part.style.height = start_size + "px";
    start_size += 8;
    part.addEventListener("click", function () {
        var sonido = new Audio(xilof_sounds[i]);
        sonido.volume = parseInt(volume_bar.value) / 100;
        sonido.currentTime = 0;
        sonido.play();
    });
    part.appendChild(cir1);
    part.appendChild(cir2);
    xilof_padre.appendChild(part);
};
for (var i = 0; i < xilof_parts; i++) {
    _loop_5(i);
}
