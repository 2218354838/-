$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/json/1.json",
        data:"post",
        dataType:"json",
        success:function(res){
            console.log(res);
            $.each(res,function(index,value){
                $(".header1").append("<li><a href=''>"+value.name+"</a></li>")
            })
        
        },
        error:function(){
            console.log("失败")
        }
        
        
    })
})



$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/json/2.json",
        data:"post",
        dataType:"json",
        success:function(res){
            console.log(res);
            $.each(res,function(index,value){
                $(".footer3").append("<p><a href=''>"+value.name+"</a></p>")
            })
        
        },
        error:function(){
            console.log("失败")
        }
        
        
    })
})




$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/json/3.json",
        data:"post",
        dataType:"json",
        success:function(res){
            console.log(res);
            $.each(res,function(index,value){
                $(".center3").append("<div class='col-sm-6 col-sx-12 center5'><a><img src='img/"+value.firstChild+"'><div class=center3_2></div></div></a></div>")
                $.each(value.secondChild,function(ina){
                    $(".center3_2").eq(index).append("<div class='center3_3'><img src='img/"+res[index].secondChild[ina].name+"'><div class='center3_4'>"+res[index].secondChild[ina].name1+"</div><span>"+res[index].secondChild[ina].name2+"</span></div>")
                })
            })
        
        },
        error:function(){
            console.log("失败")
        }
        
        
    })
})
