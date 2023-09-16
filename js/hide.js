$(document).ready(function() {
    let showH1 = true;

    $('#hide').click(function() {
        if (showH1) {
            $('#title').hide();
        } else {
            $('#title').show();
        }
        showH1 =! showH1;
    });

    // when the cruser hover the leader list in the first page 
    // leader content will show in another col

    $('.leader-list li').hover(
        function() {
            const targetId = $(this).data("target");
            $(`#${targetId}`).css("display", "block");
        },
        function() {
            const targetId = $(this).data("target");
            $(`#${targetId}`).css("display", "none");
        }
    );
    
    

})