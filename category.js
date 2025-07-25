function filterProducts(category) {
      const allCards = document.querySelectorAll('.product-card');
      allCards.forEach(card => {
        if (category === 'all') {
          card.classList.remove('d-none');
        } else {
          if (card.classList.contains(category)) {
            card.classList.remove('d-none');
          } else {
            card.classList.add('d-none');
          }
        }
      });
    }