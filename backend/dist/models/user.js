"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    type: String
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('user', userSchema);
// module.exports = model('user', userSchema);
