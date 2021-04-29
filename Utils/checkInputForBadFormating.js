function checkInputForBadFormating(data) {
    data = data.split(/\r\n|\n\r|\n|\r/)
        .map(str => {
            const CORRECT_NUMBER_OF_COMMAS = 3;

            if ((str.match(/,/g) || []).length === CORRECT_NUMBER_OF_COMMAS) {
                const NEW_ARRAY = str.split(',').map(s => s.trim());

                return NEW_ARRAY;
            }

            return 'Bad Format';
        });

    return data;
}