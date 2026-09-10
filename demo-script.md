# StudyBuddy - 5-Minute Demo Script

## 1. Problem and Audience - 60 seconds

Good day. My application is StudyBuddy, a task-management app designed for students who need a simple place to keep track of schoolwork and daily responsibilities.

Students often manage several assignments, deadlines, and personal tasks at once. Notes can be lost, and a task list stored on only one device is inconvenient. StudyBuddy solves this by giving each student a private account and saving their tasks in the cloud.

The app was built with React Native and Expo. It uses Firebase Authentication for user accounts and Firebase Firestore for real-time cloud storage.

## 2. Live Walkthrough - 150 seconds

First, I will open the app. A new user can select Sign Up, enter an email address and a password with at least six characters, and create an account. Returning users can log in from the Welcome Back screen.

After logging in, the My Tasks screen appears. At the top, the app displays a motivational quote. I can request another quote using the New Quote button.

Next, I will type a task such as "Review CCE 106 notes" and press Add Task. The task appears immediately because the screen listens for real-time updates from Firestore.

I can tap the circle beside the task to mark it complete. I can also press the trash icon to delete it. Every change is sent to Firestore and appears without manually refreshing the app.

Finally, I will log out and sign in using a second account. This account has a separate task list because every Firestore task stores the owner's user ID. This demonstrates that one user cannot see another user's tasks through the app.

## 3. Technical Challenge - 90 seconds

The main technical challenge was making sure each user saw only their own tasks. Saving all tasks in one Firestore collection was straightforward, but an unrestricted listener would load tasks created by every account.

I solved this in two parts. When a task is created, the app saves the current Firebase user's unique ID in an `ownerId` field. When tasks are loaded, the Firestore query filters the collection so `ownerId` must equal the current user's ID.

I also used Firebase's authentication state listener in the main app component. It waits until Firebase restores the saved session before showing either the login screens or the task screen. This avoids briefly showing the wrong screen while authentication is loading.

The result is a cloud-connected task app with persistent login, live synchronization, and a private task list for every account.

## Demo Checklist

- Use a fresh test account before presenting.
- Confirm internet access and Firebase availability.
- Show login or sign up, add a task, complete it, and delete it.
- Demonstrate that a second account has a separate task list.
- Keep the walkthrough within five minutes.
