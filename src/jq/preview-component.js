/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/6/15
 * Time: 14:15
 */





module.exports = {
    template :[
        // 1.单行输入框
        ` <div class="weui-cells form-list-item form-list-item__single">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="{{tip}}">
                    </div>
                </div>
            </div>`,
        // 2.多行输入框
        `<div class="weui-cells form-list-item form-list-item__multiply weui-cells_form">
 <!--<div class="weui-cell__hd"><label class="weui-label">{{title}}</label></div>-->
                <div class="weui-cell">
                    
                    <div class="weui-cell__bd">
                    <p>{{title}}</p>
                        <textarea class="weui-textarea" placeholder="{{tip}}" rows="3"></textarea>
                        <!--<div class="weui-textarea-counter"><span>0</span>/200</div>-->
                    </div>
                </div>
            </div>`,
        // 3.数字输入框
        `<div class="weui-cells form-list-item form-list-item__number">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" placeholder="{{tip}}">
                    </div>
                </div>
            </div>`,

        // 4.单选框
        `<div class="weui-cells form-list-item form-list-item__singleSelect">
                <div class="weui-cell weui-cell_access">
                    <!--<div class="weui-cell__hd"><label class="weui-label">{{title}}</label></div>-->
                    <!--<div class="weui-cell__bd">-->
                        <!--<input class="weui-input" id="singleSelect" data-items="{{items}}" type="text" value="选项1" readonly="" data-values="">-->
                    <!--</div>-->
                    <div class="weui-cell__bd">
                        <p>{{title}}</p>
                    </div>
                    <div class="weui-cell__ft">
                        <input class="weui-input singleSelect" style="text-align: right;" data-items="{{items}}" placeholder="{{tip}}" type="text"  readonly="" data-values="">
                    </div>
                </div>
                
            </div>`,

        // 5.多选框
        `<div class="weui-cells form-list-item form-list-item__multipleSelect">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__ft">
                        <input class="weui-input multipleSelect"  style="text-align: right;"  data-items="{{items}}"  type="text" placeholder="请选择" readonly="" data-values="">
                    </div>
                </div>
            </div>`,

        // 6.日期
        `<div class="weui-cells form-list-item form-list-item__date">
                <div class="weui-cell  weui-cell_access">
                    <div class="weui-cell__bd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__ft">
                        <input class="weui-input select-date" style="text-align: right;" type="text" value="" readonly="" placeholder="请选择">
                    </div>
                </div>
            </div>`,

        // 7.日期期间
        `<div class="weui-cells form-list-item form-list-item__start">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__ft">
                        <input class="weui-input select-date"  style="text-align: right;" type="text" value="" readonly="" placeholder="{{tip}}">
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd"><label class="weui-label">{{secondTitle}}</label></div>
                    <div class="weui-cell__ft">
                        <input class="weui-input select-date"  style="text-align: right;" type="text" value="" readonly="" placeholder="{{tip}}">
                    </div>
                </div>
            </div>`,

        // 8.图片
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__img">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">{{title}}</p>
                                <!--<div class="weui-uploader__info">0/2</div>-->
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files uploaderFiles">
                                    <!--<li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                                    <li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                                    <li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)">
                                        <div class="weui-uploader__file-content">
                                            <i class="weui-icon-warn"></i>
                                        </div>
                                    </li>
                                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)">
                                        <div class="weui-uploader__file-content">50%</div>
                                    </li>-->
                                </ul>
                                <div class="weui-uploader__input-box">
                                    <input  class="weui-uploader__input uploaderInput" type="file" accept="image/*" multiple="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,

        // 9 说明文字
        `
<div class="weui-cells__tips"><a style="display:block;width:100%;font-size: 0.6rem;color: #999;" href="{{link}}">{{textnote}}</a></div>
`,

        // 10 金额
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__money">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" style="text-align: right;"  type="number" placeholder="{{tip}}">
                    </div>
                </div>
            </div>`,

        // 11 附件
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__img">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">{{title}}</p>
                                <!--<div class="weui-uploader__info">0/2</div>-->
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files uploaderAnnex" >
                                    <!--<li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                                    <li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                                    <li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)">
                                        <div class="weui-uploader__file-content">
                                            <i class="weui-icon-warn"></i>
                                        </div>
                                    </li>
                                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)">
                                        <div class="weui-uploader__file-content">50%</div>
                                    </li>-->
                                </ul>
                                <div class="weui-uploader__input-box">
                                    <input  class="weui-uploader__input uploaderAnnexInput" type="file" accept="*">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        // 12 联系人
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__contacts">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__ft">
                        <input class="weui-input singleSelect" style="text-align: right;"  data-items="联系人1,联系人2,联系人3" type="text" value="" readonly="" placeholder="联系人">
                    </div>
                </div>
            </div>`,
        // 13 部门
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__department">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__ft">
                        <input class="weui-input singleSelect" style="text-align: right;"  data-items="部门1,部门2,部门3" type="text" value="" readonly="" placeholder="部门">
                    </div>
                </div>
            </div>`,
        // 14 地点
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__location">
                <div class="weui-cell">
                    <div class="weui-cell__bd"><label class="weui-label">当前地点</label></div>
                    <div class="weui-cell__ft">
                        <div style="color: #2db7f5;">获取</div>
                    </div>
                </div>
            </div>`,

        // 15 电话
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__single">
                <div class="weui-cell">
                    <div class="weui-cell__bd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__ft">
                        <a href="tel:{{tip}}" style="text-align: right;color: #2db7f5;">{{tip}}</a>
                    </div>
                </div>
            </div>`,

        // 16 数据组件
        `<div class="weui-cells form-list-item weui-cells_form form-list-item__single">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">{{title}}</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input"  type="text" value="" placeholder="{{tip}}">
                    </div>
                </div>
            </div>`,
    ]
}