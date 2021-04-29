function addZeroInFrontIfNecessary(num) {

    if (num < 10) {

        return '0' + num;
    }

    return num;
}

function turnNullInDate(format) {
    const OBJ_DATE = new Date();
    const YEAR = OBJ_DATE.getFullYear();
    const MONTH_AS_SHORT_STRING = OBJ_DATE.toLocaleString('default', { month: 'short' });

    let month = OBJ_DATE.getMonth() + 1;
    let day = OBJ_DATE.getDay();

    month = addZeroInFrontIfNecessary(month);
    day = addZeroInFrontIfNecessary(day);

    switch (format) {
        case 'YYYY-MM-DD':

            return `${YEAR}-${month}-${day}`;
        case 'MM/DD/YYYY':

            return `${month}/${day}/${YEAR}`;
        case 'DD MMM YYYY':

            return `${day} ${MONTH_AS_SHORT_STRING} ${YEAR}`;
    }
    
}