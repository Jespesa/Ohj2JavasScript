document.getElementById('searchForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  if (!query) {
    console.error('Please enter a TV series name.');
    return;
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error('Failed to retrieve data');
    }

    const data = await response.json();
    if (data.length === 0) {
      console.log('No results found for the given query.');
    } else {
      console.log('Search Results:');
      data.forEach(show => {
        console.log(`${show.show.name} - ${show.show.url}`);
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
});
