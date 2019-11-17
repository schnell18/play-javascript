function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else if (num >= 20) {
        return "Huge";
    }
    return "Change Me";
}

var names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes == par - 2) {
        return names[1]
    }
    else if (strokes == par - 1) {
        return names[2]
    }
    else if (strokes == par) {
        return names[3]
    }
    else if (strokes == par + 1) {
        return names[4]
    }
    else if (strokes == par + 2) {
        return names[5]
    }
    else if (strokes >= par + 3) {
        return names[6]
    }
    return "Change Me";
}

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpah";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
        case 5:
            answer = "delta";
            break;
        default:
            answer = "unknown";
            break;
    }
    return answer;
}

var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
        default:
            answer = "unknown";
            break;
    }
    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}
