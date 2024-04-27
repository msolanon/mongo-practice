const product = require("../models/product");

class ProductController {
    // Crea un nuevo product
    async create(req, res) {
        try {
            const data = await product.create(req.body);
            return res.json(data);
        } catch (err) {
            res.status(500).send({
                message:
                    err.message || "Error creating a product product"
            });
        }
    };

    // Retorna todos los products registrados
    async findAll(req, res) {
        try {
            const data = await product.find({});
            return res.json(data);
        } catch (err) {
            res.status(500).send({
                message:
                    err.message || "Error searching product"
            });
        }
    };

    // Retorna un product
    async findOne(req, res) {
        const id = req.params.id;

        try {
            const data = await product.findById(id);

            if (!data)
                res.status(404).send({ message: "product not found " + id });
            else res.send(data);

        } catch (err) {
            res
                .status(500)
                .send({ message: "Error, cant find product id=" + id });
        };
    };

    // Actualiza un product a partir de su id
    async update(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }

        const id = req.params.id;

        try {
            const data = await product.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

            if (!data) {
                res.status(404).send({
                    message: `Product with id=${id} can not be updated.`
                });
            } else res.send({ message: "product successfully updated." });
        }
        catch (err) {
            res.status(500).send({
                message: "Error update product id=" + id
            });
        }
    };

    // Delete a Tutorial with the specified id in the request
    async delete(req, res) {
        const id = req.params.id;

        try {
            const data = await product.findByIdAndDelete(id)

            if (!data) {
                res.status(404).send({
                    message: `No fue posible borrar el product con el id=${id}.`
                });
            } else {
                res.send({
                    message: `El producto ${id} fue borrado correctamente!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: "Error, no fue posible borrar el product con el id=" + id
            });
        }
    };
}

module.exports = new ProductController();