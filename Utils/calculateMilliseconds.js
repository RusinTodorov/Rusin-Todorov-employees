function setDate(arr, i, j) {
    const MILLISECONDS = new Date(arr[i][j]).getTime();

    if (isNaN(MILLISECONDS)) {
        showMessage('Incorrect date!!!');
        stopRunning = true;
        
        return;
    }

    return MILLISECONDS;
}

function calculateMilliseconds(arr) {
    const FIRST_ARRAY_INDEX = 0;
    const SECOND_ARRAY_INDEX = 1;
    const TIME_START_INDEX = 2;
    const TIME_END_INDEX = 3;

    const FIRST_START = setDate(arr, FIRST_ARRAY_INDEX, TIME_START_INDEX);
    const SECOND_START = setDate(arr, SECOND_ARRAY_INDEX, TIME_START_INDEX);
    const FIRST_END = setDate(arr, FIRST_ARRAY_INDEX, TIME_END_INDEX);
    const SECOND_END = setDate(arr, SECOND_ARRAY_INDEX, TIME_END_INDEX);

    const LATER_START = FIRST_START >= SECOND_START ? FIRST_START : SECOND_START;
    const EARLIER_END = FIRST_END <= SECOND_END ? FIRST_END : SECOND_END;

    const MILLISECONDS = EARLIER_END - LATER_START;

    if (MILLISECONDS > 0) {
        
        return MILLISECONDS;
    }

    return 0;
}
