$(document).ready(function () {
    var socket = io();
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        let message = $('#m').val();
        socket.emit('chat message', {
            'user_id': $('#user_id').text(),
            'msg': message
        });
        $('#m').val('');

        return false;
    });
    socket.on('chat message', obj => {
        if ($('#user_id').text() === obj.user_id) {
            generateMyMessage(obj)
        } else {
            generateAnotherMessage(obj)
        }
    });

    function generateMyMessage(obj) {
        $('#content-container').append($('<div class="d-flex justify-content-end mb-4">\n' +
            '                        <div class="msg_cotainer_send">\n' +
            '                            ' + obj.msg + '\n' +
            '                        </div>\n' +
            '                        <div class="img_cont_msg">\n' +
            '                            <img class="rounded-circle user_img_msg me-img">\n' +
            '                        </div>\n' +
            '                    </div>'));
    }

    function generateAnotherMessage(obj) {
        $('#content-container').append($('<div class="d-flex justify-content-start mb-4">\n' +
            '                        <div class="img_cont_msg">\n' +
            '                            <img class="rounded-circle user_img_msg another-img">\n' +
            '                        </div>\n' +
            '                        <div class="msg_cotainer">\n' +
            '                            ' + obj.msg + '\n' +
            '                            <span class="msg_time">' + obj.user_id + '</span>\n' +
            '                        </div>\n' +
            '                    </div>'));
    }
});
