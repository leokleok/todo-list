$(document).ready(function(){

 $(".input-group-addon").click(function(){
   console.log('button working')
   var toAdd = $(".form-control").val()

   $(".todo-now").append(
     "<td>" + toAdd + "</td>" +
     '<td class="text-right">' +
     '<button class="btn btn-danger"><i class="glyphicon glyphicon-remove"></i></button>' +
     '<button class="btn btn-success"><i class="glyphicon glyphicon-ok"></i></button>' +
     "</td>"
   );
 });
});
