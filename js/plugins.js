---
---

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

$("#countdown").countdown("2016/09/03", function(event) {
  $(this).text(
    event.strftime('%D days until the block party!')
  );
});

// sprites

$(function() {
    $(".sprite").animateSprite({
        fps: 3,
        loop: true,
        autoplay: true,
        animations: {
            nSC: [0,1,2,3,4,5,6], //spellcast
            wSC: [13,14,15,16,17,18],
            sSC: [26,27,28,29,30,31],
            eSC: [39,40,41,42,43,44],
            nTH: [52,53,54,55,56,57,58,59], //thrust
            wTH: [65,66,67,68,69,70,71,72],
            sTH: [78,79,80,81,82,83,84,85],
            eTH: [91,92,93,94,95,96,97,98],
            nWC: [104,105,106,107,108,109,110,111,112], //walkcycle
            wWC: [117,118,119,120,121,122,123,124,125],
            sWC: [130,131,132,133,134,135,136,137,138],
            eWC: [143,144,145,146,147,148,149,150,151],
            nSL: [156,157,158,159,160], //slash
            wSL: [169,170,171,172,173],
            sSL: [182,183,184,185,186],
            eSL: [195,196,197,198,199],
            nSH: [208,209,210,211,212,213,214,215,216,217,218,219], //shoot
            wSH: [221,222,223,224,225,226,227,228,229,230,231,232],
            sSH: [234,235,236,237,238,239,240,241,242,243,244,245],
            eSH: [247,248,249,250,251,252,253,254,255,256,257,258],
            HU: [260,261,262,263,264] //hurt
        }
    });

  {% for sprite in site.data.faces %}
    $('.{{ sprite.name | slugify }}').animateSprite('play', '{{ sprite.animation }}');
  {% endfor %}

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

});
