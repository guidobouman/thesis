// Init Showdown
var converter = new Showdown.converter();

// Set is_loading for ajax calls
var is_loading = false;

var hashGo = function()
{
  if (window.location.hash === "") {
    for (var firstdoc in docs) break;
    switchPage(firstdoc);
  } else if(window.location.hash.match('#/')) {
    _gaq.push(['_trackPageview', window.location.hash.replace("#","")]);
    switchPage(window.location.hash.replace("#/",""));
  }
};

var switchPage = function(pagekey)
{
  is_loading = true;

  page = docs[pagekey];

  if(typeof page === 'undefined')
    return false;

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

var makeMenu = function()
{
  var items=['<li><span class="title">Documents</strong></li>'];

  $.each(docs, function(key, val)
  {
    items.push('<li><a href="#/' + key + '" id="' + key + '">' + val.title + '</a></li>');
  });

  $('#menu').html(
    $('<ul/>', {
      'class': 'menu-list',
      html: items.join('')
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
    buffer = buffer.replace(re, '<sup><a href="#' + reference[0].replace(':', '_') + '" class="reference">' + reference_number + '</a></sup>');

    buffer = buffer.replace(inline_reference_list[i], '');

    reference_list.push('<a id="' + reference[0].replace(':', '_') + '">' + reference[1] + '</a>');
  }

  $('#container').html(buffer).append('<h2 id="sources">Sources</h2><ol><li>' + reference_list.join('</li><li>') + '</li></ol>');
};

var makeTOC = function()
{
  var titles = ['<li><span class="title">Table of Contents</span>'];

  $("h2,h3").each(function()
  {
    titles.push('<li class="toc-' + this.nodeName + '"><a href="#' + this.id + '" class="reference">' + this.textContent + '</a></li>');
  });

  $('#toc').html(
    $('<ul/>', {
      'class': 'toc-list',
      html: titles.join('')
    })
  );
};

var escapeRegEx = function(string)
{
  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
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

      $('html,body').animate(
      {
        scrollTop: 0
      }, 500);

      makeRefenceList();
      makeTOC();
    }
    else
    {
      console.log('AJAX finished while loader was not active.');
    }
  });

  $(document).on('click', 'a.reference', function(e)
  {
    e.preventDefault();

    id = $(this).attr('href');

    $('html,body').animate(
    {
      scrollTop: $(id).offset().top
    }, 500);

    return false;
  });

  // Run bitch!
  hashGo();
  makeMenu();
});
