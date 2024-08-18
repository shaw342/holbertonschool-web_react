import $ from "jquery";
import _ from 'lodash';

$(document).ready(function() {
    $("body").append("<p>Holberton Dashboard</p>");
    $("body").append("<p>Dashboard data for the students</p>");
    $("body").append("<button>Click here to get started</button>");
    $("body").append("<p id='count'></p>");

    let count = 0;
    function updataCounter() {
        count++;
        $("p").text(`${count} clicks on the button`)
    }
    $('button').on('click', _.debounce(updateCounter, 500));
})