// Init Showdown
var converter = new Showdown.converter();

// Set is_loading for ajax calls
var is_loading = false;


var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

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

  var target = document.getElementById('container');
  var spinner = new Spinner(opts).spin(target);

  page = docs[pagekey];

  if(typeof page === 'undefined')
    return false;

  //window.history.pushState('', page.title, '#/' + pagekey); // Not needed, as we're using hashchanges.

  pagecontent = [];
  for (var file in page.files)
  {
    (function (file)
    {
      if (page.files[file] === "!Github")
      {
        $.getJSON("https://api.github.com/repos/jellea/thesis/commits?per_page=100",
          function(g){
            console.log(g)
            pagecontent[file] = "## Activity"
            g.forEach(function(commit)
            {
              pagecontent[file] = pagecontent[file]+ "\n  \n"+ commit.commit.author.name
              +" - "+commit.commit.committer.date.split("T")[0]+":  \n"+commit.commit.message.split("\n")[0];
            })
          }
        )
      }
      else
      {
        $.ajax({
          url: '/thesis/' + page.dir + page.files[file],
          success: function(data) {
            pagecontent[file] = data;
          }
        });
      }
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

var parseRefenceList = function(buffer)
{
  if(typeof buffer === 'undefined')
  {
    buffer = $('#container').html();
  }

  var inline_reference_list = buffer.match(/\[\#(.*)\]:([^\[\n]+)/g);

  if(inline_reference_list === null)
    return buffer;

  var references = [];
  var reference_list = [];
  var included_references = [];

  for(var i in inline_reference_list)
  {
    reference_number = parseInt(i, 10) + 1;
    reference = inline_reference_list[i].replace('[#', '').split(']: ');

    buffer = buffer.replace(inline_reference_list[i], '');

    if($.inArray(reference[0], included_references) !== -1)
    {
      continue;
    }

    var re = new RegExp('\\[(.*)\\]\\[\\#' + escapeRegEx(reference[0]) + '\\]', 'g');
    buffer = buffer.replace(re, '<sup><a href="#' + reference[0].replace(':', '_') + '" class="reference">$1</a></sup>');

    reference_list.push('<a id="' + reference[0].replace(':', '_') + '">' + reference[1] + '</a>');
    included_references.push(reference[0]);
  }

  var sources = '<h2 id="sources">Sources</h2><ol><li>' + reference_list.join('</li><li>') + '</li></ol>';

  //$('#container').html(buffer).append(sources);
  return buffer + sources;
};

var makeTOC = function()
{
  var titles = ['<li><span class="title">Table of Contents</span>'];

  var i_h2 = 0,
      i_h3 = 0,
      i_h4 = 0;
  $("h2,h3,h4").each(function()
  {
    if(this.nodeName === 'H2') {
      i_h2++;
      i_h3 = 0;
      i_h4 = 0;
      this.textContent = i_h2 + '. ' + this.textContent;
    }
    else if(this.nodeName === 'H3') {
      i_h3++;
      i_h4 = 0;
      this.textContent = i_h2 + '.' + i_h3 + ' ' + this.textContent;
    }
    else if(this.nodeName === 'H4') {
      i_h4++;
      this.textContent = i_h2 + '.' + i_h3 + '.' + i_h4 + ' ' + this.textContent;
    }

    if(this.nodeName !== 'H4') {
      titles.push('<li class="toc-' + this.nodeName + '"><a href="#' + this.id + '" class="reference">' + this.textContent + '</a></li>');
    }
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

      content = pagecontent.join('\n');
      content = parseRefenceList(content);
      content = converter.makeHtml(content);

      $('#container').html('<h1>' + page.title + '</h1>' + content);

      $('html,body').animate(
      {
        scrollTop: 0
      }, 500);

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
