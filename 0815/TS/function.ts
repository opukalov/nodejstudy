function speak(food: string, energy: number): void{
  console.log("Our " + food + " has " + energy + " calories.");
}

// Arguments don't match the function parameters.
speak("tripple cheesburger", "a ton of");