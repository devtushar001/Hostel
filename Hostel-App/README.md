# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

switch to 'cd .\Hostel-App'
run the project 'npm run dev'


---Folder Structures

/hostel-website
├── /public
│   ├── index.html
│   └── assets
│       ├── images/
│       └── styles/
├── /src
│   ├── /assets
│   │   ├── /images
│   │   └── /icons
│   ├── /components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── RoomCard.js
│   │   ├── RoomDetails.js
│   │   └── ContactForm.js
│   ├── /pages
│   │   ├── Home.js
│   │   ├── Rooms.js
│   │   ├── RoomDetail.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Booking.js
│   ├── /context
│   │   └── RoomContext.js (if using context API for global state)
│   ├── /services
│   │   └── api.js (API calls to fetch data)
│   ├── /styles
│   │   └── App.css
│   ├── App.js
│   ├── index.js
│   └── routes.js (for routing structure)
└── package.json
