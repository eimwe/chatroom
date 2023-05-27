# Chat Room

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=flat&logo=github&logoColor=white)](https://eimwe.github.io/chatroom/)
Live group chat room made with Vue.js 3 framework along with VueUse composables/renderless components, TailwindCSS + HeadlessUI and Firebase 9 as a backend.

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## API Setup

1. Rename `.env.sample` file into `.env`;
2. [Create Cloud Firestore project](https://firebase.google.com/docs/firestore/quickstart) (Google account required);
3. Replace `const firebaseConfig` contents at `.src/firebase/config.js` with your Firebase configuration excluding `apiKey` (its property should equals to `firebaseApiKey`);
4. Copy/paste your Firebase API key to the `.env` file;
5. Copy API key for a free image randomizer (limited to 50000 API calls per month) from your profile at [https://api-ninjas.com/](https://api-ninjas.com/) (sign up required);
6. Add image randomizer API key to your `.env` file.

## Project Setup

1. Clone the repository
2. Run `npm ci` to install dependencies
3. Run one of the following commands:

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## Test environment

| Browser         | Version |
| --------------- | ------- |
| Google Chrome   | 113     |
| Mozilla Firefox | 113     |
| Safari          | 16      |

## Attributions

1. **Irene** for testing the project across numerous devices 💜
2. [The Net Ninja](https://www.youtube.com/TheNetNinja) for the inspiration fro [this repo](https://github.com/iamshaunjp/Vue-3-Firebase);
3. [Doug Stevenson](https://stackoverflow.com/users/807126/doug-stevenson) for a hint on getting server Timestamp from firebase v9 in [their stackoverflow reply](https://stackoverflow.com/a/69519471) licensed by https://creativecommons.org/licenses/by-sa/4.0/;
4. [anshul](https://stackoverflow.com/users/10900875/anshul) for the example of using Firebase 9 auth for creating user with email and password in [their post](https://stackoverflow.com/a/70914163) licensed by https://creativecommons.org/licenses/by-sa/4.0/;
5. [Erik](https://erikmartinjordan.com/about) for the detailed guide on how to update user's profile with Firebase 9 methods in [this blog entry](https://erikmartinjordan.com/user-update-profile-firebase);
6. [Decade Moon](https://stackoverflow.com/users/734040/decade-moon) for pointing out the way to use methods instead of computed when binding class with arguments in [their post](https://stackoverflow.com/a/60279795) licensed by https://creativecommons.org/licenses/by-sa/4.0/;
7. [Danny](https://www.youtube.com/@MakeAppswithDanny) and [Jason Watmore](https://jasonwatmore.com/contact) for showing the proper way of hiding API keys when deploying vite project to GitHub Pages. These pieces of advice can be found via [Danny's YT video](https://youtu.be/47pHZYtciEs) and [Jason's blog entry](https://jasonwatmore.com/post/2022/05/28/vue-3-vite-access-environment-variables-from-dotenv-env);
8. [Larainfo blog](https://larainfo.com/about-us) for the instruction on how to apply dark/light mode with VueUse composable and TailwindCSS in [this post](https://larainfo.com/blogs/vue-3-dark-mode-with-tailwind-css-example);
9. [Felix Oduro](https://stackoverflow.com/users/17455844/felix-oduro) for showing the eslint config to exclude error for Node.js `module.exports` feature in [this post](https://stackoverflow.com/a/72802330) licensed by https://creativecommons.org/licenses/by-sa/4.0/;
10. [storyset](https://www.freepik.com/author/stories) for [the image](https://www.freepik.com/free-vector/messages-concept-illustration_5911276.htm#query=group%20chat&position=8&from_view=keyword&track=ais) I used in this project's social preview.

## Contributing

If you get interested in this project, I'd be glad to see your contributions. Pull requests are welcome!
