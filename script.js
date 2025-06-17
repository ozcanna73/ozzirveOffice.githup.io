    const searchInput = document.getElementById('searchInput');
    const boxes = document.getElementById('boxes');

    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const boxesChildren = boxes.querySelectorAll('.box');

      boxesChildren.forEach(box => {
        let hasMatchInBox = false;
        const products = box.querySelectorAll('.urun');
        products.forEach(product => {
          const text = product.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
            product.style.display = '';
            hasMatchInBox = true;
          } else {
            product.style.display = 'none';
          }
        });
        box.style.display = hasMatchInBox ? '' : 'none';
      });
    });
