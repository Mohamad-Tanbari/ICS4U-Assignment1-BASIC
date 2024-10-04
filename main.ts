/*
 * This program is a russian roulette game.
 *
 * By: Mohamad T
 * Version: 1.0
 * Since: 2024-10-4
 */

import { createPrompt } from 'bun-promptx'

// Start
console.log('THIS IS A GAME OF >>>>>>>>>>>>>>>RUSSIAN ROULETTE')
console.log('')

let turns = 0
let tempCounter = 0
while (tempCounter < 6) {
  console.log('HERE IS A REVOLVER')
  console.log('HIT `1` TO SPIN CHAMBER AND PULL TRIGGER')
  console.log('       (HIT `2` TO GIVE UP)')
  console.log('GO')

  const input = createPrompt('? ')

  if (isNaN(input.value)) {
    console.log('Invalid input. Try again')
  } else {
    if (input.value !== 2) {
      turns++

      // Generate random number
      const randomNumber = Math.random()
      
      if (randomNumber > 0.8333) {
        console.log('      BANG!!! YOU\'RE DEAD!')
        console.log()
      }
    } else {
      console.log('      CHICKEN!!!')
    }
  }

  tempCounter++
}

