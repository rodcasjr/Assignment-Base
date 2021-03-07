async function windowActions() {
    // console.log('window loaded');
    const form = document.querySelector('.search-form');
    const search = document.querySelector('#name');
    const suggestions = document.querySelector('.suggestions');

    const request = await fetch('/api');
    const data = await request.json();

    const appendBox = document.createElement
  
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => record.name.toUpperCase() === search.value.toUpperCase());

        console.log(display);
        console.table(display); 
    });
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value) 
    });
}
window.onload = windowActions;
    // search.addEventListener('input', (event) => {
    //     console.log('input', event.target.value)
    // });

    //   const request = await fetch('/api', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({data: search.value})
    //   });
    //   const data = await request.json();
    //   console.log(request);