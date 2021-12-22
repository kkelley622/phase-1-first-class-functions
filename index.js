// following along

function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

  // trimmed down

  function runFiveMiles() {
      console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function Monday() {
    runFiveMiles();
    liftWeights();
  }

  // even more efficient

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  Monday();

  // recievesAFunction(callback)

  function receivesAFunction (callback) {
      return callback();
  }

  receivesAFunction(function () {return 'Sandra' + 'Caldera' });

  // returnsANamedFunction

  function returnsANamedFunction () {
      return function isGuapa () {
          console.log('Ella is muy guapa');
      }
  }

  // returnsAnAnonymousFunction

  function returnsAnAnonymousFunction () {
      return function () {
          console.log('Who is she?');
      }
  }
