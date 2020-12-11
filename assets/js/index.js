/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(document).keyup(function(event){
    if (event.keyCode == 13) {

        if($("#title") !== '' && $("#title").val().trim()){
            $('.demo-box').prepend(`<li><input type="checkbox" class="l">
            <p class="l">${ $("#title").val()}</p>
            <a class="r">-</a>
            </li>`)
        }

        $('#todocount').text($("#todolist li").length)
        $('#donecount').text($("#donelist li").length)

        //删除
        $jian1 = $("#todolist li a")
        $.each($jian1,function(){
            $(this).on('click',function(){
                $(this).parent().remove()
            })
        });

        $jian2 = $("#donelist li a")
        $.each($jian2,function(){
            $(this).on('click',function(){
                $(this).parent().remove()
            })
        });
        $("#title").val('')
    }
    // $(this).val('')
});

//数量
$(window).on('load',function(event){
    $donelistli = $("#donelist li input")
    $('#todocount').text($("#todolist li").length)
    $('#donecount').text($("#donelist li").length)
})


//转移 
// 上到下
$('body').on('mousedown',function(event){
    $("#todolist li input").on('click',function(){
        $.each($("#todolist li"),function(index,value){
            // console.log($(value).children(':first').val())
            if ($(value).children(':first').is(":checked")){
                $(value).children(':first').parent().clone(true).appendTo("#donelist")
                $(value).children(':first').parent().remove()
            }
        })
        //下到上
        // console.log($("#donelist li input"))
    
        $("#donelist li input").on('click',function(){

            $.each($("#donelist li"),function(index,value){

                if($(value).children(':first').is(":checked")){

                }else{
                    $(value).children(':first').parent().clone(true).appendTo("#todolist")
                    $(value).children(':first').parent().remove()
                }
            })
        })
    })
    
})


// 删除
$jian1 = $("#todolist li a");
$.each($jian1,function(){
    $(this).on('click',function(){
        $(this).parent().remove()
    })
});

$jian2 = $("#donelist li a");
$.each($jian2,function(){
    $(this).on('click',function(){

        $(this).parent().remove()
    })
});

//数量

$(document).on('click',function(event){

    $('#todocount').text($("#todolist li").length)
    $('#donecount').text($("#donelist li").length)
});

//已完成默认选中
$list2 = $("#donelist li input")
// console.log($list2)
$.each($list2,function(index,value){
    // console.log(value)
    value.checked = true;
});










// function button_translateClick() {    事件内容 }

// function text_wordKeydown(e) {//这个是文本框的回车的事件，调用上边提交的事件
//     if (!e) e = window.event;
//     switch (e.keyCode | e.which | e.charCode) {
//         case 13:
//             button_translateClick();
//             break;
//     }
// }