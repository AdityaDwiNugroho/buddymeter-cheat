# BuddyMeter Cheat

A simple cheat script for [BuddyMeter](https://buddymeter.com/) that reveals correct answers.

## Features

- Automatically detects and displays correct answers on the quiz page.
- Clean UI box showing answers on top-right.
- Toggle visibility with:
  - A dedicated on-screen button.
  - The `Delete` key on your keyboard.

## Usage

### Option 1: Paste in Console (Temporary Use)

1. Join a quiz on [buddymeter.com](https://buddymeter.com/).
2. Open your browser's Developer Console (F12 or `Ctrl + Shift + I` → Console tab).
3. Paste the following code:

```js
fetch("https://raw.githubusercontent.com/AdityaDwiNugroho/buddymeter-cheat/main/dist/bundle.js")
  .then((res) => res.text())
  .then((t) => eval(t));
```
You’ll see a floating box with answers in the top-right corner. You can toggle visibility using the Delete key or the button.

### Option 2: Automatically load with Tampermonkey
1. Install [https://www.tampermonkey.net/](https://www.tampermonkey.net/) browser extension.
2. Create a new userscript and paste the contents of [scripts/tampermonkey-alternative-method.js](https://github.com/AdityaDwiNugroho/buddymeter-cheat/scripts/tampermonkey-alternative-method.js)
3. The script should now be automatically injected every time you enter buddymeter
   
![screenshot](https://github.com/AdityaDwiNugroho/buddymeter-cheat/blob/main/docs/screenshot_image.png?raw=true)


# Support
If you'd like to support this project, you can sponsor me on Trakteer.id:
[https://trakteer.id/adityadwinugroho](https://teer.id/adityadwinugroho)
