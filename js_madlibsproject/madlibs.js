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
    noun1 = $('#noun1').val();
    noun2 = $('#noun2').val();
    noun3 = $('#noun3').val();
    noun4 = $('#noun4').val();
    adjective1 = $('#adjective1').val();
    adjective2 = $('#adjective2').val();
    adjective3 = $('#adjective3').val();
    verb1 = $('#verb1').val();
    verb2 = $('#verb2').val();
    verb3 = $('#verb3').val();
    adverb1 = $('#adverb1').val();
    adverb2 = $('#adverb2').val();
    adverb3 = $('#adverb3').val();
}
function showInfo(){
    getInfo();
    var message = 

    $('#output').text(message).show().animate({'top':'0px','opacity':'1'}, 'slow');
}