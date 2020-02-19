SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(window).ready(function() {
  SC.stream('/tracks/271004119',function(sound){
    $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/624807183',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
   });

  SC.stream('/tracks/507890541',function(sound){
    $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
   SC.stream('/tracks/519204183',function(sound){
    $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
   });

  SC.stream('/tracks/495496020',function(sound){
    $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/345823373',function(sound){
    $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/345819962',function(sound){
    $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/345809390',function(sound){
    $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop7').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/690263137',function(sound){
    $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/687972718',function(sound){
    $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/112010796',function(sound){
    $('#start10').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop10').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/66037751',function(sound){
    $('#start11').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop11').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
