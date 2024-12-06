# Diary test app

## Description

This is a small diary app built with Expo and Tamagui made for a technical interview.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Build the app.

   ```bash
   npx expo run:android
   npx expo run:ios
   ```

   These commands will build the native app for Android and iOS. Run it every time you add a new native dependency or when you want to install the app on a new device.

3. Start metro

   ```bash
   npm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Features

- [x] Add a new diary entry with a title, content.
- [x] View all diary entries.
- [x] View a single diary entry.
- [x] Edit a diary entry.
- [x] Delete a diary entry.
- [x] Add labels to a diary entry.
- [x] Filter diary entries by content or title.
- [x] Add an image to a diary entry.
- [ ] Add audio notes (TODO)
- [ ] Add icon & splash screen (TODO)
- [ ] Add animations (TODO)

## Remaining tasks

- [ ] Use tamagui theme properly for colors
- [ ] Fix bug when keyboard is open
