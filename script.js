$(function() {
    $('#js-shopping-list-form').submit(
    //$('body').on('submit', '#js-shopping-list-form', 
    //submit() 
    //for creating multiple forms
    function(event) {
      event.preventDefault();//prevents page from reloading
    console.log("Hello Henry!")
    //add value to the list and # is used to define id in the html code
    const value = $('#shopping-list-entry').val()
    //use JQuery ul to find the ul element and .append adds an html DOM web page
    console.log(value);
    $('ul').append(`
      <li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `)
  });

  $('ul').on('click', '.shopping-item-delete', function(event) {
   const input = $(this).parent().parent().remove();
   console.log(input)
  });
    $('ul').on('click', '.shopping-item-toggle', function(event) {
      //$(this) points to the specific button and .parent transverses upward to the parent buttons such as div, ul, il ...the siblings of the div in our html eg are the buttons
      const input = $(this).parent().siblings
      (".shopping-item").toggleClass("shopping-item__checked");
      // . dot means by class and # hashtag means by id
    console.log(input);
  });
});
