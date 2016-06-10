$(document).ready(function(){

 $(".input-group-addon").click(function(){

   if($(".form-control").val() !== '') {
     var toAdd = $(".form-control").val()
     $("table").append(
       "<tr>" +
       "<td>" + toAdd + "</td>" +
       '<td class="text-right">' +
       '<button class="btn btn-danger"><i class="glyphicon glyphicon-remove"></i></button>' +
       '<button class="btn btn-success"><i class="glyphicon glyphicon-ok"></i></button>' +
       "</td>" +
       "</tr>"
     );
   }
   else {
        return false;
   }
 });

// event delegation method. 'table' is the event handler while 'button.btn.btn-danger' does not exist when the document loads, it is generated later by a form entry.
 function deleteTodoItem(item) {
  $(item).parent().closest('tr').remove();
}

$('table').on('click', 'button.btn.btn-danger', function(){
  var item = $(this);
  deleteTodoItem(item)
});

$('button.btn.btn-success').click(function() {
  // console.log("Hi")
   $(this).parents('tr').addClass('todo-completed')
  });
});
