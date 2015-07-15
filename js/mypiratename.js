var FIRST_NAME = {
    "a": "Captain",
    "b": "Dirty",
    "c": "Squidlips",
    "d": "Bowman",
    "e": "Buccaneer",
    "f": "Two Toes",
    "g": "Sharkbait",
    "h": "Old",
    "i": "Peg Leg",
    "j": "Fluffbucket",
    "k": "Scallyway",
    "l": "Bucko",
    "m": "Dead man",
    "n": "Matey",
    "o": "Jolly",
    "p": "Stinky",
    "q": "Bloody",
    "r": "Miss",
    "s": "Mad",
    "t": "Red",
    "u": "Lady",
    "v": "Bretheren",
    "w": "Rapscallion",
    "x": "Landlubber",
    "y": "Wench",
    "z": "Freebooter",
};

var MIDDLE_NAME = {
    "a": "Creeper",
    "b": "Jim",
    "c": "Storm",
    "d": "John",
    "e": "George",
    "f": "O'",
    "g": "Rat",
    "h": "Jack",
    "i": "Legs",
    "j": "Head",
    "k": "Cackle",
    "l": "Patch",
    "m": "Bones",
    "n": "Plank",
    "o": "Greedy",
    "p": "Sea",
    "q": "Mama",
    "r": "Spike",
    "s": "Squiffy",
    "t": "Gold",
    "u": "Yellow",
    "v": "Felony",
    "w": "Eddie",
    "x": "Bay",
    "y": "Thomas",
    "z": "Spot",
};

var LAST_NAME = {
    "a": "From the west",
    "b": "Byrd",
    "c": "Jackson",
    "d": "Sparrow",
    "e": "Of the Coast",
    "f": "Jones",
    "g": "Ned Head",
    "h": "Bart ",
    "i": "O'Fish",
    "j": "Kidd",
    "k": "O'Mally",
    "l": "Barnacle",
    "m": "Holystone",
    "n": "Hornswaggle",
    "o": "McStinky",
    "p": "Swashbuckler",
    "q": "Sea Wolf",
    "r": "Beard",
    "s": "Chumbucket",
    "t": "Rivers",
    "u": "Morgan",
    "v": "Tuna Breath",
    "w": "Three Gates",
    "x": "Baily",
    "y": "Of Atlantis",
    "z": "Of Dark Water",
};

function reset() {
    $('.success').removeClass('active').hide();
    $('.ship').removeClass('active').hide();
    $('.error').hide();
}

reset();

$('button').click(function(event) {
    reset();

    var firstName = $("#firstName").val();
    var middleName = $("#middleName").val();
    var lastName = $("#lastName").val();

    if (firstName.length === 0 || middleName.length === 0 || lastName.length === 0) {
        $('.success').hide();
        $('.error').show();
        return;
    }

    var pirateName = makePirateName(firstName.toLowerCase(), middleName.toLowerCase(), lastName.toLowerCase());

    $("#pirateName").text(pirateName);
    $('.success').show().addClass('active');
    $('.ship').show().addClass('active');
    $('.error').hide();
});

function makePirateName(firstName, middleName, lastName) {

    var firstLetterOfFirstName = firstName[0];
    var firstLetterOfMiddleName = middleName[0];
    var firstLetterOfLastName = lastName[0];

    var pirateName = FIRST_NAME[firstLetterOfFirstName] + " " + MIDDLE_NAME[firstLetterOfMiddleName] + " " + LAST_NAME[firstLetterOfLastName];

    return pirateName;
}
