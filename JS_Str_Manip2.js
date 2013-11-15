var message = "THE QUICK WN F JUMS VE THE LAZY G THA QOECK BRIWN FIX JOMPS FgitVAR THA LUZY DIG THA QECK 
IWN FI JMS IVA THA LUZY IG QUICK JUMS LAZY QUICK BROWN JUMPS OVER LAZY THU QIACK BREWN FEX JIMPS EVUR THU 
LOZY DEG EHT KCIUQ BROWN FOX JUMPS REVO EHT LAZY DOG THA QOECK WN F JOMS ONDIPINDINT VA THA LUZY G AHT 
KCEOQ BRIWN FIX JOMPS LVAR AHT LUZY DIG";

//Remove all letters that appear in the word 'PUZZLE'
function func1(message) {
    return message.replace(/[PUZZLE]/g,"");
};

//Replace each vowel with the one before it (a→u, e→a, i→e, o→i, u→o).
function func2(message) {
    var aMessage = message.split("");
    for ( var i = 0; i < aMessage.length; ++i ) {
        switch( aMessage[i] ) {
            case 'a': case 'A':
                aMessage.splice(i, 1, 'U');
                break;
            case 'e': case 'E':
                aMessage.splice(i, 1, 'A');
                break;
            case 'i': case 'I':
                aMessage.splice(i, 1, 'E');
                break;
            case 'o': case 'O':
                aMessage.splice(i, 1, 'I');
                break;
            case 'u': case 'U':
                aMessage.splice(i, 1, 'O');
                break;
        }
    }
    
    return aMessage.join("");
}

//Reverse every word that starts with a letter in the second half of the alphabet.
function func5(message) {
    var aMessage = message.split(" ");
    var nz = "NOPQRSTUVWXYZ".split("");
    for ( var i = 0; i < aMessage.length; ++i ) {
        var letterToMatch = aMessage[i].charAt(0);
        for ( var j = 0; j < nz.length; ++j ) {
            if ( letterToMatch === nz[j] ) 
                aMessage.splice( i, 1, aMessage[i].split("").reverse().join("") );
        }
    }
    return aMessage.join(" ");    
}

//Insert "P" one left of the middle of every word that has an even number of letters.
function func7(message) {
    var aMessage = message.split(" ");
    for ( var i = 0; i < aMessage.length; ++i ) {
        if ( aMessage[i].length === 2 ) {
            var aWord = aMessage[i].split("");
            aWord.splice( 1, 0, "P" );
            aMessage[i] = aWord.join("");
        }
        else if ( aMessage[i].length % 2 === 0 ) {
            var insertPos = aMessage[i].length / 2 - 1;
            aWord = aMessage[i].split("");
            aWord.splice( insertPos, 0, "P" );
            aMessage[i] = aWord.join("");
        } 
    }
    
    return aMessage.join(" ");
}

//Remove every word that doesn't start with a vowel.
function func8(message) {
    var aMessage = message.split(" ");
    var vowels = /[AEIOU]/;
    for ( var i = 0; i < aMessage.length; ++i ) {
        var letterToCheck = aMessage[i].charAt(0);
        if ( letterToCheck.match(vowels) ) {
            continue;
        } else {
            aMessage[i] = "";
        }
    }
    aMessage = aMessage.join(" ");
    return aMessage.replace(/\s/g, ' ');
}

//Remove all words that have 3 letters or less.
function func9(message) {
    var aMessage = message.split(" ");
    for ( var i = 0; i < aMessage.length; ++i ) {
        if ( aMessage[i].length > 3 )
            continue;
        else
            aMessage[i] = "";
    }
    aMessage = aMessage.join(" ");
    return aMessage.replace(/\s/g, ' ');
}

//Remove all whitespaces.
function func10(message) {
    var aMessage = message.split(" ");
    return aMessage.join("");
}