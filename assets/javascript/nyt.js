'use strict';

$('#submit').on('click', function() {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': 'donald trump'

    });

    $.ajax({
        
        url: url,
        method: 'GET',

    }).done(function(result) {
        
        $('#output').html("Article title: "+result.response.docs[0].headline.main);

    }).fail(function(err) {

        throw err;

    });

});

