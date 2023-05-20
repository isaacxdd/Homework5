$(() => {
  
  let $container = $('#container');
    
   
    $('#container').append($h1= $('<h1>').text('Hogwarts'))
    $('#container').append($h2= $('<h2>').text('Isaac'))
    $('#container').append($h3= $('<h3>').text('Gryffindor'))
    $('#container').append($h4= $('<h4>').text('Victor').addClass('owl'))
    $('#container').append($h4= $('<h4>').text('Holly Wand with Unicorn Hair Core'))
    $('#container').append()

    let $unorderedList = $('<ul>').attr('storage', 'Trunk');
    $unorderedList.append($('<li>').text('butter beer'));
    $unorderedList.append($('<li>').addClass('secret').text('invisibility cloak'));
    $unorderedList.append($('<li>').addClass('secret').text('magic map'));
    $unorderedList.append($('<li>').addClass('secret').text('time turner'));
    $unorderedList.append($('<li>').addClass('owl').text('leash'));
    $unorderedList.append($('<li>').text('"Bertie Bott\'s Every Flavor [Jelly] Beans"'));
  
    $container.append($unorderedList);

    $('#container').append($h5= $('<h5>').text('Spring 2017'))

    let $table = $('<table>');
    let $thead = $('<thead>');
    $thead.append($('<tr>').append($('<th>').text('Day'), $('<th>').text('Classes')));
    $table.append($thead);
  
    let $tbody = $('<tbody>');
    $tbody.append($('<tr>').append($('<td>').text('Monday'), $('<td>').text('History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
    $tbody.append($('<tr>').append($('<td>').text('Tuesday'), $('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')));
    $tbody.append($('<tr>').append($('<td>').text('Wednesday'), $('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
    $tbody.append($('<tr>').append($('<td>').text('Thrusday'), $('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
    $tbody.append($('<tr>').append($('<td>').text('Friday'), $('<td>').text('Quidditch practice,  Potions, Transfiguration')));
    $table.append($tbody);
  
    $container.append($table);
  });