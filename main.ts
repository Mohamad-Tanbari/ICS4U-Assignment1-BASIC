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
let nextGame = false
let exit = false

while (true) {
  if (turns === 10) {
    console.log('You Win!')
    break
  }
  console.log(`${nextGame ? '...NEXT VICTIM...' : 'HERE IS A REVOLVER'}`)
  console.log('HIT `1` TO SPIN CHAMBER AND PULL TRIGGER')
  console.log('       (HIT `2` TO GIVE UP)')
  console.log('GO')

  while (turns < 6) {
    const input = createPrompt('? ')

    if (isNaN(input.value)) {
      console.log('Invalid input. Try again')
    } else {
      if (parseInt(input.value) !== 2) {
        turns++

        // Generate random number
        const randomNumber = Math.random()

        if (randomNumber > 0.8333) {
          console.log('      BANG!!! YOU\'RE DEAD!')
          console.log('CONDOLENCES WILL BE SENT TO YOUR RELATIVES.')
          nextGame = true
          turns = 0
          break
        } else {
          console.log('- CLICK -')
        }
      } else {
        console.log('      CHICKEN!!!')
        exit = true
        break
      }
    }
    console.log('\n\n')

    // Check if the user won
    if (turns === 6) {
      console.log('YOU WIN !!!')
      console.log('LET SOMEONE ELSE BLOW HIS BRAINS OUT.')
      turns = 0
      break
    }
  }
  console.log('\n\n')

  if (exit) {
    break
  }
}

// Done
console.log('\nDone.')
