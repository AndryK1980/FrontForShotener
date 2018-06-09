$(document).ready(function(){
    $('#send').on('click', sendUrl);
});
var API_URL = 'http://localhost:4000'
var sendUrl = function(){
    var url = $('#url').val();
    var shotUrlInput=$('#shot').val();
    $.ajax({
        url: API_URL + '/urls',
        method: 'POST',
        dataType: 'json',
        data: {url: url},
        success: function(res){
            console.log(res.body);
            shotUrlInput=res;
        },
        error: function(err){
            console.log(err)
        }

    })
}