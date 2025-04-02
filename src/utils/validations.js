import { z } from 'zod';

// Definir un esquema para validar un formulario de registro
const registerSchema = z.object({
  username: z.string().min(5, 'El nombre de usuario debe tener al menos 5 caracteres'),
  email: z.string().email('El correo electrónico no es válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
  .regex(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
  .regex(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
  .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
  .regex(/[^a-zA-Z0-9]/, 'La contraseña debe contener al menos un carácter especial'),
  confirmPassword:z.string().min(6,'La confirmación de contraseña debe tener al menos 6 caracteres'),
  agreement:z.boolean().refine(val => val === true, {
    message: 'Debes aceptar las políticas de privacidad y condiciones',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

export  {registerSchema}
