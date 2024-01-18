$(document).ready(function() {
  const list1 = $('#list1');
  const list2 = $('#list2');

  // Example items. You can replace this with your actual list items.
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

  // Add items to the first list
  items.forEach(item => {
      const li = $('<li>').text(item);
      list1.append(li);
  });

  // Function to move overflowing items to the second list
  function adjustLists() {
      const list1Rect = list1[0].getBoundingClientRect();
      list1.find('li').each(function() {
          const li = $(this);
          if (li[0].getBoundingClientRect().right > list1Rect.right) {
              list2.append(li);
          }
      });

      // Move items back to the first list if there is space
      list2.find('li').each(function() {
          const li = $(this);
          list1.append(li);
          if (li[0].getBoundingClientRect().right > list1Rect.right) {
              list2.append(li);
          }
      });
  }

  // Adjust lists on window resize
  $(window).resize(adjustLists);

  // Initial adjustment
  adjustLists();
});