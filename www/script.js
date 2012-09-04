$(document).ready(function() {
  // init Showdown
  var converter = new Showdown.converter();

  var switchPage = function(page){
    data = "";
    window.history.pushState(data, page.title, "#/"+page.file+"");
    $.ajax({
      url: "/thesis/"+page.file,
      success: function(data) {
        $('#container').html(converter.makeHtml(data));
        makeTOC();
      }
    });
  };

  var makeTOC = function(){
    var titles = ["<li><strong>Table of Contents</strong>"];
    $("h2,h3").each(function(){
      var output = '<li class="toc-'+this.nodeName+'"><a onclick="$(\'html,body\').animate({scrollTop:$(\'#'+this.id+'\').offset().top}, 500);">'+this.textContent+'</a></li>';
      titles.push(output);
    });

    $('#toc').html($('<ul/>', {
      'class': 'toc-list',
      html: titles.join('')
    }));
  };

  var finddoc = function(filename){
    for (file in docs){
      if (docs[file].file === filename){
        switchPage(docs[file]);
      }
    }
  }


  items=["<li><strong>Documents</strong></li>"];
  $.each(docs, function(key, val) {
      items.push('<li><a href="#/'+ val.file +'" id="'+ key +'">' + val.title + '</a></li>');
  });

  $('<ul/>', {
    'class': 'menu-list',
    html: items.join('')
  }).appendTo('#menu');

  var hashGo = function() {
    console.log("hashgo: "+ window.location.hash);
    if (window.location.hash === "") {
      switchPage(docs[0]);
    } else {
      finddoc(window.location.hash.replace("#/",""));
    }
  };

  hashGo();

  window.onhashchange = hashGo;


  $("body").swipe( {
  swipeRight:function() {
    $("#sidebar").addClass("hover");	
  },
  swipeLeft:function() {
    $("#sidebar").removeClass("hover");	
  },
  threshold:0
  });
});

})



