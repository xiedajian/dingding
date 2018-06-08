/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/6/8
 * Time: 18:38
 */

require('./design.css');
require('./css.css');


var data = {
    textfield:{
        label:'<div class="wf-widgetsitem"><label>单行输入框</label><i class="widgeticon iconfont textfield"></i></div>',
        template:`<div class="wf-component wf-component-textfield hover">
            <div class="wf-remove icon icon-close"></div>
            <div class="wf-overlay"></div>
            <div class="wf-componentview">
                <div class="wf-componentview-border"><label class="wf-componentview-label">单行输入框</label><span
                        class="wf-componentview-placeholder">请输入</span></div>
            </div>
        </div>`,
        data:'',
        config:{
            title:''
        },
    },
    textareafield:{},

}

var num=1;
/**
 * 接受拖拽，自定义排序
 * */
$( ".right" ).sortable({
    revert: true,
    placeholder: "xdk-zhanwei",     // 拖动排序时占位符加上class
    forcePlaceholderSize: true,     // 如果为 true，强制占位符（placeholder）有一个尺寸
    forceHelperSize: true,        // 如果为 true，强制helper有一个尺寸
    helper: "clone",
    revert:true,
    scroll: false,
    update: function( event, ui ) {
        console.log(ui)
    }

});



/**
 * 设置整体的拖拽对象配置
 * */
$( ".item" ).draggable({
    // appendTo: document.body,
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




$('.wf-component-textareafield').on('click',function () {
    alert('wf-component-textareafield');
})