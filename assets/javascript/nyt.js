'use strict';

$('#submit').on('click', function() {

    var $search_term = $('#search_term').val(),

        //use this with <input> type="text"
        $start_year = parseInt($('#start_year').val()+'0101'),
        $end_year = parseInt($('#end_year').val()+'0101'),


        // // use this with <input> type="date"
        // $start_year = parseInt($('#start_year').val().replace(/-/g, '')),
        // $end_year = parseInt($('#end_year').val().replace(/-/g, '')),

        url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': $search_term,
        'begin_date': $start_year,
        'end_date': $end_year,
        'page': 0

    });


    console.log(url);
    $.ajax({ url: url, method: 'GET' })

    .done(function(result) {

        console.log(result);
        // $('#output').html(
        //                 "<h3>Article title: "+result.response.docs[0].headline.main+"</h3>"
        //             // +   "<h5>"+result.response.docs[0].headline.main+"</h5>"
        //             );

    }).fail(function(err) {

        throw err;

    });

});

