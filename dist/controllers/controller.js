"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor() {
        this.getIndex = async (req, res) => {
            try {
                res.status(200).send('HelloWorld!');
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.getApi = async (req, res) => {
            try {
                res.status(200).send('This is an API endpoint');
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.getApibyId = async (req, res) => {
            try {
                res.status(200).json({ id: req.params.id });
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map