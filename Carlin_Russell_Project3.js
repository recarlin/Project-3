var getBlocks = function (letter) {
    var letters = {
        eleven: ["B", "H", "M", "N", "Q", "R", "S", "U", "Q", "Z"],
        ten: ["A", "E", "G", "I", "K", "P"],
        nine: ["C", "D", "V", "X"],
        eight: ["F", "J", "O"],
        seven: ["Y", "T", "L"]
    };
    if (letter in letters.eleven) {
      console.log(11)  
    };
};

getBlocks("B")