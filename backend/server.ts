const express = require('express');
const cors = require('cors');

import dotenv from 'dotenv';
import authRoutes from './src/routes/auth.routes';
import roleRoutes from './src/routes/role.routes';
import userRoutes from './src/routes/user.routes';
import { server_port } from './src/utils/secret';
import { initRoles } from './src/database/initdb/initrole'
//import { initDB } from './src/database/init';

dotenv.config();

async function startServer() {
    const app = express();

    // Configuration des middlewares
    app.use(cors({ origin: "*" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    try {
        // Initialisation de la base de données
        await initRoles();  // Assure-toi que l'initialisation est terminée avant de démarrer le serveur
        console.log('Base de données initialisée avec succès');
        
        // Utilisation des routes d'authentification
        app.use('/api/auth', authRoutes);
        app.use('/api/role', roleRoutes);
        app.use('/api/user', userRoutes);

        // Démarrage du serveur
        app.listen(server_port, () => {
            console.log(`Server running on port ${server_port}`);
        });
    } catch (err) {
        console.error('Erreur lors de l\'initialisation de la base de données :', err);
        process.exit(1);  // Arrêter le serveur si l'initialisation échoue
    }
}

startServer();
