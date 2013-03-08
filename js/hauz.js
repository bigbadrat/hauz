
var Hauz = {}


Hauz.init = function()
{
    console.log("Initializing Hauz js system");
    var sample = { name:"grissom", series:"csi", channel:"axn"}
    $.ajax({
        type: 'GET',
        url: '/data', // or your absolute-path
        data : "args="+JSON.stringify(sample),
        dataType : 'json',
        success: Hauz.response_handler
        });

    console.log("request sent");
}

Hauz.response_handler = function(response, textStatus, jqXHR)
{
    console.log("Ajax Response is here....." + textStatus );
    console.log(response);
}