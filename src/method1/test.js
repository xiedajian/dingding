/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/6/8
 * Time: 18:38
 */

require('./design.css');
require('./css.css');


/**
 * 接受拖拽，自定义排序
 * */
$( ".right" ).sortable({
    revert: true,

});



/**
 * 设置整体的拖拽对象配置
 * */
$( ".item" ).draggable({
    connectToSortable: ".right",
//        handle:'#tem1handle',
    helper: "clone",
//        helper: function (ui) {
//            console.log(ui);
//            console.log(this);
//            return  $(this).find('.wf-widgetsitem')[0];
//        },
    revert: "invalid",
//        revert: true,
    zIndex:100,
    scroll: false,
});


/***
 *  接受拖拽
 */
//    $( ".right" ).droppable({
//        accept:'*',
//        drop:function (event,ui) {
//
//            var $item = $(this);    // $(this) 代表的是整个接受容器 .right
//            var temp = ui.helper.find('.wf-component');
//            $(this).append(temp);
//        }
////        activate: function( event, ui ) {
//////            console.log(ui);
////        },
//
//
//    });