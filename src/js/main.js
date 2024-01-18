$(document).ready(function () {
  const list1 = $('#list1');
  const list2 = $('#list2');

  // Function to move overflowing items to the second list
  function adjustLists() {
    const list1Rect = list1[0].getBoundingClientRect();
    list1.find('li').each(function () {
      const li = $(this);
      if (li[0].getBoundingClientRect().right > list1Rect.right) {
        list2.append(li);
      }
    });

    // Move items back to the first list if there is space
    list2.find('li').each(function () {
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
