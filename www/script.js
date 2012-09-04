$(document).ready(function() {
  // init Showdown
  var converter = new Showdown.converter();

  var switchPage = function(pagekey){
    page = docs[pagekey];
    console.log(page);
    window.history.pushState("", page.title, "#/"+pagekey+"");
    $('#container').html("");
    window.pagecontent = [];
    for (file in page.files) {
        (function (file) {$.ajax({
          url: "/thesis/"+page.dir+page.files[file],
          success: function(data) {
            pagecontent[file]=converter.makeHtml(data);
            counter=0
            console.log(counter);
            for (li in pagecontent){
              counter++;
            }
            if (counter == page.files.length){
              $('#container').append(pagecontent);
              makeTOC();
            }
          }
        });})(file)
      }
  };

  var makeTOC = function(){
    console.log("make TOC!");
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

  items=["<li><strong>Documents</strong></li>"];
  $.each(docs, function(key, val) {
      items.push('<li><a href="#/'+ key +'" id="'+ key +'">' + val.title + '</a></li>');
  });

  $('<ul/>', {
    'class': 'menu-list',
    html: items.join('')
  }).appendTo('#menu');

  var hashGo = function() {
    console.log("hashgo: "+ window.location.hash);
    if (window.location.hash === "") {
      for (firstdoc in docs) break;
      switchPage(firstdoc);
    } else {
      switchPage(window.location.hash.replace("#/",""));
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

})



