// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var item = button.data('item') // Extract info from data-* attributes
  var amount = button.data('amount') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-item').text(item)
  modal.find('.modal-amount').text('$' + amount)
  modal.find('.donate-button').val('Donate $' + amount + ' at Fractured Atlas')
  modal.find('.form-item').val(item)
  modal.find('.form-amount').val(amount)
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$("#countdown").countdown("2016/06/05", function(event) {
  $(this).text(
    event.strftime('%D days until the block party!')
  );
});
