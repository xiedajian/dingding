

$(function () {


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

    $('#xdj-close-err').on('click',function () {
        $('#xdj-err').slideUp("slow");
    })


    $('#xdj-saveBtn').on('click',function () {
        showErr('hello');
    })
    $( ".wf-formcanvas-inner" ).sortable({
        revert: true
    });
    $( ".wf-widgetsitem" ).draggable({
        connectToSortable: ".wf-formcanvas-inner",
        helper: "clone",
        revert: "invalid",
        stack: ".wf-formcanvas-inner",
        zIndex:100,
        scroll: false,
    });
    // $( "ul, li" ).disableSelection();

});