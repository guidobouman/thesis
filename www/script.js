// Init Showdown
var converter = new Showdown.converter();

// Set is_loading for ajax calls
var is_loading = false;

var hashGo = function()
{
  if (window.location.hash === "") {
    for (var firstdoc in docs) break;
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
  for (var file in page.files)
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
  var buffer = $('#container').html();
  var inline_reference_list = buffer.match(/\[\#(.*)\]:([^<\[]*)/g);

  if(inline_reference_list === null)
    return false;

  references = [];
  reference_list = [];
  for(var i in inline_reference_list)
  {
    reference_number = parseInt(i, 10) + 1;
    reference = inline_reference_list[i].replace('[#', '').split(']: ');

    var re = new RegExp('\\[(.*)\\]\\[\\#' + escapeRegEx(reference[0]) + '\\]', 'g');
    buffer = buffer.replace(re, '<sup><a href="#' + reference[0] + '">' + reference_number + '</a></sup>');

    buffer = buffer.replace(inline_reference_list[i], '');

    reference_list.push('<a id="' + reference[0] + '">' + reference[1] + '</a>');
  }

  $('#container').html(buffer).append('<h2>Sources</h2><ol><li>' + reference_list.join('</li><li>') + '</li></ol>');

  console.log($('#container').html());
};

var escapeRegEx = function(string)
{
  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
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
