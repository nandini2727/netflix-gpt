# Netflix GPT

Netflix GPT is a web application that uses React and GPT technology to suggest movies for you to watch based on your preferences. Whether you're looking for a light-hearted comedy, an intense thriller, or a heartwarming drama, Netflix GPT can provide personalized movie recommendations.

## Features

- **Movie Suggestions**: Get personalized movie recommendations by simply typing in your preferences, mood, or genre.
- **React-Based UI**: A responsive and sleek interface built using React.
- **GPT-Powered**: Utilizes GPT to generate smart, contextual movie suggestions based on user input.
- **Dynamic Search**: Quickly narrow down movie genres, themes, or specific preferences.

## Tech Stack

- **Frontend**: React.js (with functional components and hooks)
- **Backend**: GPT (integrated via  API )
- **Styling**: TailwindCSS
- **Deployment**: Deployed on firebase

## Installation

Follow these steps to run Netflix GPT on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/nandini2727/netflix-gpt.git
   ```

2. Navigate to the project directory:

   ```bash
   cd netflix-gpt
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your GPT API key:

   ```
   REACT_APP_GPT_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to use the app.

## How It Works

1. Open the app and type in a brief description of the kind of movie you’re looking for. For example: "I want a feel-good comedy" or "I like suspenseful thrillers."
2. Hit the "Search" button.
3. Netflix GPT will use GPT’s language model to analyze your input and provide a list of movie recommendations that match your request.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. You can also open an issue to suggest features or report bugs.

## To-Do

- Genre-Specific Filters:

  Allow users to filter suggestions by genres (e.g., Action, Comedy, Drama).

  Add checkboxes or dropdowns for easier selection of genres or themes.
- User Preferences and Personalization:

  Add feature to save preferences (favorite genres, liked movies, etc.).

  Enable personalization based on previous searches and watch history.
- Dark Mode:

  Add a toggle for light and dark themes to improve accessibility and customization.
- Offline Mode:



  Cache some recommendations locally for use when users are offline.

---

Feel free to explore, contribute, and share Netflix GPT. Enjoy personalized movie recommendations at your fingertips!

