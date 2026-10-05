const searchInput = document.getElementById('search');
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

let activeFilter = 'all';

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const text = card.textContent.toLowerCase();
    const cat = card.dataset.cat;

    const matchesSearch = !query || name.includes(query) || text.includes(query);
    const matchesFilter = activeFilter === 'all' || cat === activeFilter;

    card.style.display = (matchesSearch && matchesFilter) ? 'flex' : 'none';
  });
}

searchInput.addEventListener('input', applyFilters);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});