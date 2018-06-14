    require('./index.css');
    require('./xiedajian.css');
    var template = require('../assets/js/template-web');
    var Temp = require('./template.js');

    // 开启控件监听
    Temp.startWatch();
    /**
     * 动态生成组件模板
     *  that  {obj}  组件dom对象
     * */
    function renderTemp(that) {
        var data = $(that).find('.wf-component')[0].dataset;
        // console.log(data);

        var templateStr='';
        for (var x in data){
            templateStr += Temp[x];
        }
        // console.log(templateStr);
        var render = template.compile(templateStr);
        // var html = render({
        //     title: '这是传过去的数据22',
        //     tip: '请填写',
        // });
        var html = render(data);

        return html;
    }

    /**
     * 保存配置清单
     * */
    function getConf() {
        var list = [];
        $('.wf-formcanvas .item .wf-component').each(function () {

            var componentData = $(this)[0].dataset;
            list.push(componentData);
        })
        console.log(list);
    }

    function selectTab1() {
        $('.ant-tabs-content2').css('marginLeft','0');
        $('.ant-tabs-ink-bar2').css('transform','translate3d(0px, 0px, 0px)');
        $('.ant-tabs-nav-container2 div.ant-tabs-tab').addClass('ant-tabs-tab-active');
        $('.ant-tabs-nav-container2 div.ant-tabs-tab:last-of-type').removeClass('ant-tabs-tab-active');

    }
    function selectTab2() {
        $('.ant-tabs-content2').css('marginLeft','-100%');
        $('.ant-tabs-ink-bar2').css('transform','translate3d(175px, 0px, 0px)');
        $('.ant-tabs-nav-container2 div.ant-tabs-tab').removeClass('ant-tabs-tab-active');
        $('.ant-tabs-nav-container2 div.ant-tabs-tab:last-of-type').addClass('ant-tabs-tab-active');
    }
    // 右侧tab页面切换
    $('.ant-tabs-nav-container2 .ant-tabs-tab').on('click',function () {
        ($(this).attr('data-i') == 1) ? selectTab1() : selectTab2() ;
    })


    /**
     *  选中某项item
     * */
    function selectItem(that){
        $('.wf-formcanvas .item .wf-component').removeClass('active');
        $(that).find('.wf-component').addClass('active');

        var html = renderTemp(that);

        // 更改右侧参数设置模块
        $('#wf-widgetsettings').html(html);
        selectTab1();
    }

    // 选中中侧的item
    $('.wf-formcanvas').on('click','.item',function () {
        if( $(this).find('.wf-component').hasClass('active'))return;
        selectItem(this);
    })

    // hover中侧的itrm
    $('.wf-formcanvas ').on('mouseover','.item',function () {
        $('.wf-formcanvas .item .wf-component').removeClass('hover');
        $(this).find('.wf-component').addClass('hover');
    }).on('mouseout','.item',function () {
        $('.wf-formcanvas .item .wf-component').removeClass('hover');
    });

    // 删除item
    $('.wf-formcanvas').on('click','.wf-remove',function (event) {
        event.stopPropagation();
        var parent=$(this).parent();
        // 删除的是否是当前选中的
        if(parent.hasClass('active')){
            console.log('active');
            selectTab2();
        }
        $('#wf-widgetsettings').empty();
        parent.parent().remove();

        if($('.wf-formcanvas .item').length < 1){
            $('.wf-formcanvas-body').show();
        }
    })

    // 表单分类下拉框
    $('.select-main .select').on('click',function () {
        $('#xdj-select').show();
    });

    $('#xdj-select  .select-option').on('click',function () {
        var val=$(this).html();
        $('#xdj-fenlei').html(val);
        $('#xdj-select').hide();
    })

    // 预览
    $('#xdj-yulan').on('click',function () {
        showErr('暂无法预览');
        // $('.wf-formcanvas .item').removeClass('active');
        // selectTab1();
    });
    // 保存
    $('#xdj-saveBtn').on('click',function () {
        getConf();
        showErr('暂无法保存');
    })

    //保存并启用
    $('#xdj-use').on('click',function () {
        // showErr('hello');
        showErr('暂无法启用');
    })

    // 错误提示
    var errTimeout=null;
    function showErr(text){
        if(errTimeout){
            clearTimeout(errTimeout);
        }
        $('#xdj-err-text').html(text);
        $('#xdj-err').slideDown("slow");

        errTimeout = setTimeout(function () {
            $('#xdj-err').slideUp("slow");
        },3000);
    }
     // 关闭错误提示
    $('#xdj-close-err').on('click',function () {
        $('#xdj-err').slideUp("slow");
    })



    // 排序
    $( ".wf-formcanvas-inner" ).sortable({
        revert: true,
        scroll: false,
        // placeholder: "",
        start:function( event, ui ){
            $('.wf-formcanvas-body').hide();
        },
        stop: function (event,ui) {
            // console.log(ui);
            // 排序结束选中当前的item
            selectItem(ui.item)

        }
    });
    // 拖拽
    $( ".item" ).draggable({
        addClasses: false,
        connectToSortable: ".wf-formcanvas-inner",
        helper: "clone",
        appendTo: "body",
        cursorAt: { left: 25 ,top: 15},
        // refreshPositions: true,
        // revert: "invalid",
        // stack: ".wf-formcanvas-inner",
        // zIndex:100,
        scroll: false,
        // opacity:2,

        stop:function (event,ui) {
            if($('.wf-formcanvas .item').length < 1) $('.wf-formcanvas-body').show();
        }
    });

