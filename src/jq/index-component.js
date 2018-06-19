/**
 * 组件控件设置
 * */

// 标题
var title = '<div class="wf-field wf-setting-label"><div class="fieldname"><!-- react-text: 597 -->标题<!-- /react-text --><span class="fieldinfo ">最多20字</span></div><div class="fieldblock"><input type="text" class="" value="{{title}}"></div></div>';

// 提示
var tip= '<div class="wf-field wf-setting-placeholder"><div class="fieldname"><!-- react-text: 603 -->提示文字<!-- /react-text --><span class="fieldinfo ">最多50字</span></div><div class="fieldblock"><input type="text" class="" value="{{tip}}"></div></div>';

// 数字输入框-单位
var unit = '<div class="wf-field wf-setting-unit"><div class="fieldname"><!-- react-text: 609 -->单位<!-- /react-text --><span class="fieldinfo ">最多20字</span></div><div class="fieldblock"><input type="text" class="" value="{{unit}}"></div></div>';

// 验证
var req = `<div class="wf-field wf-setting-required"><div class="fieldname">验证</div><label class="fieldblock"><input type="checkbox" value="{{req}}" {{ (req == 1)? 'checked': '' }}><span class="verticalmiddle">（必填）</span></label></div>`;

// 打印
var log = `<div class="wf-field wf-setting-print"><div class="fieldname">打印</div><label class="fieldblock"><input type="checkbox"  value="{{log}}" {{ (log == 1)? 'checked': '' }}><span class="verticalmiddle">参与打印</span><span class="fieldinfo verticalmiddle">（如不勾选，打印时不显示该项）</span></label></div>`;

// 选项
var items = `<div class="wf-field wf-setting-options">
    <div class="fieldname"><!-- react-text: 639 -->选项<!-- /react-text --><span class="fieldinfo">最多200项，每项最多50个字</span>
    </div>
    <div class="">
        {{each items.split(',')  item index}}
        <div class="fieldblock wf-setting-option">
            <input type="text" class="" maxlength="50" value="{{ item }}"><a class="action action-del"><i class="icon icon-minus"></i></a><a class="action action-add"><i class="icon icon-plus"></i></a>
        </div>
        {{/each}}
    </div>
    <!--<div class="wf-setting-line"><a>批量编辑</a></div>&lt;!&ndash; react-empty: 662 &ndash;&gt;</div>-->
</div>`;

// 日期类型
var datetype=`<div class="wf-field wf-setting-dateformat">
                    <div class="fieldname">日期类型</div>
                    <label class="fieldblock">
                        <input type="radio" name="dateformat"  value="yyyy-MM-dd HH:mm">
                         <span class="verticalmiddle">年-月-日 时:分</span>
                     </label>
                     <label class="fieldblock">
                         <input type="radio" name="dateformat" value="yyyy-MM-dd">
                         <span  class="verticalmiddle">年-月-日</span>
                     </label>
                </div>`;

// 标题2
var secondtitle = '<div class="wf-field wf-setting-label2"><div class="fieldname"><!-- react-text: 597 -->标题2<!-- /react-text --><span class="fieldinfo ">最多20字</span></div><div class="fieldblock"><input type="text" class="" value="{{secondtitle}}"></div></div>';

// 说明文字 textnote
var textnote = `<div class="wf-field wf-setting-content">
                                        <div class="fieldname"><!-- react-text: 1822 -->说明文字<!-- /react-text --><span
                                                class="fieldinfo ">最多5000字</span></div>
                                        <div class="fieldblock"><textarea type="text">{{textnote}}</textarea></div>
                                    </div>`;

// 跳转地址 link
var link = `<div class="wf-field wf-setting-link">
                                        <div class="fieldname"><!-- react-text: 1828 -->可以输入链接跳转地址
                                            <!-- /react-text --></div>
                                        <div class="fieldblock"><textarea class="" type="text">{{link}}</textarea></div>
                                    </div>`;



function startWatch() {

    // 监听控件设置 标题title字段实时反馈到组件
    $('.wf-settingpanel').on('keyup','.wf-setting-label',function () {
        var val=$(this).find('input').val();
        $('.wf-formcanvas-inner .wf-component.active').find('.wf-componentview-label:first').html(val);
        $('.wf-formcanvas-inner .wf-component.active').attr('data-title',val);
    });
    // 监听控件设置 标题2secondtitle字段实时反馈到组件
    $('.wf-settingpanel').on('keyup','.wf-setting-label2',function () {
        var val=$(this).find('input').val();
        $('.wf-formcanvas-inner .wf-component.active').find('.wf-componentview-label:last').html(val);
        $('.wf-formcanvas-inner .wf-component.active').attr('data-secondtitle',val);
    });
    // 监听控件设置 提示tip字段实时反馈到组件
    $('.wf-settingpanel').on('keyup','.wf-setting-placeholder',function () {
        var val=$(this).find('input').val();
        $('.wf-formcanvas-inner .wf-component.active').find('.wf-componentview-placeholder').html(val);
        $('.wf-formcanvas-inner .wf-component.active').attr('data-tip',val);
    });
    // 监听控件设置 单位unit字段实时反馈到组件
    $('.wf-settingpanel').on('keyup','.wf-setting-unit',function () {
        var val=$(this).find('input').val();
        // $('.wf-formcanvas-inner .wf-component.active').find('.wf-componentview-placeholder').html(val);
        $('.wf-formcanvas-inner .wf-component.active').attr('data-unit',val);
    });
    // 监听控件设置 验证req字段实时反馈到组件
    $('.wf-settingpanel').on('click','.wf-setting-required',function () {
        // console.log($(this).find('input').is(':checked'));
        var bool=$(this).find('input').is(':checked');
        if(bool){
            $('.wf-formcanvas-inner .wf-component.active').attr('data-req',1);
        }else {
            $('.wf-formcanvas-inner .wf-component.active').attr('data-req',2);
        }
    });
    // 监听控件设置 打印log字段实时反馈到组件
    $('.wf-settingpanel').on('click','.wf-setting-print',function () {
        console.log($(this).find('input').is(':checked'));
        var bool=$(this).find('input').is(':checked');
        if(bool){
            $('.wf-formcanvas-inner .wf-component.active').attr('data-log',1);
        }else {
            $('.wf-formcanvas-inner .wf-component.active').attr('data-log',2);
        }
    });
    // 监听控件设置 说明文字textnote字段实时反馈到组件
    $('.wf-settingpanel').on('keyup','.wf-setting-content',function () {
        var val=$(this).find('textarea').val();
        $('.wf-formcanvas-inner .wf-component.active').find('.textnote-content p').html(val);
        $('.wf-formcanvas-inner .wf-component.active').attr('data-textnote',val);
    });
    // 监听控件设置 链接地址link字段实时反馈到组件
    $('.wf-settingpanel').on('keyup','.wf-setting-link',function () {
        var val=$(this).find('textarea').val();
        // $('.wf-formcanvas-inner .wf-component.active').find('.textnote-content p').html(val);
        $('.wf-formcanvas-inner .wf-component.active').attr('data-link',val);
    });


    // 监听 items 字段的删除子项
    $('.wf-settingpanel').on('click','.wf-setting-options .wf-setting-option .action-del',function () {
        $(this).parent().remove();
        saveItems();
    });
    // 监听 items 字段的添加子项
    $('.wf-settingpanel').on('click','.wf-setting-options .wf-setting-option .action-add',function () {
        var node=`<div class="fieldblock wf-setting-option">
            <input type="text" class="" maxlength="50" value="新项目"><a class="action action-del"><i class="icon icon-minus"></i></a><a class="action action-add"><i class="icon icon-plus"></i></a>
        </div>`;

        $('.wf-settingpanel .wf-setting-options').append(node);
        saveItems();
    });
    // 监听 items 字段
    $('.wf-settingpanel').on('change','.wf-setting-options',function () {
        console.log('change');
        saveItems();
    });



}

function saveItems(){
    var strArr=[];
    $('.wf-settingpanel .wf-setting-options').find('.wf-setting-option').each(function () {
        strArr.push($(this).find('input').val());
    });
    var str = strArr.join(',');
    $('.wf-formcanvas-inner .wf-component.active').attr('data-items',str);
}

module.exports = {
    startWatch,     // 开启控件设置数据监听
    title,
    tip,
    unit,
    req,
    log,
    items,
    datetype,
    secondtitle,
    textnote,
    link,
}