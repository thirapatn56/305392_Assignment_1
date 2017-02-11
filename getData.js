$(document).ready(function(){
    $("button").click(function(){
      $("div").empty();
        $.getJSON("https://jsonplaceholder.typicode.com/users?username="+$("#username").val(), function(result){
            $.each(result, function(i, field){
                $("div").append("<p>Name : " + field.name + "</p>");
                $("div").append("<p>Email : " + field.email + "</p>");
                $("div").append("<p>Address : " + field.address.street + " " + field.address.suite + " " + field.address.city + " " + field.address.zipcode + "</p>");
                $("div").append("<p>Phone : " + field.phone + "</p>");
                $("div").append("<p>WebSite : " + field.website + "</p>");
                $("div").append("<p>Company : " + field.company.name + "</p>");
            });
        });
    });
});
