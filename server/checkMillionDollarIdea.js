const checkMillionDollarIdea = (req, res, next) => {
    // Get variables from object pass as req.body in specification
    const { numWeeks, weeklyRevenue } = req.body;

    // Calculate total of Ideas, converting to numbers
    const totalOfIdea = Number(weeklyRevenue) * Number(numWeeks);

    // Check 'truthiness' and validity of variables and calculation
    if (!numWeeks || !weeklyRevenue || isNaN(numWeeks) || isNaN(weeklyRevenue) ||
        isNaN(totalOfIdea) || totalOfIdea < 1000000) {
        // Generate response code and send
        // Either invalid data or failed business rule of idea being worth at least
        // $1M 
        res.status(400).send();
    } else {
        // return to calling procedure, continue with stack
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
