"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("c:/Users/FRAN/Desktop/01proyectos/APITypescript/src/utils/data");
class UsersController {
    constructor() {
        this.getUsers = async (req, res) => {
            try {
                res.status(200).json(data_1.users);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.getUserById = async (req, res) => {
            try {
                const user = data_1.users.find(u => u.id === parseInt(req.params.id));
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).send('User not found');
                }
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map