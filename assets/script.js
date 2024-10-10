$(document).ready(function () {
    let isCardExpanded = false; // To keep track of the expanded state

    $('.card').on('click', function () {
        const $card = $(this);
        const $overlay = $('.overlay');

        // If a card is already expanded, do nothing when clicked
        if (isCardExpanded) {
            return;
        }

        // Set expanded state to true
        isCardExpanded = true;

        // Add expanded class to clicked card, disable hover effect, and show overlay
        $card.addClass('expanded-card no-hover');
        $overlay.show();

        // Close expanded card when the overlay is clicked
        $overlay.on('click', function () {
            $card.removeClass('expanded-card no-hover');
            $overlay.hide();
            isCardExpanded = false; // Reset expanded state after closing
        });
    });
});