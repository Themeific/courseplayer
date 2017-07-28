   $(document).ajaxSuccess(function() {
        
        if($("h2[class*='course-title']").length > 0){
            if(!added_extra){


                if(typeof(course.logoimage) != "undefined"){
                    if(typeof(course.logobgcolor) != "undefined") {
                        var bgcolor = "background-color:" + course.logobgcolor;
                    }
                    var item_img = "<div style='padding:10px 0px;" + bgcolor + "'><img src='" + course.logoimage + "' style='width:" + course.logowidth + "%;display: block;margin-left: auto;margin-right: auto;'></div>"            
                    $(".brand-background").prepend (item_img);

                    
                }
                added_extra = true;


            }
    
    
        }
     
        
    });  