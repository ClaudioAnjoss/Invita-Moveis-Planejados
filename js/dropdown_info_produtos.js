$(document).ready(function () {
    $('.action_click').on('click', function () {
        var id = $(this).data("id");
        console.log(id);
        $("#" + id).toggle();
    });

    $('.drop-detalhes').click(() => {
        $('.drop-detalhes-icon').toggle('slow');
    })
    $('.drop-informacoes').click(() => {
        $('.drop-informacoes-icon').toggle('slow');
    })
    $('.drop-download').click(() => {
        $('.drop-download-icon').toggle('slow');
    })
    $('.drop-garantia').click(() => {
        $('.drop-garantia-icon').toggle('slow');
    })
});