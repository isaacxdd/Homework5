$(() => {
  let $container = $('#container');

  let $h1 = $('<h1>').text('Hogwarts');
  let $h2 = $('<h2>').text('Isaac');
  let $h3 = $('<h3>').text('Gryffindor');
  let $h4 = $('<h4>').text('Victor').addClass('owl');
  let $h4Wand = $('<h4>').text('Holly Wand with Unicorn Hair Core');

  $container.append($h1, $h2, $h3, $h4, $h4Wand);

  let $unorderedList = $('<ul>').attr('storage', 'Trunk');
  $unorderedList.append($('<li>').text('butter beer'));
  $unorderedList.append($('<li>').addClass('secret').text('invisibility cloak'));
  $unorderedList.append($('<li>').addClass('secret').text('magic map'));
  $unorderedList.append($('<li>').addClass('secret').text('time turner'));
  $unorderedList.append($('<li>').addClass('owl').text('leash'));
  $unorderedList.append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));

  $container.append($unorderedList);

  let $h5 = $('<h5>').text('Spring 2017');
  $container.append($h5);

  let $table = $('<table>');
  let $thead = $('<thead>');
  $thead.append($('<tr>').append($('<th>').text('Day'), $('<th>').text('Classes')));
  $table.append($thead);

  let $tbody = $('<tbody>');
  $tbody.append($('<tr>').append($('<td>').text('Monday'), $('<td>').text('History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
  $tbody.append($('<tr>').append($('<td>').text('Tuesday'), $('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')));
  $tbody.append($('<tr>').append($('<td>').text('Wednesday'), $('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
  $tbody.append($('<tr>').append($('<td>').text('Thursday'), $('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
  $tbody.append($('<tr>').append($('<td>').text('Friday'), $('<td>').text('Quidditch practice, Potions, Transfiguration')));
  $table.append($tbody);

  $container.append($table);

  
  $h4Wand.remove();

  
  $unorderedList.find('li:contains("butter beer")').remove();

  
  let $newWand = $('<h4>').text('Elder Wand').insertAfter($h4);

   $newWand.css('color', 'blue');
   
  
   let $insert = $('ul[storage="Trunk"] li:nth-child(4)');
   $insert.detach();
   $insert.insertBefore('ul[storage="Trunk"] li:nth-child(2)');
   $insert.detach();
   $insert.insertAfter('ul[storage="Trunk"] li:nth-child(4)');

  $('.secret').hide('slow').delay(2000);

  setTimeout(() => {
    $('.secret').show('slow');
  }, 2000);

  $insert.addClass('cabbage');

  $insert.removeClass('cabbage');

  $("#container h5").text("Fall 2018");
  $unorderedList.prepend($('<li>').text('Butter beer'));
  $unorderedList.attr('storage', 'chest');


});
