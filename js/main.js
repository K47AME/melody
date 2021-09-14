$(document).ready(function(){
    let currentFloor = 2;
    let floorPath = $('.home-image path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let modal = $('.modal')
    let modalCloseButton = $('.modal-close-button')


    floorPath.on('mouseover', function(){
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', function(){
        modal.toggleClass('is-open');
    });

    modalCloseButton.on('click', function (){
        modal.toggleClass('is-open')
    });

    function usCounterFloor(floor) {
        return floor.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    }

    function floorToggle(floor) {
        $('.counter').text(usCounterFloor(floor));
        floorPath.removeClass('current-floor');
        $(`[data-floor="${usCounterFloor(floor)}"]`).toggleClass('current-floor');
    };

    counterUp.on('click', function(){
        if (currentFloor < 18){
            currentFloor++;
            floorToggle(currentFloor);
        }
    });

    counterDown.on('click', function(){
        if (currentFloor > 2){
            currentFloor--;
            floorToggle(currentFloor);
        }
    });

    function deleteClass() {
        flatsPath.removeClass('current-flat');
        flatsLink.removeClass('current-flat');
    }

    flatsPath.on('mouseover', function() {
        deleteClass();
        $(`[data-flat-link="${$(this).attr('data-flat')}"]`).toggleClass('current-flat');
    });

    flatsLink.on('mouseover', function() {
        deleteClass();
        $(`[data-flat="${$(this).attr('data-flat-link')}"]`).toggleClass('current-flat');
    });
});