/*
BuddyMeter Cheat
Copyright (C) 2025 Aditya Dwi Nugroho

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

GitHub repository: https://github.com/AdityaDwiNugroho/buddymeter-cheat
Email: adityadn.work@proton.me
*/

import { Question } from './types';

const questionArray = (window as any).questionArray as Question[];

const cheatBox = document.createElement('div');
cheatBox.id = 'buddymeter-cheat-box';
cheatBox.style.position = 'fixed';
cheatBox.style.top = '10px';
cheatBox.style.right = '10px';
cheatBox.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
cheatBox.style.color = 'white';
cheatBox.style.padding = '15px';
cheatBox.style.borderRadius = '10px';
cheatBox.style.zIndex = '9999';
cheatBox.style.maxHeight = '300px';
cheatBox.style.overflowY = 'auto';
cheatBox.style.fontFamily = 'monospace';
cheatBox.style.fontSize = '14px';
cheatBox.style.boxShadow = '0 0 10px rgba(255,255,255,0.2)';
cheatBox.style.transition = 'opacity 0.3s ease';
cheatBox.innerHTML = `<h3 style="margin-top:0;">BuddyMeter Answers</h3>`;

for (let i = 1; i < questionArray.length; i++) {
  cheatBox.innerHTML += `<div><strong>Q${i}:</strong> ${questionArray[i].answer}</div>`;
  if (i % 5 === 0) {
    cheatBox.innerHTML += `<hr style="border-color: rgba(255,255,255,0.1)">`;
  }
}
document.body.appendChild(cheatBox);

const toggleButton = document.createElement('button');
toggleButton.textContent = 'Hide Answers';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.marginTop = '330px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.fontSize = '14px';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '6px';
toggleButton.style.backgroundColor = '#3b82f6';
toggleButton.style.color = '#fff';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '10000';
toggleButton.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
toggleButton.style.transition = 'background 0.3s';
toggleButton.onmouseenter = () => toggleButton.style.backgroundColor = '#2563eb';
toggleButton.onmouseleave = () => toggleButton.style.backgroundColor = '#3b82f6';

document.body.appendChild(toggleButton);

let visible = true;

const toggleCheatBox = () => {
  visible = !visible;
  cheatBox.style.display = visible ? 'block' : 'none';
  toggleButton.textContent = visible ? 'Hide Answers' : 'Show Answers';
};

toggleButton.addEventListener('click', toggleCheatBox);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete') {
    toggleCheatBox();
  }
});

console.log('BuddyMeter Cheat injected');
