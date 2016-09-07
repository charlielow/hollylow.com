$(function() {
  var count = 1;
  var intervalHandle = window.setInterval(function() {
    if($('label[for="subscribe103316email"]').length) {
      $('label[for="subscribe103316email"]').html('Get on Holly\'s mailing list').attr('style', 'color: white !important');
      window.clearInterval(intervalHandle);
    }
    if(count >= 100) {
      window.clearInterval(intervalHandle);
    }
    count ++;
  }, 50);
});