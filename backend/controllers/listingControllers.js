const getListingsByAddress = async (req, res, next) => {

    console.log(req.body.city);

    res
    .status(201)
    .json({
        listings: ["an array of JSON objects with each listing's name, amount left to donate and city"]
    });
};

const donate = async (req, res, next) => {
    res
    .status(201)
    .json({
        businessName: req.body.businessName,
        loanerFirstName: req.body.loanerFirstName,
        loanerLastName: req.body.loanerLastName,
        loanerEmail: req.body.loanerEmail,
        amountDonated: req.body.amountDonated
    });
}


const createListing = async (req, res, next) => {
    res
    .status(201)
    .json({
        businessName: req.body.businessName,
        amountNeeded: req.body.amountNeeded,
        loanPurpose : req.body.loanPurpose,
        businessInfo: req.body.businessInfo,
        city: req.body.city
    });
}

exports.donate = donate;
exports.createListing= createListing;
exports.getListingsByAddress = getListingsByAddress;