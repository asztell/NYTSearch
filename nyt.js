var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q"+keyworkd+" + apiKey;
var apiKey = "api-key=&api_key=4e1cd191060c4a94b411c236f8c2613d"
        

$.ajax({url: queryURL, method: 'GET'})
    .done(function(response) {
        var searchTerm = response.docs.keywords[i];
        console.log(searchTerm);
    }

                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                var results = response.data;

                //------------put step 2 in between these dashes--------------------

                //--------------------------------

                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div>");
                    var p = $("<p>").text("RATING: "+rating);
                    var rating = results[i].rating;

                    var animalImage = $("<img>");
                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $("#gifsAppearHere").prepend(animalDiv);
                }

                    /* step 3: 
                        * uncomment the for loop above and the closing curly bracket below
                        * make a div and reference it in a variable named animalDiv
                        * make a paragraph tag and put it in a variable named p
                            * set the text of the paragraph to the rating of the image in results[i]
                        * make an image and reference it in a variable named animalImage
                        * set the image's src to results[i]'s fixed_height.url 

                        * append the p variable to the animalDiv variable
                        * append the animalImage variable to the animalDiv variable

                        * prepend the animalDiv variable to the element with an id of gifsAppearHere

                    */

                    //------------put step 3 in between these dashes--------------------

                    //--------------------------------
                //}