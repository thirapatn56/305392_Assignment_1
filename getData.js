$(document).ready(function(){
    //ชือก็บอกว่า getjson จาก  url แล้วทำฟังก์ชัน result
    $("button").click(function(){
      $("div").empty();
        $.getJSON("https://jsonplaceholder.typicode.com/users?username="+$("#username").val(), function(result){
            //เอา result ใส่ field
            $.each(result, function(i, field){
              // อ่าน result ใน field
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
