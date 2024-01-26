console.log(resources)

let resourceHTML = '';

document.addEventListener('click', () => {
    const buttons = document.querySelectorAll('section ul button');
    const main = document.querySelector('main');

    buttons.forEach(button => button.addEventListener('click', () => {
        const category = button.querySelector('a').textContent;
        const filteredResources = resources.filter(resource => resource.category === category);

        resourceHTML = filteredResources.map(resource => `
            <div class="resource">
                <h2>${resource.category}</h2>
                <p>${resource.text}</p>
                <ul>${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>
            </div>
        `);

        main.innerHTML = resourceHTML

    }));
});
