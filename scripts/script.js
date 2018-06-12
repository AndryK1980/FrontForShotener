$(document).ready(function(){
    $('#btn-shorten').on('click', sendUrl);
});
var API_URL = 'https://apiurlshort.herokuapp.com/urls'
var sendUrl = function(){
    var url = $('#url-field').val();
    var userShortUrl=$('#short-url-field').val();
    var shotUrlInput=$('#short-url-link');
    var validErr=$('#massege-err');
    $.ajax({
        url: API_URL + '/urls',
        method: 'POST',
        dataType: 'json',
        data: {url: url,userShortUrl:userShortUrl},
        success: function(res){
            //console.log(res.short_url);
            shotUrlInput.attr('href',res.short_url);
            shotUrlInput.text(res.short_url)
        },
        error: function(err){
            validErr.text(err.responseJSON.message);
            modalErr();
        }

    })
};

var modalErr=function () {
        $("#myModalErr").modal('show');
};