var ourDog = {
    name: "Camper",
    legs: 4,
    tails: 1,
    friends: ["everything!"]
};

var myDog = {
    name: "Quincy",
    legs: 4,
    tails: 1,
    friends: ["everything!"]
};

var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecord(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection;
}
