import 'dotenv/config';
import * as joi from 'joi';

export function validateEnvVars<T extends joi.SchemaMap>(envsValidations: T): joi.ObjectSchema<T> {
    const envVarsSchema = joi.object(envsValidations).unknown(true);

    const { error, value: validatedEnvVars } = envVarsSchema.validate(process.env, { abortEarly: false });

    if (error) {
        throw new Error(`Config validation error: ${error.details.map(err => err.message).join(', ')}`);
    }

    return validatedEnvVars;
}
