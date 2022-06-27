const { transactions, product, user } = require("../../models")

exports.buyProduct = async (req, res) => {
    try {
        const data = req.body
        const buyProduct = await transactions.create({
            ...data,
            idBuyer: req.user.id,
        })
        console.log(data)


        res.status(200).send({
            status: "Success",
            message: "Buy Product Success",
            data: {
                transactions: {
                    id: buyProduct.id,
                    idProduct: buyProduct.idProduct,
                    idSeller: buyProduct.idSeller,
                    price: buyProduct.price
                }
            }
        })
    } catch (error) {
        console.log(error)
        res.status(404).send({
            status: "Buy Products Failed",
            message: "Server Error",
        });
    }
}

exports.getTransactions = async (req, res) => {
    try {
        const data = await transactions.findAll({
            attributes: {
                exclude: ['idProduct', 'idBuyer', 'idSeller', 'createdAt', 'updatedAt']
            },
            include: [
                {
                    model: product,
                    as: "product",
                    attributes: {
                        exclude: ['desc', 'price', 'qty', 'idUser', 'createdAt', 'updatedAt']
                    }
                },
                {
                    model: user,
                    as: "buyer",
                    attributes: {
                        exclude: ['password', 'idUser', 'createdAt', 'updatedAt']
                    }
                },
                {
                    model: user,
                    as: "seller",
                    attributes: {
                        exclude: ['password', 'idUser', 'createdAt', 'updatedAt']
                    }
                }
            ]
        })

        res.status(200).send({
            status: "Get data Transaction Success",
            data,
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            status: "Get data Transactions Failed",
            message: "Server Error",
        });
    }
}


