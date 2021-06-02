## About the project

This is an attempt to duplicate some of the key features of the popular quizprogram Kahoot. Please note that the purpose of this project is purely academic, and not intended for commercial use.

The application uses Firestore to update data and states.

## How it works

The application uses Next.js dynamic routing to create unique pages for each quiz created by a user. The data is stored in Firestore and accessed in real time when application is running.

By updating states in firestore, the application can keep tabs on the progress of the quiz, even if participant or quizmaster loses internet access or refreshes the page.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## To get the full Firestore effect:

1. Create a web project in Firestore
2. Add the projects API-keys (see project settings in firestore for your project's api-keys) as an .env.local file using this format:

- NEXT_PUBLIC_FIREBASE_API_KEY=<--apiKey-->
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<--authDomain->
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=<--projectId-->
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<--storageBucket-->
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<--messagingSenderId-->
- NEXT_PUBLIC_FIREBASE_APP_ID=<--appId-->

3. Enable authentication with email and password
4. Add three collections to your Firestore database:

- Globals - add document with field "counter" and a random number of 6 digits
- Running
- Users

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
