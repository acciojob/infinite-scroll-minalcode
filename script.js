//your code here!

const list = document.getElementById("infi-list");

let count = 1;

// Add 10 list items initially
function addItems(number) {
    for (let i = 0; i < number; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${count}`;
        list.appendChild(li);
        count++;
    }
}

// Initially add 10 items
addItems(10);

// Add 2 more items when the user reaches the bottom
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
        addItems(2);
    }
});

