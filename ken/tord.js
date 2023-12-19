const truths = [
    "What is your biggest fear?",
    "What is your most embarrassing moment?",
    "Have you ever lied to get out of trouble?",
    "What is your biggest fear?",
"Have you ever cheated on a test?",
"What's the most embarrassing thing you've done in front of a crush?",
"If you could switch lives with someone for a day, who would it be?",
"What's the weirdest dream you've ever had?",
"Have you ever stolen something?",
"What's the most unusual talent you have?",
"If you had to live on a deserted island with three things, what would they be?",
"What's your most awkward moment?",
"Have you ever lied to get out of trouble?",
"What's the most expensive thing you've ever broken?",
"If you could have any superpower, what would it be?",
"What's your guilty pleasure?",
"Have you ever snooped through someone else's phone?",
"If you could meet any historical figure, who would it be?",
"What's the strangest food you've ever eaten?",
"If you could be a character in any movie, who would you be?",
"What's the most childish thing you still do?",
"Have you ever had a crush on a teacher?",
"What's the most embarrassing thing your parents have caught you doing?",
"If you had to give up one of your senses, which one would it be?",
"What's the most spontaneous thing you've ever done?",
"Have you ever been in a fight?",
"What's your most bizarre talent?",
"If you could travel back in time, what era would you visit?",
"Have you ever regretted a decision immediately?",
"What's your weirdest habit?",
"If you could have dinner with any fictional character, who would it be?",
"What's the most embarrassing song on your playlist?",
"If you could switch lives with someone for a day, who would it be?",
"Have you ever eavesdropped on someone else's conversation?",
"What's the most trouble you've ever gotten into at school?",
"If you could have any animal as a pet, what would it be?",
"What's the most embarrassing nickname you've ever had?",
"Have you ever pretended to like a gift you hated?",
"If you could only eat one thing for the rest of your life, what would it be?",
"What's the weirdest rumor you've heard about yourself?",
"Have you ever had a crush on a friend's sibling?",
"If you could be famous for one thing, what would it be?",
"What's the craziest thing you've done in the name of love?",
"Have you ever been caught doing something you shouldn't have?",
"If you could be invisible for a day, what would you do?",
"What's the most embarrassing thing you've said to someone you liked?",
"If you could change one thing about yourself, what would it be?",
"What's the most spontaneous thing you've ever done?",
"Have you ever cheated in a game and got away with it?",
"If you could live in any fictional universe, which would it be?",
"What's the silliest reason you've ever gotten into an argument?",
"If you could have any job in the world, what would it be?",
"What's the most daring thing you've ever done?"
  ];

  const dares = [
    "Do your best impression of a celebrity.",
    "Sing a song loudly.",
    "Do 10 jumping jacks.",
    "Call a random contact in your phone and sing the alphabet to them.",
    "Wear socks on your hands for the next 15 minutes.",
"Text your crush confessing your undying love for... pizza.",
"Do your best impression of a celebrity of your choice.",
"Post a silly selfie on your most used social media platform.",
"Speak in an accent (chosen by the group) for the next three rounds.",
"Find and wear a wig for the next 20 minutes.",
"Take a silly selfie and set it as your profile picture for the next hour.",
"Send a voice message to a friend, narrating a dramatic and fictional story about how you saved the world from a cheese monster.",
"Dance like nobody's watching for two minutes straight.",
"Put on a blindfold and let someone feed you a mystery food. Guess what it is.",
"Take a silly video of yourself lip-syncing to a popular song and send it to a friend.",
"Call a friend and read them a bedtime story in the most dramatic way possible.",
"Go outside and shout I believe in unicorns! at the top of your lungs.",
"Text your parents saying you've decided to join the circus as a professional clown.",
"Put on a puppet show for the next five minutes using whatever is available as puppets.",
"Balance a spoon on your nose for the next three minutes.",
"Take a funny selfie with a random object and send it to the third person in your contact list.",
"Speak in rhyme for the next five minutes.",
"Create a 30-second commercial trying to sell an imaginary product.",
"Wear a paper bag over your head for the next 10 minutes.",
"Send a text message to your boss saying you're resigning to pursue a career as a professional gamer.",
"Call a friend and sing Twinkle, Twinkle, Little Star to them.",
"Send a message to the fifth person in your contact list using only emojis.",
"Take a funny selfie and set it as your computer or phone wallpaper for the next hour.",
"Eat a spoonful of hot sauce or a whole chili pepper.",
"Send a message to your sibling pretending to be a famous celebrity asking for a favor.",
"Act out a famous movie scene using household items as props.",
"Put on a blindfold and try to draw a recognizable picture in one minute.",
"Call a friend and try to make them laugh within one minute without telling any jokes.",
"Wear a funny hat for the next 15 minutes.",
"Send a message to a friend confessing a fake, ridiculous secret.",
"Find a random object and come up with a two-minute infomercial to sell it.",
"Balance a book on your head and walk around the room.",
"Wear socks on your hands and try to type a coherent message on your phone.",
"Call a family member and tell them you're dropping out of school to become a professional hula hooper.",
"Do your best impression of a famous cartoon character.",
"Take a silly selfie with a pet (or a stuffed animal) and send it to a friend.",
"Speak in an exaggerated whisper for the next five minutes.",
"Send a message to a friend using only movie quotes.",
"Wear a disguise (hat, glasses, etc.) for the next 20 minutes, even if you're at home.",
"Call a friend and sing I Will Survive to them.",
"Take a funny video of yourself attempting to juggle three random objects.",
"Send a message to a friend pretending to be a robot.",
"Do 10 push-ups with a funny twist (e.g., meowing like a cat with each push-up).",
"Call a friend and tell them you've developed a new language and you'd like to practice it with them.",
"Wear socks on your hands and attempt to make a sandwich.",
"Create a short rap about a random object in the room.",
"Send a message to a friend confessing that you've joined a circus as a professional clown and will be traveling the world soon."
  ];

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomTruth() {
    const truthIndex = getRandomIndex(truths);
    displayOutput(truths[truthIndex]);
  }

  function getRandomDare() {
    const dareIndex = getRandomIndex(dares);
    displayOutput(dares[dareIndex]);
  }

  function displayOutput(output) {
    document.getElementById('output').innerHTML = output;
  }

  const names = [];

    function addName() {
      const nameInput = document.getElementById('nameInput').value;

    
      if (nameInput.trim() === '') {
        alert('Please enter a name.');
        return;
      }

   
      names.push(nameInput);

    
      document.getElementById('nameInput').value = '';

      displayNames();
      
    
      alert(`${nameInput} added to the list!`);
    }

    function displayNames() {
      const namesList = document.getElementById('namesList');

    
      namesList.innerHTML = '';

   
      names.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        namesList.appendChild(listItem);
      });
    }

    function pickRandomName() {
 
      if (names.length === 0) {
        alert('No names available.');
        return;
      }

   
      const randomIndex = Math.floor(Math.random() * names.length);

      const randomName = names[randomIndex];

  
      document.getElementById('pickedName').innerText = `${randomName} truth or dare?`;
    }