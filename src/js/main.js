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

$('button').on('click', function(){
  $('.btn btn-danger').remove()

  });
});
