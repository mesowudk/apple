
// 모달
$(function(){
    $("#modal").hide();
    $("#login_icon").on("click",function(){
        $("#modal").slideToggle();
    });
   
    $("#close_btn").on("click",function(){
      $("#modal").hide();
    });
});

