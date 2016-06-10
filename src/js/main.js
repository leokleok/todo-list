$(document).ready(function(){

 $(".input-group-addon").click(function(){

   if($(".form-control").val() !== '') {
     var toAdd = $(".form-control").val()
     $(".todo-now").append(
       "<td>" + toAdd + "</td>" +
       '<td class="text-right">' +
       '<button class="btn btn-danger"><i class="glyphicon glyphicon-remove"></i></button>' +
       '<button class="btn btn-success"><i class="glyphicon glyphicon-ok"></i></button>' +
       "</td>"
     );
   }
   else {
        return false;
   }

 });

 $(".btn btn-danger").on("click", function(event){

      console.log('remove');
 });
});
