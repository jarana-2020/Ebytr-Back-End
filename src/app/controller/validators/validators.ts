import { Schema, ValidationError } from 'joi';

export async function runSchema<T>(schema: Schema<T>, value: unknown):Promise<T> {
  try {
    const result = await schema.validateAsync(value);
    return result as T; 
  } catch (_error) {
    const error: ValidationError = _error as any;
    error.message = error.details[0].message;
    throw error;
  }
}