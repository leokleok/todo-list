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

 function deleteTodoItem(e, item) {
  e.preventDefault();
    $(item).parent().closest('tr').remove();
}

$('table').on('click', 'button.btn.btn-danger', function(e){
  var item = $(this);
  console.log($(this))
  deleteTodoItem(e, item)
});

// $('button.btn.btn-success').on('click', function(){
//   $(".todo-completed").
//   console.log($(this))
//   });

});
