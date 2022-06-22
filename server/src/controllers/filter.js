const req = require("express/lib/request")
const res = require("express/lib/response")

const { product } = require("../../models")

exports.filter = async (req, res) => {
    try {
        
        const dataFilter = await product.findAll({
            include : [
                {
                    model : product,
                    as : "filterProduct",
                    attributes: {
                        include : ["createdAt", "updateAt"],
                    },
                }
            ]
        })

        res.send({
            status : "Success",
            filter : {
                users
            }
        })

    } catch (error) {
        console.log(error);
        res.send({
            status : "error",
            message : "cant find data filter"
        })
    }
}