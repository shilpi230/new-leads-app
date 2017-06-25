jQuery(function($){

  $("#search-results").on('click', '.contacts', function() {
    var cont_val = $(".contacts").val();
    console.log("I am here");
    console.log(cont_val);
    find_names(cont_val);
  });

  function find_names(obj){
    $.ajax({
      url: "/name",
      data: {value: obj},
      type: "GET",
      success: function (data) { fill_names(data, obj) }
    });
  }

  function fill_names(data, obj)
  {
    console.log(data[0]["name"]);
    console.log(data[0]["account"]["name"]);
      $('#account_name').val(data[0]["account"]["name"]);
      $('#contact_name').val(data[0]["name"]);
  }



$("#acc_search").click(function(){
  $("#search-results").empty().trigger('change');
  var val1 = $('#acc_search_value').val();
  var val2 = $('#cont_search_value').val();
  if($('#acc_search_value').val()){
    find_accounts(val1);
  }else if($('#cont_search_value').val()){
    find_contacts(val2);
  }
});

function find_accounts(obj){
  $.ajax({
    url: "/list_accounts",
    data: {value: obj},
    type: "GET",
    success: function (data) { fill_accounts(data, obj) }
  });
}

function find_contacts(obj){
  $.ajax({
    url: "/list_contacts",
    data: {value: obj},
    type: "GET",
    success: function (data) { fill_contacts(data, obj) }
  });
}


function fill_accounts(data, obj)
{
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i]["contacts"].length; j++){
      var acc_obj = data[i];
      var cont_obj = acc_obj["contacts"];
      $('#search-results').append(
        $('<input type="radio" name="contacts"  class="contacts" value="' + cont_obj[j]["id"] + '">' + '<strong>'+acc_obj["name"]+'</strong><br>'+cont_obj[j]["name"] + '</input><br />')
      );
    }
  }
}

function fill_contacts(data, obj)
{

  for (var i = 0; i < data.length; i++) {
      var cont_obj = data[i];
      var acc_obj = cont_obj["account"];
      $('#search-results').append($('<input type="radio" name="contacts"  class="contacts" value="' + cont_obj["id"] + '">' + '<strong>'+acc_obj["name"]+'</strong><br>'+cont_obj["name"] + '</input><br />'));
  }
}



});
