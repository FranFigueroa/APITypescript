"use strict";
//structure
//Required External modules
//App Variables
//App Configuration
//Server Activation
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routes_1 = tslib_1.__importDefault(require("./routers/routes"));
//Required External modules
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv")); //import validateEnv
//App variables
dotenv.config();
(0, validateEnv_1.default)(); //call validateEnv
const port = process.env.PORT;
//App Configuration
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Server Activation
app.listen(port, () => {
    console.log('Listening on port ${port}');
});
//Routes
app.use('/', routes_1.default);
//# sourceMappingURL=index.js.map