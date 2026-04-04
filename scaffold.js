const fs = require('fs');
const path = require('path');

const basePath = process.cwd();

const files = [
    // frontend
    "frontend/src/pages/Home.jsx",
    "frontend/src/pages/About.jsx",
    "frontend/src/pages/Services.jsx",
    "frontend/src/pages/Contact.jsx",
    "frontend/src/layouts/dummy.txt",
    "frontend/src/components/dummy.txt",
    "frontend/src/assets/dummy.txt",
    "frontend/public/dummy.txt",
    "frontend/src/App.jsx",
    "frontend/src/main.jsx",
    "frontend/src/router.jsx",
    "frontend/index.html",
    "frontend/tailwind.config.js",
    "frontend/postcss.config.js",
    "frontend/package.json",

    // admin
    "admin/src/pages/Dashboard.jsx",
    "admin/src/pages/Login.jsx",
    "admin/src/pages/ManageServices.jsx",
    "admin/src/pages/ManageUsers.jsx",
    "admin/src/components/dummy.txt",
    "admin/src/App.jsx",
    "admin/src/main.jsx",
    "admin/package.json",

    // backend
    "backend/config/db.js",
    "backend/controllers/authController.js",
    "backend/controllers/serviceController.js",
    "backend/controllers/userController.js",
    "backend/models/User.js",
    "backend/models/Service.js",
    "backend/routes/authRoutes.js",
    "backend/routes/serviceRoutes.js",
    "backend/routes/userRoutes.js",
    "backend/middleware/authMiddleware.js",
    "backend/.env",
    "backend/server.js",
    "backend/package.json"
];

files.forEach(file => {
    const fullPath = path.join(basePath, file);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    // Write the requested example text
    fs.writeFileSync(fullPath, "// this is exmple text\n", 'utf8');
});

console.log("Scaffolding complete.");
