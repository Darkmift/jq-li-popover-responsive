document.addEventListener('DOMContentLoaded', function () {
  const list1 = document.getElementById('list1');
  const list2 = document.getElementById('list2');

  // Example items. You can replace this with your actual list items.
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

  // Add items to the first list
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list1.appendChild(li);
  });

  // Function to move overflowing items to the second list
  function adjustLists() {
    // Move items to the second list if they overflow
    const list1Rect = list1.getBoundingClientRect();
    Array.from(list1.children).forEach((li) => {
      if (li.getBoundingClientRect().right > list1Rect.right) {
        list2.appendChild(li);
      }
    });

    // Move items back to the first list if there is space
    Array.from(list2.children)
      .slice()
      .forEach((li) => {
        list1.appendChild(li);
        if (li.getBoundingClientRect().right > list1Rect.right) {
          list2.appendChild(li);
        }
      });
  }

  // Adjust lists on window resize
  window.addEventListener('resize', adjustLists);

  // Initial adjustment
  adjustLists();
});
