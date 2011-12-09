var phrase = "CODING IS FUN",
    friendsOnline = true;
var getStarted = function (phrase) {
    console.log("I think my Minecraft world needs some decoration. How about giant letters spelling out " + phrase + "! Yeah, that is just what this place needs!");
        if (friendsOnline == true) {
            console.log("Some friends are on, maybe I could get their help. But first I need to figure out what I'm going to make it out of.");
        } else {
            console.log("Seems everyone is offline... I guess I'll have to do this all on my own. Well, what should I make it out of?");
        };
};
var getMaterial = function () {
    var materials = ["cobblestone", "wood", "wool"]
        matPick = materials[Math.floor(Math.random()*materials.length)]
    console.log("I think " + matPick + " would look good.")
        if (friendsOnline == true) {
            console.log("I could go gather " + matPick + " but I wonder if anyone would lend it to me?")
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
                    if (letter in convert(letters.seven)) {
                        return 7;
                    } else {
                        return 0;
                    };
                };
            };
        };
    };
};
var getResources = function (matPick) {
    var letters = phrase.split(""),
        need = 0
        for (i = 0, l = letters.length; i < l; i++) {
            need = need + getBlocks(letters[i]);
        };
        if (matPick == "wood") {
            need = need / 4
            console.log("Since I'm using wood and I get 4 wood from each log, I should only need about " + need + " logs to finish the job.")
        } else {
            console.log("I will need about " + need + " " + matPick + " blocks to finish the job.")
        };
    return need;
};
var getFriend = function () {
    var friend = {
        name: "",
        tool: {},
        ask: function () {
            var yesNo = Math.round(Math.random())
            if (yesNo == 0) {
                return true
            } else {
                return false
            }
        },
        getTool: function () {  
            var getQuality = function () {
                var m = ["diamond", "gold", "iron"]
                q = m[Math.floor(Math.random()*m.length)]
                return q;
            };
            var getType = function () {
                var t = ["sheers", "shovel", "pick"]
                    i = t[Math.floor(Math.random()*t.length)]
                return i;
            };
            var t = {
                type: getType(),
                quality: getQuality(),
                durability: Math.ceil(Math.random()*100)
            };
            friend.tool = t;
        },
        getName: function () {
            var d = ["Johnny", "Paul", "Phil"]
                n = d[Math.floor(Math.random()*d.length)]
            return n;
        }
    };
    return friend
};
var buildLetters = function (matPick, need) {
    var words = phrase.split(" ")
        wordOn = 0
    while (wordOn !== words.length) {
        letters = words[wordOn].split("")
        for (i = 0, l = letters.length; i < l; i++) {
            console.log("Got the " + letters[i] + " done.")
        }
        console.log("Got the " + words[wordOn] + " done.")
        wordOn++
    };
};


var doIt = function (){
    getStarted(phrase)
    matPick = getMaterial()
    need = getResources(matPick);
        if (friendsOnline == true) {
            friend = getFriend();
            friendName = friend.getName()
                console.log("I think I will ask my friend " + friendName + " if they can lend me the resources.");
                console.log("Hey " + friendName + ", can I borrow some " + matPick + " to make something?")
            answer = friend.ask()
                if (answer == true) {
                    console.log("Sure.")
                    console.log("Thanks a lot!")
                } else {
                    console.log("I need my " + matPick + " for a project. Sorry!")
                    console.log("That's fine. Thanks anyway.")
                    console.log("Guess I'll need to get the stuff myself.")
                    friend.getTool()
                    answer = friend.ask()
                    console.log("Could I borrow a tool?")
                        if (answer == true) {
                            console.log("All I have is a " + friend.tool.quality + " " + friend.tool.type + " with " + friend.tool.durability + " durabilty, but sure.")
                            console.log("Thanks!")
                        } else {
                            console.log("Sorry, I'm using my " + friend.tool.quality + " " + friend.tool.type + ".")
                            console.log("That's fine, I'll go ahead and grab everything. See ya later.")
                        };
                };   
        } else {
            console.log("No one is on to get help from. Oh well, I'll go get the stuff myself.")
        };
    console.log("I got all of my materials, time to build!")
        buildLetters()
    console.log("AWESOME! I got " + phrase + " spelled out in big, " + matPick + " letters!")
};

doIt()