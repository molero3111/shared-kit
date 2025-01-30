import 'dotenv/config';
import * as joi from 'joi';
export declare function validateEnvVars<T extends joi.SchemaMap>(envsValidations: T): any;
