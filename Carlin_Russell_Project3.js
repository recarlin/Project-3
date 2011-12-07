var phrase = "SDI IS SWEET",
    friendsOnline = true
var getStarted = function (spellOut) {
    console.log("I think my Minecraft world needs some decoration. How about giant letters spelling out " + spellOut + "! Yeah, that is just what this place needs!")
        if (friendsOnline == true) {}
};

var getBlocks = function (letter) {
    var letters = {
        eleven: ["B", "H", "M", "N", "Q", "R", "S", "U", "Q", "Z"],
        ten: ["A", "E", "G", "I", "K", "P"],
        nine: ["C", "D", "V", "X"],
        eight: ["F", "J", "O"],
        seven: ["Y", "T", "L"]
    };
    function convert(a) {
        var o = {};
        for(var i = 0; i < a.length; i++) {
            o[a[i]]='';
        };
        return o;
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
l = getBlocks("Y")
console.log(l)