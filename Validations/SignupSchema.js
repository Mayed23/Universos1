import { object, string, ref } from 'yup'

export const signupSchema = object().shape({
  email: string()
    .email('El Correo no es Válido')
    .required('El email es requerido'),
  password: string()
    .min(6, 'La contraseña debe contener como minimo 6 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Las contraseñas no coinciden')
    .required(),
})