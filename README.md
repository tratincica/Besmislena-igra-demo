# Besmislena-Igra-Demo
React practice project. Game based on my first novel Besmišlje
You need to have Node.js installed.
Game is written in Croatian lagnuage.

Download the code and run npm install.

# IDEA

Story is based on short unpublished novel Besmišlje. The React game has small mechanics simmilar to D&D and Disco Elysium. It is a choose you own adventure kind project, story driven and results are based on combination of dice role and player stats.

This is a very simple game and code, but it is my first standalone project. The main goal is to practice Front End development using React.js. In future I will probably build more advanced game.

# WHAT?

## BLUEPRINT

1.	Character Selection => Lino, Tomažina, Custom 
2.	Level 1 => First chapter of novel Besmišlje. There is question asked to player after reading the scene, and depending on choices (dice roll and stats) scenario is loaded. In DEMO there is only one scenario after question.
3.	Home => After Level 1 Home screen is presented where player can decide to make some of the choices which will advance the game and player level progress
4.  End => Game end and final result in DEMO mode

## CHARACTERS

1.	Lino
2.	Tomažina
3.	Custom

In DEMO version you can select between Lino and Custom. 

### CUSTOM

Playar can use 8 status points for all skills (max 6 points for skill)

### Lino

Male character. Vampire. Default stats and story arc A.

### Tomažina

Female character. Humand then vampire. Default stats and story arc B.

# HOW?

## TECHNOLOGY

For this project I'm using React.js and javascript. Main concepts of React in DEMO version:
1. Components
2. Props
3. State
4. Hooks (useEffect, useState and useContext)
5. Context API

In future I plan to implement:
1. Redux
2. React Router
3. More Hooks
4. TypeScript
5. BackEnd (probably Java with Spring)
6. Remake to Angular

## STRUCTURE

This project is single page and will use conditioned rendering of more components.
I have created this components (I will list only the main components):
1. App.jsx => Main component which reneders all other components
2. Layout components => headeer and footer of the game
3. Game.jsx => Main game component with multiple subcomponents including layout, level1, initialization (character selection and other initialization stuff), Home component, End game component

## CHARACTERS

Stats (inspired by Disco Elysium): 
1. Intelekt (Intelect)
2. Psiha (Psyche)
3. Fizikalnost (Phisicality)
4. Motorika (Motorics)
