var CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
function iniciarJogo() {
    var cores = CSS_COLOR_NAMES;
    var vetorCores = [];
    var bool; // utilizado no loop
    var corUsuario; //cor escolhida pelo usu??rio
    var vidas = 5;
    while (vetorCores.length < 10) {
        vetorCores[vetorCores.length] = cores[Math.floor(Math.random() * (cores.length - 1)) + 1];
        vetorCores = vetorCores.filter(function (v, i, a) { return a.indexOf(v) === i; });
    }
    //preenche o vetor de cores randomicamente e impede a duplicidade de valores.
    vetorCores.sort(); // ordena as cores alfabeticamente 
    var corEscolhida = Math.floor(Math.random() * (vetorCores.length - 1)) + 1; //escolhe aleat??riamente uma posi????o do vetor cores
    var vetorCores2 = vetorCores.map(function (vetorCores) { return vetorCores.toUpperCase(); }); //cria um novo vetor cores para MAISCULO.
    while (!bool) {
        corUsuario = prompt("Eu estou pensando em uma dessas cores: \n" + vetorCores.join(', ') + "\nEm qual delas eu estou pensando?\n" + "Voc\u00EA tem ".concat(vidas, " vidas restantes"));
        corUsuario = corUsuario.toUpperCase(); //cor do usu??rio para MAIUSCULO
        if (vidas == 0) {
            bool = true;
            document.getElementById("msg").innerHTML = "Tente novamente.";
            alert("Vidas esgotadas\nFim de jogo.");
        }
        else {
            if (vetorCores2.indexOf(corUsuario) < 0) {
                alert("Cor inexistente");
            }
            else {
                if (corUsuario == vetorCores2[corEscolhida]) {
                    alert("Voc?? acertou!");
                    bool = true;
                    document.body.style.background = corUsuario;
                    document.getElementById("msg").innerHTML = "A cor \u00E9: ".concat(vetorCores[corEscolhida]);
                }
                else {
                    var res = corUsuario.localeCompare(vetorCores2[corEscolhida]);
                    var dica = "Dica: a cor escolhida ?? alfabeticamente ";
                    if (res == -1) {
                        dica += "maior do que a que voc?? escolheu";
                    }
                    else {
                        dica += "menor do que a que voc?? escolheu";
                    }
                    vidas--;
                    alert("Desculpe! Sua resposta n\u00E3o est\u00E1 correta!\n".concat(dica, "\nPor favor tente novamente."));
                }
            }
        }
    }
}
