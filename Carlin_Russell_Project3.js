var phrase = "CODINGISFUN",
    friendsOnline = true

var getStarted = function (spellOut) {
    console.log("I think my Minecraft world needs some decoration. How about giant letters spelling out " + spellOut + "! Yeah, that is just what this place needs!")
        if (friendsOnline == true) {
            console.log("Some friends are on, maybe I could get their help. But first I need to figure out what I'm going to make it out of.")
        } else {
            console.log("Seems everyone is offline... I guess I'll have to do this all on my own. Well, what should I make it out of?")
        };
};

var getMaterial = function () {
    var materials = ["cobblestone", "wood", "wool"]
        matPick = [Math.floor(Math.random()*materials.length)]
    console.log("I think " + matPick + " would look good.")
        if (friendsOnline == true) {
            console.log("I'll need to gather the " + matPick + " but I wonder if anyone has any I could borrow?")
        } else {
            console.log("Everyone is offline, so I guess I'll have to harvest the " + matPick + " without help.")
        };
    return matPick;
};

var getBlocks = function (letter) {
    var letters = {
        eleven: ["B", "H", "M", "N", "Q", "R", "S", "U", "Q", "Z"],
        ten: ["A", "E", "G", "I", "K", "P"],
        nine: ["C", "D", "V", "X"],
        eight: ["F", "J", "O"],
        seven: ["Y", "T", "L"]
    };
    function convert(array) {
        var object = {};
        for (var i = 0; i < array.length; i++) {
            object[array[i]]="";
        };
        return object;
    };
    if (letter in convert(letters.eleven)) {
        return 11;
    } else {
        if (letter in convert(letters.ten)) {
            return 10;
        } else {
            if (letter in convert(letters.nine)) {
                return 9;
            } else {
                if (letter in convert(letters.eight)) {
                    return 8;
                } else {
                    return 7;
                };
            };
        };
    };
};

var getResources = function (matPick) {
    var letters = phrase.split(""),
        need = 0
    console.log(letters)
        for (i = 0, l = letters.length; i < l; i++) {
            need = need + getBlocks(letters[i]);
        console.log(need)
        };
    return need;
};

need = getResources()
// console.log(need)