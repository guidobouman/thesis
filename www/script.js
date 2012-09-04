// Init Showdown
var converter = new Showdown.converter();

// Set is_loading for ajax calls
var is_loading = false;

var hashGo = function()
{
  console.log("hashgo: "+ window.location.hash);
  if (window.location.hash === "") {
    for (firstdoc in docs) break;
    switchPage(firstdoc);
  } else {
    switchPage(window.location.hash.replace("#/",""));
  }
};

var switchPage = function(pagekey)
{
  is_loading = true;

  page = docs[pagekey];
  console.log(page);

  //window.history.pushState('', page.title, '#/' + pagekey); // Not needed, as we're using hashchanges.

  pagecontent = [];
  for (file in page.files)
  {
    (function (file)
    {
      $.ajax({
        url: '/thesis/' + page.dir + page.files[file],
        success: function(data) {
          pagecontent[file]=converter.makeHtml(data);
        }
      });
    })(file);
  }
};

var makeTOC = function()
{
  console.log('make TOC!');
  var titles = ['<li><span clas="title">Table of Contents</span>'];

  $("h2,h3").each(function()
  {
    titles.push('<li class="toc-'+this.nodeName+'"><a onclick="$(\'html,body\').animate({scrollTop:$(\'#'+this.id+'\').offset().top}, 500);">'+this.textContent+'</a></li>');
  });

  $('#toc').html(
    $('<ul/>', {
      'class': 'toc-list',
      html: titles.join('')
    })
  );
};

var makeMenu = function()
{
  console.log('make Menu!');
  items=['<li><span class="title">Documents</strong></li>'];

  $.each(docs, function(key, val)
  {
      items.push('<li><a href="#/'+ key +'" id="'+ key +'">' + val.title + '</a></li>');
  });

  $('#menu').html(
    $('<ul/>', {
      'class': 'menu-list',
      html: items.join('')
    })
  );
};

$(document).ready(function()
{

  // Monitor hash changes
  window.onhashchange = hashGo;

  // Monitor swipes
  $("body").swipe( {
    swipeRight:function() {
      $("#sidebar").addClass("hover");
    },
    swipeLeft:function() {
      $("#sidebar").removeClass("hover");
    },
    threshold:0
  });

  $(document).ajaxStop(function()
  {
    if(is_loading)
    {
      console.log('All calls done, load page!');
      $('#container').html('<h1>' + page.title + '</h1>' + pagecontent);
      makeTOC();
    }
    else
    {
      console.log('AJAX finished while loader was not active.');
    }
  });

  // Run bitch!
  hashGo();
  makeMenu();
});