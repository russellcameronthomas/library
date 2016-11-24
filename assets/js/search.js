// Event when blog checkbox is checked or unchecked
function checkboxClick(cb){
   var isChecked = cb.checked;
   var general = document.getElementById("general_blog_check");
   var diary = document.getElementById("diary_blog_check");
   var academic = document.getElementById("academic_blog_check");
   var security = document.getElementById("security_blog_check");
    
   if (isChecked){
        // enable all the blog options
        general.disabled=false;
        diary.disabled=false;
        academic.disabled=false;
        security.disabled=false;
        document.getElementById("blog_categories").style.opacity = "1";
    } else {
        // disable all the blog options
        general.disabled=true;
        diary.disabled=true;
        academic.disabled=true;
        security.disabled=true;
        document.getElementById("blog_categories").style.opacity = "0.2";

    }
}

jQuery(function() {
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title');
    this.field('content', { boost: 10 });
    this.field('author');
    this.field('categories');
  });

  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON('/search_data.json');
  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });
  


  // Event when the form is submitted
  $("#site_search").submit(function(event){
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");
    
    // Get the status of checkboxes for advanced search
    var docCheck =  document.getElementById('documents_check');
    var blogCheck =  document.getElementById('blog_check');
    var miscCheck =  document.getElementById('misc_check');
    
    
    var doDocs = true;
    var doBlogs = true;
    var doMisc = true;
    
    if (docCheck != null && docCheck.checked == false){
        doDocs = false;
    }
    if (blogCheck != null && blogCheck.checked == false){
        doBlogs = false;
    }
    if (miscCheck != null && miscCheck.checked == false){
        doMisc = false;
    }

    var generalCheck =  document.getElementById('general_blog_check');
    var diaryCheck =  document.getElementById('diary_blog_check');
    var academicCheck =  document.getElementById('academic_blog_check');
    var securityCheck =  document.getElementById('security_blog_check');
    
    var doGeneral = true;
    var doDiary = true;
    var doAcademic = true;
    var doSecurity = true;
    if (generalCheck != null && generalCheck.checked == false){
        doGeneral = false;
    }
    if (diaryCheck != null && diaryCheck.checked == false){
        doDiary = false;
    }
    if (academicCheck != null && academicCheck.checked == false){
        doAcademic = false;
    }
    if (securityCheck != null && securityCheck.checked == false){
        doSecurity = false;
    }

    // Wait for data to load
    window.data.then(function(loaded_data) {
    
    /*
     // RCT open modal dialog window if it exists
     // http://stackoverflow.com/questions/5629684/how-to-check-if-element-exists-in-the-visible-dom
     var dialog =  document.getElementById('search_window');
     if (dialog != null) {
        // http://stackoverflow.com/questions/17569012/simulate-a-click-on-a-element-using-javascript-jquery
        //document.getElementById('search-result-window').click();
        dialog.show();
     }
     */
      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];
          
          // from https://gist.github.com/jlong/2428561
          var parser = document.createElement('a');
          parser.href = item.url;
          var path = parser.pathname;
          var pathLen = path.length;
          var isPage = path.substr( pathLen - 1, 1) != '/';
          var isIndex = path.includes("index") || ! isPage;
          var categories= item.categories;
          
          var isGeneral = categories.includes("general");
          var isDiary = categories.includes("diary");
          var isAcademic = categories.includes("academic");
          var isSecurity = categories.includes("security");
          
          if (
             ((item.collection == 'info' || item.collection.length == 0 || isIndex) && doMisc)
          || (!isIndex && item.collection != 'info' && item.collection != 'posts' && doDocs)
          || (!isIndex && item.collection == 'posts'  && doBlogs &&
               (( isGeneral && doGeneral) ||
                ( isDiary && doDiary) ||
                ( isAcademic && doAcademic) ||
                ( isSecurity && doSecurity)
               )
               )
             ){
          
            // Build a snippet of HTML for this result
            var collectionString = '';
            if (item.collection == 'posts'){
                if (item.categories.length > 0) {
                    collectionString = ' (' + item.categories + ')';
                } else {

                    var pathString = parser.pathname;
                    var pathLen = pathString.length;
                    pathString = pathString.substr( 1, pathLen - 2);
                    pathString = pathString.replace(/\//g, ', ');
                    collectionString = ' (' + pathString + ')';
                }
            } else {
                if (item.collection.length > 0){
                collectionString = ' (' + item.collection + ')';
                }
            }
            if (collectionString.length > 0){
                collectionString = '<span class="annotate">' + collectionString + '</span>';
            }
            var appendString = '<li><a href="' + item.url + '">' + item.title + '</a>' + collectionString + '</li>';

            // Add the snippet to the collection of results.
            $search_results.append(appendString);
          }
        });
      } else {
        // If there are no results, let the user know.
        $search_results.html('<li>No results found.<br/>You might check spelling, spacing...</li>');
      }
    });
  }
});
