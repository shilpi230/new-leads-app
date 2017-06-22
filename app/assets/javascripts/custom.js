jQuery(function($){

$("#acc_search").click(function(){
// $("select#zone").empty().trigger('change');
  var val1 = $('#acc_search_value').val();
  var val2 = $('#cont_search_value').val();
  if($('#acc_search_value').val()){
    find_accounts(val1);
  }else if($('#cont_search_value').val()){
    find_contacts(val2);
  }
});

// $('ul#lists').on('click', '.account_id', function (event) {
//   var val = $(this).attr('at');
//   console.log(val);
//   find_contacts(val);
// });
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
      $('#search-results').append($('<input type="radio" name="contacts" value="' + cont_obj[j]["id"] + '" checked>' + '<strong>'+acc_obj["name"]+'</strong><br>'+cont_obj[j]["name"] + '</input><br />'));
    }
  }
    // $('<li/>', {}).append($('<a>', {
    //     'id':obj["id"],
    //     'at': obj["id"],
    //     'text': obj["name"]
    // }, '</a>')).insertAfter("a#account_id_"+acc_id);
    // $("a#account_id_"+acc_id).append($('<li/>', {
    //   'id':obj["id"],
    //   'text': obj["name"]
    // }));
    // '<ul><li>' + obj["name"] +'</ul></li>');
}

function fill_contacts(data, obj)
{
  for (var i = 0; i < data.length; i++) {
      var cont_obj = data[i];
      var acc_obj = cont_obj["account"];
      $('#search-results').append($('<input type="radio" name="contacs" value="' + cont_obj["id"] + '" checked>' + '<strong>'+acc_obj["name"]+'</strong><br>'+cont_obj["name"] + '</input><br />'));
  }
}
//
// function select_has_changed(obj)
// {
//   $.ajax({
//    url: "/list_accounts",
//    data: {value: obj},
//    type: "GET",
//    success: function (data) { fill_up_form(data, obj) }
//  });
// }
//
// function fill_up_form(data, obj)
// {
//
//   for (var i = 0; i < data.length; i++) {
//     var obj = data[i];
//     if (obj["searchable_type"] == "Account") {
//       $('ul#lists').append("[Account Name]").append($('<li>', {    //here appending `<li>`
//       }, '</li>').append($('<a>', {
//           'id': 'account_id_'+obj["id"],
//           'at': obj["id"],
//           'class': 'account_id',
//           'text': obj["content"]
//       }, '</a>')));
//       // $("ul#lists").append('<li><a href="/user/messages">' + obj["content"] +'</li>');
//     }
//     else{
//       $('ul#lists').append("[Contact Name]").append($('<li>', {    //here appending `<li>`
//       }, '</li>').append($('<a>', {
//           'id': obj["id"],
//           'at': obj["id"],
//           'text': obj["content"]
//       }, '</a>')));
//     }
//   }
// }

  // function fill_contacts(data, obj)
  // {
  //   var acc_id = obj;
  //   for (var i = 0; i < data.length; i++) {
  //
  //     var obj = data[i];
  //     $('<li/>', {}).append("[Contact Name]").append($('<a>', {
  //         'id':obj["id"],
  //         'at': obj["id"],
  //         'text': obj["name"]
  //     }, '</a>')).insertAfter("a#account_id_"+acc_id);
  //     // $("a#account_id_"+acc_id).append($('<li/>', {
  //     //   'id':obj["id"],
  //     //   'text': obj["name"]
  //     // }));
  //     // '<ul><li>' + obj["name"] +'</ul></li>');
  //   }
  // }
  //

//   $('#myModal').on('close', function() {
//     $(this).data('myModal').$element.removeData();
// })

});
