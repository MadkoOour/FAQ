$("button").click(function(){
    $(this).toggleClass("active");
    $(this).parent().toggleClass("active");

    var pannel = $(this).siblings(".pannel");
    if(pannel.css("display")==="block"){
        pannel.css("display","none");
    }
    else{
        pannel.css("display","block");
    }

    var icon = $(this).find("i");
    if(icon.hasClass("fa-angle-down")){ //the basic is to be down so when i click ("read more") change it to up
        icon.removeClass("fa-angle-down");
        icon.addClass("fa-angle-up");
    }else{ //if it is up ("read more") and i clicked again then turn it to down
        icon.removeClass("fa-angle-up");
        icon.addClass("fa-angle-down");
    }
    
});

