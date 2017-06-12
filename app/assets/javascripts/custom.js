jQuery(function($){

  $("select#city_id").change(function(){
  $("select#zone").empty().trigger('change');
  select_has_changed(this);
});

$("text#account_name").change(function(){
// $("select#zone").empty().trigger('change');
select_has_changed(this);
});


function select_has_changed(obj)
{
  var value = $(obj).val();
  $.ajax({
   url: "/list_account_contacts",
   data: {value: value},
   type: "GET",
   success: function (data) { fill_up_form(data, obj) }
 });
}

function fill_up_form(data, obj)
{
  $('#search-results').append($('<option>',
   {
      value: "",
      text : "All"
  }));
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    $('select#zone').append($('<option>',
     {
        value: obj["id"],
        text : obj["name"]
    }));
  }
}
});
