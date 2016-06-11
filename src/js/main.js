$(document).ready(function(){

 $(".input-group-addon").click(function(){

   if($(".form-control").val() !== '') {
     var toAdd = $(".form-control").val()
     $("table").append(
       "<tr>" +
       "<td>" + toAdd + "</td>" +
       '<td class="text-right">' +
       '<button class="btn btn-danger"><i class="glyphicon glyphicon-remove"></i></button> ' +
       '<button class="btn btn-success"><i class="glyphicon glyphicon-ok"></i></button>' +
      //  ' <input type="submit id=edit" + value="toAdd"> Edit' +
       "</td>" +
       "</tr>"
     );
   }
   else {
        return false;
   }
 });

// event delegation method. 'table' is the event handler while 'button.btn.btn-danger' does not exist when the document loads, it is generated later by a form entry.
// Deletes Task
 function deleteTodoItem(item) {
  $(item).parent().closest('tr').remove();
}

$('table').on('click', 'button.btn.btn-danger', function(){
  var item = $(this);
  if (!confirm("Are you sure you want to remove this task?")) {
    return false
  };
  deleteTodoItem(item)
});


//parent children method is vulnerable because if someone changes markup positions, this code will break.
//Task completes, it gets strike through.
function completeTodoItem(item) {
  $(item).parents('tr').children('td').first().toggleClass('todo-completed')
}

$('table').on('click', 'button.btn.btn-success', function(){
  var item = $(this);
  completeTodoItem(item)
    // $(this).replaceWith('<button class="btn btn-info"><i class="glyphicon glyphicon-repeat"></i></button>')
});

//edit
  // $('#edit').click(function(){
  //   $(this).prev().attr('contenteditable','true');
  //   $(this).prev().focus();
  // });


//Add a button & remove all completed tasks.
function removeAllCompleted () {
  $('tr').each(function(){
    if($(this).children().first().hasClass('todo-completed')){
    $(this).remove()
    }
  });
}

//Add a button & remove all completed tasks.
$('button.btn.btn-removecomplete').click(function(){
  removeAllCompleted()
});

//remove all tasks
function removeAll () {
  $('tr').remove()
}

//remove all tasks
$('button.btn.btn-removeall').click(function(){
  removeAll()
});


});
