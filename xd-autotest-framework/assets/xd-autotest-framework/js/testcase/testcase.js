/**
 * Created by wanglinfeg on 16/8/8.
 */
function requestItem(data){
  $.main.refreshRight("/ShowDoc/findRequestItemByID", {data:{id:data.id}});
}

$(document).ready(function () {
  var option_run = {
    url:'/Interface/testCurrentCollection',
    success: function(data) {
      $.post("/Interface/showResponseOnView",{collection:data},function(result){
        $("body").html(result);
      });
      //$.main.refreshRight("/Interface/showResponseOnView?id="+data.id);
    }
  };
  var option_save = {
    url:"/Interface/saveCurrentCollection",
    success: function(data) { console.log('+++++++++++++++'+data); alert('This request had been stored into DB!')}
  };

  // ajaxSubmit 
  $("#runBtn").click(function () {
    console.log("ok");
    $("#form").ajaxSubmit(option_run);
  });

  $("#saveBtn").click(function () {
    console.log("ok");
    $("#form").ajaxSubmit(option_save);
  });
});

function addFile(serverId){
  $('#serverIdB').val(serverId);
  $.post("/server/getFile", {serverId:serverId},
    function(data){
      var u=JSON.parse(data);
      var fileArray=u.fileList;
      var s="";
      $("#fileTable tr").empty();
      for(var i=0;i<fileArray.length;i++){
        var row="<tr><td>"+fileArray[i].name+"</td><td>"+fileArray[i].time+"</td></tr>";
        $("#fileTable tr:last").after(row);
      }
      $('#addFile').modal();
    });

}