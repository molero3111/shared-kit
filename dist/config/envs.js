"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvVars = validateEnvVars;
require("dotenv/config");
const joi = require("joi");
function validateEnvVars(envsValidations) {
    const envVarsSchema = joi.object(envsValidations).unknown(true);
    const { error, value: validatedEnvVars } = envVarsSchema.validate(process.env, { abortEarly: false });
    if (error) {
        throw new Error(`Config validation error: ${error.details.map(err => err.message).join(', ')}`);
    }
    return validatedEnvVars;
}
