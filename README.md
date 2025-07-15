# NewsExplorer

A modern web application for exploring and saving news from different sources. Users can search for articles by topics, save their favorites, and access them from any device.

## 🚀 Features

- **News Search**: Search for articles by keywords
- **User Authentication**: Registration and login system
- **Saved Articles**: Save and access your favorite articles
- **Responsive Interface**: Adaptive design for mobile and desktop
- **Smooth Animations**: Fluid transitions with Framer Motion
- **Route Protection**: Restricted access for authenticated users

## 🛠️ Technologies Used

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Styling**: CSS3 with responsive design
- **State Management**: React Hooks (useState, useEffect)
- **API**: NewsAPI for fetching news
- **Authentication**: Simulated system with localStorage

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd newsproject
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🎯 Main Features

### 🔍 News Search

- Search for articles by topic or keyword
- Real-time results
- Automatic pagination with "Show More"

### 👤 Authentication System

- **Registration**: Create a new account with name, email, and password
- **Login**: Access with email and password
- **Success Message**: Visual confirmation after successful registration
- **Logout**: Secure session termination

### 💾 Saved Articles

- Save favorite articles by clicking the save button
- Access your saved articles from the menu
- Dedicated view with saved articles statistics
- Route protection: only authenticated users can access

### 📱 Responsive Design

- Adaptive interface for mobile, tablet, and desktop
- Hamburger menu for mobile devices
- Intuitive navigation across all screens

## 🏗️ Project Structure

```
src/
├── components/
│   ├── About/           # "About the author" section
│   ├── Footer/          # Footer
│   ├── Header/          # Header with search
│   ├── LogIn/           # Login form
│   ├── Main/            # Main component
│   ├── ModalWithForm/   # Modal for forms
│   ├── NavBar/          # Navigation bar
│   ├── NewsCard/        # News cards
│   ├── PageTransition/  # Page transitions
│   ├── SearchForm/      # Search form
│   └── SignUp/          # Registration form
├── pages/
│   └── App.jsx          # Main application component
├── utils/
│   ├── auth.js          # Authentication functions
│   ├── NewsApi.js       # News API
│   └── Api.js           # Simulated API for saved articles
├── assets/              # Images and resources
└── data/                # Static data
```

## 🎨 UX/UI Features

### Form States

- **Real-time validation**: Buttons are disabled if fields are empty
- **Loading states**: "Signing up..." and "Signing in..." during submission
- **Error messages**: Visual feedback for authentication errors
- **State colors**: Gray buttons (#E6E8EB) when disabled

### Navigation

- **Protected routes**: `/saved-articles` only accessible to authenticated users
- **Automatic redirection**: Unauthenticated users are redirected to the main page
- **Contextual menu**: Different options based on authentication status

### Animations

- **Page transitions**: Smooth animations between routes
- **Modals**: Animated opening and closing
- **Hover effects**: Visual interactions on buttons and links

## 🔧 Configuration

### Environment Variables

To use the real news API, create a `.env` file in the project root:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

### Customization

- **Colors**: Modify CSS variables in style files
- **Fonts**: Change fonts in `src/index.css`
- **Images**: Replace images in `src/assets/`

## 🚀 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build application for production
npm run preview      # Preview production build
npm run lint         # Run linter (if configured)
```

## 📱 Compatibility

- **Browsers**: Chrome, Firefox, Safari, Edge (modern versions)
- **Devices**: Mobile, tablet, desktop
- **Resolutions**: 320px - 1920px+

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 👨‍💻 Author

Developed as part of the TripleTen program.

---

**Enjoy exploring the news! 📰**
