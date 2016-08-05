'use strict';

$('#submit').on('click', function() {

    var $search_term = $('#search_term').val(),
        $start_year = $('#start_year').val(),
        $end_year = $('#end_year').val(),

        url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': $search_term,
        'begin_date': $start_year,
        'end_date': $end_year,
        'page': 0

    });


    console.log(url);
    $.ajax({
        
        url: url,
        method: 'GET',

    }).done(function(result) {

        console.log(result);
        // $('#output').html(
        //                 "<h3>Article title: "+result.response.docs[0].headline.main+"</h3>"
        //             // +   "<h5>"+result.response.docs[0].headline.main+"</h5>"
        //             );

    // }).fail(function(err) {

    //     throw err;

    });

});

