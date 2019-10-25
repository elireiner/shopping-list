function interactiveList() {
    $('form').submit(function (event) {
        event.preventDefault();
        let userInput = $(event.currentTarget).find(`input[name="shopping-list-entry"]`).val();
        $(`ul[class="shopping-list"]`).append(`<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`)
    })
    $(`ul[class="shopping-list"]`).click(function (event) {
        if (event.target.className === 'shopping-item-toggle') {
            console.log('hi');
            //$(event.target).closest('span[class="shopping-item"]').toggleClass("shopping-item__checked");
        }
    })
}

$(interactiveList);