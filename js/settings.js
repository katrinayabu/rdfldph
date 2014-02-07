/*
    jQuery Mobile Portfolio
    Author: Sam Deering (samdeering.com)
    Article: jquery4u.com/mobile/jquery-mobile-portfolio/
    Demo: jquery4u.com/demos/mobileportfoliosite/
*/

$(document).ready(function(){

   $("#adminLoginMsg").hide();
   
   $('#flood_gauge').width(293);
   $('#flood_gauge').mouseover(function()
   {
      $(this).css("cursor","pointer");
   });
   $("#flood_gauge").toggle(function()
     {$(this).animate({width: "500px"}, 'slow');},
     function()
     {$(this).animate({width: "293px"}, 'slow');
   });
   
   $('#vclass').width(293);
   $('#vclass').mouseover(function()
   {
      $(this).css("cursor","pointer");
   });
   $("#vclass").toggle(function()
     {$(this).animate({width: "500px"}, 'slow');},
     function()
     {$(this).animate({width: "293px"}, 'slow');
   });
   
   $('#mmda').width(293);
   $('#mmda').mouseover(function()
   {
      $(this).css("cursor","pointer");
   });
   $("#mmda").toggle(function()
     {$(this).animate({width: "500px"}, 'slow');},
     function()
     {$(this).animate({width: "293px"}, 'slow');
   });
   
   $('#emergency_hotlines').width(293);
   $('#emergency_hotlines').mouseover(function()
   {
      $(this).css("cursor","pointer");
   });
   $("#emergency_hotlines").toggle(function()
     {$(this).animate({width: "500px"}, 'slow');},
     function()
     {$(this).animate({width: "293px"}, 'slow');
   });
});


(function($,W,D,undefined)
{
    //MOBILE SITE SETTINGS
    W.JQMP = W.JQMP || {};
    W.JQMP.SETTINGS =
    {
        //CONTACT FORM SETTINGS - enter your name and email where you would like your messages to be sent to
        CONTACT:
        {
            name: 'Sam Deering',
            email: 'email@domain.com'
        },

        //SOCIAL NETWORK LINKS SETTINGS
        SOCIAL:
        {
            'blog': 'http://www.jquery4u.com',
            'twitter': 'https://twitter.com/RoadFloodPH',
            'facebook': 'https://www.facebook.com/roadfloodph',
            'google-plus': 'https://plus.google.com/104487173540464647216/posts',
            'youtube': 'http://www.youtube.com/user/mrdeerings',
            'linkedin': 'http://www.linkedin.com/in/samueldeering',
            'flickr': 'http://www.flickr.com/search/?q=jquery4u',
            'instagram': 'http://instagram.com/jquery',
            'pinterest': 'http://pinterest.com/search/pins/?q=jquery',
            'skype': 'http://myskype.info/sdeering',
            'delicious': 'http://delicious.com/search?p=jquery4u',
            'technorati': 'http://technorati.com/search?return=posts&q=jquery',
            'vimeo': 'http://vimeo.com/search?q=jquery+mobile',
            'stumbleupon': 'http://www.stumbleupon.com/stumbler/samdeering',
            'reddit': 'http://www.reddit.com/search?q=jquery',
            'digg': 'http://digg.com/'
        }
    }

})(jQuery,window,document);