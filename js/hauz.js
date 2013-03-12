
var Hauz = {}


Hauz.init = function()
{
    console.log("Initializing Hauz js system");

    $("#hauz_save").click( Hauz.add_hauz );
    $("#hauz_list").click( Hauz.list_hauzes );
}

Hauz.response_handler = function(response, textStatus, jqXHR)
{
    console.log("Ajax Response is here....." + textStatus );
    console.log(response);
}

Hauz.add_hauz = function(e)
{
    console.log("adding a hauz");
    console.log("at " + $("#hauz_direccion").val() );

    var direccion = $("#hauz_direccion").val();

    var mydata = { location:direccion, gps_location:[123.1231 , 35544.123] }
    $.ajax({
        type: 'POST',
        url: '/data', // or your absolute-path
        data : "args="+JSON.stringify(mydata),
        dataType : 'json',
        success: Hauz.response_handler
        });
    e.preventDefault();
    console.log("request sent");
}

Hauz.list_hauzes = function(e)
{
    console.log("list hauzes");
    mydata = {}
    $.ajax({
        type: 'GET',
        url: '/data', // or your absolute-path
        data : "args="+JSON.stringify(mydata),
        dataType : 'json',
        success: Hauz.update_hauzes_table
        });

    e.preventDefault()
}

Hauz.update_hauzes_table = function( response, textStatus, jqXHR)
{
    console.log("received data to update the table")
    $("#hauz_table").html("");
    console.log(response);
    var newhtml = "";
    for ( var i = 1; i <= response.length; i++ )
    {
        newhtml += "<tr> <td> " + i + " </td></tr>" ;
    }
    console.log(newhtml);
    $("#hauz_table").html( newhtml );
}