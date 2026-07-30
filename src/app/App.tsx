import { useTheme } from '../shared/context/ThemeContext';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center transition-colors duration-300">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
        🚀 ChatFlow - Dark Mode Ready!
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
      </button>
    </div>
  );
};