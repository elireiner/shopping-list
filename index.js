function interactiveList() {
    $('form').submit(function (event) {
        event.preventDefault();
        let userInput = $(this).find(`input[name="shopping-list-entry"]`).val();
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
    $(`ul[class="shopping-list"]`).on('click', 'button[class="shopping-item-toggle"]', function (event) {
        $(this).closest('div[class="shopping-item-controls"]').prev().toggleClass("shopping-item__checked");
    });
    $(`ul[class="shopping-list"]`).on('click', 'button[class="shopping-item-delete"]', function (event) {
        $(this).closest('li').remove();
    });
};

$(interactiveList);