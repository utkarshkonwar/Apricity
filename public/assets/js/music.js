// $(document).ready(function() {
//     $('.main').click(
//              function() {
//        $('.intro').toggle();
//     });
//   });
(function($) {
  $('music').ready(function() {
    $('intro').on('click', function(){
        document.getElementsByClassName('music')[0].style.display = 'block';
    });
});

}
)