

   $(document).ajaxSuccess(function() {
        
        if($("h2[class*='course-title']").length > 0){
            if(!added_extra){
                // special tweaks
                $("h3[class*='_chapter__title']").css("padding","22px");
                $("h3[class*='_player-navigation']").css("margin-left","22px");

                
                var course_title = $("h2[class*='course-title']").html();
                var arr = coursejson.rows;
                //find course data
                var course = arr.find(item=>item.coursename==course_title);
                
                if(typeof(course) != "undefined"){
                    console.log("Found Extended Course data");
                    console.log(course);
                    //Sidebar
                    if(typeof(course.bgcolorsidebar) != "undefined"){
                        var bgcolor = course.bgcolorsidebar;
                        $(".brand-background").css("background-color",bgcolor);
                        $(".brand-color").css("background-color",bgcolor);
                        
                    }
                    
                    //NavButtons Dashboard, Chapters, Progress
                    if(typeof(course.bgcolornavbuttons) != "undefined"){
                        var bgcolor = course.bgcolornavbuttons;
                        $(".nav-button").css("background-color",bgcolor);

                    }
                    
                    if(typeof(course.bgcolorchapter) != "undefined"){
                        var bgcolor = course.bgcolorchapter;
                        $("h3[class*='_chapter__title']").css("background-color",bgcolor);
                        if(typeof(course.hovercolorchapter) != "undefined"){
                            var hovercolor = course.hovercolorchapter;
                            $("h3[class*='_chapter__title']").hover(function() {
                              $(this).css("background-color", course.hovercolorchapter)}, function(){
                              $(this).css("background-color", course.bgcolorchapter);
                            });
                        }  
                        
                    }

                  
                    if(typeof(course.fontcolorchapter) != "undefined"){
                        var bgcolor = course.fontcolorchapter;
                        $("h3[class*='_chapter__title']").css("color",bgcolor);
                    }

                    if(typeof(course.bgcolorlesson) != "undefined"){
                        var bgcolor = course.bgcolorlesson;
                        $("a[class*='_content__item']").css("background-color",bgcolor);
                    }
                    if(typeof(course.fontcolorlesson) != "undefined"){
                        var bgcolor = course.fontcolorlesson;
                        $("a[class*='_content__item']").css("color",bgcolor);
                    }

                    if(typeof(course.showlessondetails) != "undefined"){
                        if(course.showlessondetails == "FALSE"){
                            $("div[class*='_details__container']").hide();
                        }
                        
                    }
                    
                    if(typeof(course.showthinkific) != "undefined"){
                        if(course.showthinkific == "FALSE"){
                            $("div[class*='_thinkific-footer']").hide();
                        }
                        
                    }

                    if(typeof(course.returnto) != "undefined"){
                        if(course.returnto != ""){
                            $("a[class*='_link__dashboard']").attr('href', course.returnto);
                        }
                        
                    }

                    if(typeof(course.logoimage) != "undefined"){
                        if(typeof(course.logobgcolor) != "undefined") {
                            var bgcolor = "background-color:" + course.logobgcolor;
                        }
                        var item_img = "<div style='padding:10px;" + bgcolor + "'><img src='" + course.logoimage + "' style='width:40%;display: block;margin-left: auto;margin-right: auto;'></div>"            
                        $(".brand-background").prepend (item_img);

                        
                    }
                    
                    
                } else {
                    console.log("Did not find extended Course data");
                }
               
                added_extra = true;


            }
    
    
        }
     
        
    });