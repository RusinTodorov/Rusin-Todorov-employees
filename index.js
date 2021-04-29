(function () {
    const FORM = document.getElementById('inputForm');

    FORM.addEventListener('submit', e => {
        e.preventDefault();
        hideMessage();

        const INPUT_TEXT_FILE = document.getElementById('inputTxtFile').files[0];
        const FORMAT = document.getElementById('formats').value;
        const FILE_READER = new FileReader();

        FILE_READER.onload = function () {
            let data = FILE_READER.result.trim();
            data = checkInputForBadFormating(data);

            if (!data.includes('Bad Format')) {
                data = correctingNulls(data, FORMAT);
                data = findCouples(data);

                if (data === 'Sorry, no couples have been found!!!') {
                    showMessage(data);
                    console.log(data);

                    return;
                }

                data = reduceData(data);

                if (stopRunning) {
                    console.log('Incorrect date!!!');

                    return;
                }

                if (data.length > 0) {
                    data = finalResults(data);

                    data.forEach(arr => {
                        console.log(arr);
                        createTableRow(arr);
                    });
                } else {
                    showMessage('Sorry, no results were found!!!');
                    console.log('Sorry, no results were found!!!');

                    return;
                }

            } else {
                showMessage('Data includes some bad formating!!!');
                console.log('Data includes some bad formating!!!');

                return;
            }

        }

        FILE_READER.readAsText(INPUT_TEXT_FILE);
    });
})();