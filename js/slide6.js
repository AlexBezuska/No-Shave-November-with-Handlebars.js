var templateSourceSlide6 = document.getElementById('slide6-template').innerHTML;

var templateSlide6 = Handlebars.compile(templateSourceSlide6);

var resultsPlaceholderSlide6 = document.getElementById('slide6-results');

var dataSlide6 = {
    "game": "Papers please",
    "developer": "Lucas Pope"
};

resultsPlaceholderSlide6.innerHTML = templateSlide6(dataSlide6);