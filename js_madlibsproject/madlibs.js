$(document).ready(function(){
    $('#button').click(function(){
        showInfo();
    })
})

var noun1
var noun2
var noun3
var noun4
var adjective1
var adjective2
var adjective3
var verb1
var verb2
var verb3
var adverb1
var adverb2
var adverb3

function getInfo(){
    noun1=$('#noun1').val();
}
function getInfo(){
    noun2=$('#noun2').val();
}
function getInfo(){
    noun3=$('#noun3').val();
}
function getInfo(){
    noun4=$('#noun4').val();
}
function getInfo(){
    adjective1=$('#adjective1').val();
}
function getInfo(){
    adjective2=$('#adjective2').val();
}
function getInfo(){
    adjective3=$('#adjective3').val();
}
function getInfo(){
    verb1=$('#verb1').val();
}
function getInfo(){
    verb2=$('#verb2').val();
}
function getInfo(){
    verb3=$('#verb3').val();
}
function getInfo(){
    adverb1=$('#adverb1').val();
}
function getInfo(){
    adverb2=$('#adverb2').val();
}
function getInfo(){
    adverb3=$('#adverb3').val();
}
function showInfo(){
    getInfo();
    var message = 'How does a ' + noun1 + ',' + noun2 + ', son of a ' + noun3 + 'And a ' + noun4 + ', dropped in the middle of a forgotten spot in the Caribean, By providence, impoverished, in squalor, grow up to be a hero and a scholar?' + 'The 10 dollar'
    //* Founding father without a father      Got a lot farther by working a lot harder, by being a lot smarter     By being a self-starter, by 14 they placed him in charge of a trading charter     And everyday while slaves were being slaughtered and carted away      Across the waves, he struggled and kept his guard up     Inside he was longing for something to be a part of      The brother was ready to beg, steal, borrow or barter';*//

    $('#output').text(message).show().animate({'top':'0px','opacity':'1'}, 'slow');

}