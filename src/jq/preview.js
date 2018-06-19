/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/6/15
 * Time: 9:32
 */

require('./preview.css');
var Temp = require('./preview-component.js');
var template = require('./template-web');


$(function () {

    var formId =  $('body').attr('data-formId') || 126;

    $.ajax({
        url:'http://sycs.dashouzhang.org/chengguan/cg/formH5/look.json',
        data:{formId:formId},
        type:'POST',
        success:function (res) {
            var data = JSON.parse(res);
            if(data.config && data.config.length > 0){
                renderHtml(data.config);
            }
        },
        error:function (err) {

        }
    })


    /**
     * 渲染html
     * */
    function renderHtml(arr) {
        var html='';

        for(var i=0; i <arr.length; i++){
            var columnType = arr[i].columnType - 1;
            var temp = Temp.template[columnType];

            var render = template.compile(temp);
            html += render(arr[i]);
        }
        $('.form-list').append(html);
        init();
    }

    function init() {
        /* 日期 */
        $('.select-date').each(function () {
            $(this).datetimePicker({
                onChange: function (p, values, displayValues) {
                    console.log(values, displayValues);
                }
            });
        })

        /* 图片选择 */
        var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
            $gallery = $("#gallery"), $galleryImg = $("#galleryImg"),
            $uploaderInput = $("#uploaderInput"),
            $uploaderFiles = $("#uploaderFiles");

        $uploaderInput.on("change", function(e){
            var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
            for (var i = 0, len = files.length; i < len; ++i) {
                var file = files[i];

                if (url) {
                    src = url.createObjectURL(file);
                } else {
                    src = e.target.result;
                }

                $uploaderFiles.append($(tmpl.replace('#url#', src)));
            }
        });
        $uploaderFiles.on("click", "li", function(){
            $galleryImg.attr("style", this.getAttribute("style"));
            $gallery.fadeIn(100);
        });
        $gallery.on("click", function(){
            $gallery.fadeOut(100);
        });


        // 注册所有的单选框
        $(".singleSelect").each(function () {
            $(this).picker({
                cols:[{
                    textAlign: 'center',
                    values: $(this).attr('data-items').split(",")
                }]
            })
        })



        // 注册所有的多选框
        $('.multipleSelect').each(function () {
            $(this).select({
                title: "多选列表",
                multi: true,
                min: 0,
                max: 5,
                items:$(this).attr('data-items').split(","),
                onChange: function(d) {
                    console.log(this, d);
                },
                onClose: function (d) {
                    console.log('close')
                }
            });
        })
    }
});