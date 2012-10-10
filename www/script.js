// Init Showdown
var converter = new Showdown.converter();

// Set is_loading for ajax calls
var is_loading = false;

var hashGo = function()
{
  if (window.location.hash === "") {
    for (firstdoc in docs) break;
    switchPage(firstdoc);
  } else {
    _gaq.push(['_trackPageview', window.location.hash.replace("#","")]);
    switchPage(window.location.hash.replace("#/",""));
  }
};

var switchPage = function(pagekey)
{
  is_loading = true;

  page = docs[pagekey];

  //window.history.pushState('', page.title, '#/' + pagekey); // Not needed, as we're using hashchanges.

  pagecontent = [];
  for (file in page.files)
  {
    (function (file)
    {
      $.ajax({
        url: '/thesis/' + page.dir + page.files[file],
        success: function(data) {
          pagecontent[file] = converter.makeHtml(data);
        }
      });
    })(file);
  }
};

var makeTOC = function()
{
  var titles = ['<li><span class="title">Table of Contents</span>'];

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

var makeRefenceList = function()
{
  reference_list = $('#container').text().match(/\[\#(.*)\]:/g);

  references = [];
  for (var i = 0; i < reference_list.length; i++)
  {
    console.log(reference_list[i]);
    references.push(reference_list[i]);
  };

  // in_line_refs = $('#container').text().match(/\[(.*)\]\[\#(.*)\]/g);

  // var reference_list = [];

  // for (var i = 0; i < in_line_refs.length; i++)
  // {
  //   reference_list.push(in_line_refs[i]);
  // }

  // console.log($('#container').text().match(/\[\#.*\]:/g));
};

var makeMenu = function()
{
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


  $(document).ajaxStop(function()
  {
    if(is_loading)
    {
      is_loading = false;

      $('#container').html('<h1>' + page.title + '</h1>' + pagecontent.join(''));

      makeTOC();
      makeRefenceList();
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
