$(document).ready(function () {
  $('img').click(function() {
    const currentSrc = $(this).attr('src');
    const altPic = $(this).attr('alt-pic');
    $(this).attr('src', altPic);
    $(this).attr('alt-pic', currentSrc);
  });
});