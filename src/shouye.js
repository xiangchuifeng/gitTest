!function(){
    $("div").click(function(){
      $("div").css({"background":"#895623"});
    });
    $("button").click(function(e){
        alert("nihao");
        e.stopPropagation();

    });
}();