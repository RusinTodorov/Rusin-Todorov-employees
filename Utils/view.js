function createTableData(input) {
    const TABLE_DATA = document.createElement('td');
    TABLE_DATA.innerText = input;

    return TABLE_DATA;
}

function createTableRow(arr) {
    const TABLE_BODY = document.getElementById('results');

    const TABLE_ROW = document.createElement('tr');
    TABLE_BODY.appendChild(TABLE_ROW);

    for (let i = 0; i < 4; i++) {
        TABLE_ROW.appendChild(createTableData(arr[i]));
    }

}

function showMessage(message) {
    const MESSAGE = document.getElementById('message');
    MESSAGE.innerText = message;
}

function hideMessage() {
    const MESSAGE = document.getElementById('message');
    MESSAGE.innerHTML = '';
}

let stopRunning = false;