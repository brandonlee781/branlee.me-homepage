$(".menu-button").click(function(){
  $("nav").toggleClass("open-drawer");
  $(".wrapper").toggleClass("move-wrap");
});
$("nav a").click(function(){
  $("nav").toggleClass("open-drawer");
  $(".wrapper").toggleClass("move-wrap");
});