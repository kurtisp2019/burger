/**
 * 
 *      app.js
 * 
 */

// load the burgers from the sql database
loadBurgers();

$("#btn-submit").on("click", function (_e) {
   // _e.preventDefault();

    addBurger();

});

function addBurger() { 

    console.log($("#ta_burger_input").val());
    $.ajax({
        type: "POST",
        url: "/api/burgers",
        data: {
            burger_name: $("#ta-burger-input").val(),
            devoured: 0
        }
    }).then(function (_response) { 

        //location.reload();
  
    });
}

function loadBurgers() { 

    $.ajax({
        type: "GET",
        url: "/api/burgers"
    }).then(function (_response) { 

        var container = $("<div class = 'burger-devoured-container'></div>");
        var name = $("<label>");
        var count = 1;

        for (var i = 0; i < _response.length; ++i) { 

            if (!_response[i].devoured) {
                
                var tableRow = $("<tr>");
                var tableHeaderName = $("<th>");
                var tableHeaderDevour = $("<th>");
                var btnDevour = $(`<button bId = "${_response[i].id}" class="btn-devour">Devour it!</button>`);
                var container = $("<div class = 'burger-name-container'></div>");
                var name = $("<label>");
                name.text(count + ". " + _response[i].burger_name);
                count++;

                btnDevour.on("click", function () { 
                    $.ajax({
                        type: "PUT",
                        url: "/api/burgers/" + $(this).attr("bId"),
                        data: {
                            devoured: 1,
                        }
                    }).then(function (_res) { 
                        location.reload();
                    });
                });
                container.append(name);
                tableHeaderName.append(container);
                tableHeaderDevour.append(btnDevour);
                tableRow.append(tableHeaderName);
                tableRow.append(tableHeaderDevour);

                
                $("#burger-list").append(tableRow);
                
            }
        }
        count = 1;
        for (var i = 0; i < _response.length; ++i) {
            
            if (_response[i].devoured) {
               
                var tableRow = $("<tr>");
                var tableHeaderName = $("<th>");
                var container = $("<div class = 'burger-devoured-container'></div>");
                var name = $("<label>");
                name.text(count + ". " + _response[i].burger_name);
                count++;

                container.append(name);
                tableHeaderName.append(container);
                 tableRow.append(tableHeaderName);
                
                $("#devoured-list").append(tableRow);
            }
        }
        
    });
}