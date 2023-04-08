"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const users_controller_1 = tslib_1.__importDefault(require("../controllers/users.controller"));
const usersRouter = (0, express_1.Router)();
const usersController = new users_controller_1.default();
usersRouter.get('/users', usersController.getUsers);
usersRouter.get('/users/:id', usersController.getUserById);
exports.default = usersRouter;
//# sourceMappingURL=users.routes.js.map