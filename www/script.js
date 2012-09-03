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
    var titles = [];
    $("h2,h3").each(function(){
      var output = '<li class="toc-'+this.nodeName+'"><a href="#'+this.id+'">'+this.textContent+'</a></li>';
      titles.push(output);
    });

    $('<ul/>', {
      'class': 'toc-list',
      html: titles.join('')
    }).appendTo('#toc');
  };

  var finddoc = function(filename){
    for (file in docs){
      if (docs[file].file === filename){
        switchPage(docs[file]);
      }
    }
  }


  items=[];
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

})



