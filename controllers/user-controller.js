// Importa los modelos necesarios
const { User } = require('../models');

const userController = {
  // Controlador para registrar un nuevo usuario
  registerUser: async (req, res) => {
    try {
      const { email, password, phoneNumber } = req.body;
      // Crea un nuevo usuario en la base de datos
      const newUser = await User.create({ email, password, phoneNumber });
      // Puedes agregar aquí la lógica para generar tokens de autenticación si es necesario
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  },

  // Controlador para iniciar sesión
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      // Busca al usuario en la base de datos por correo electrónico y contraseña
      const user = await User.findOne({ where: { email, password } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      // Puedes agregar aquí la lógica para generar tokens de autenticación si es necesario
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while logging in' });
    }
  },

  // Otros métodos y controladores relacionados con la gestión de usuarios
};

module.exports = userController;
