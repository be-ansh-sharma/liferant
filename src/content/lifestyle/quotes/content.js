const quotes = [
  {
    message: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair',
  },
  {
    message:
      'If you’re not failing every now and again, it’s a sign you’re not doing anything very innovative.',
    author: 'Woody Allen',
  },
  {
    message:
      'A man with one watch knows what time it is; a man with two watches is never quite sure.',
    author: 'Lee Seagall',
  },
  {
    message:
      'The first principle is that you must not fool yourself, and you are the easiest person to fool.',
    author: 'Richard P. Feynman',
  },
  {
    message: 'You have to be odd to be number one.',
    author: 'Dr. Seuss',
  },
  {
    message:
      'There are only two ways to live your life: as though nothing is a miracle or as though everything is a miracle.',
    author: 'Albert Einstein',
  },
  {
    message:
      'The nature of man is sufficiently revealed for him to know something of himself and sufficiently veiled to leave much impenetrable darkness, a darkness in which he ever gropes, forever in vain, trying to understand himself.',
    author: 'Alexis de Tocqueville',
  },
  {
    message:
      'If you want happiness for an hour — take a nap. If you want happiness for a day — go fishing. If you want happiness for a year — inherit a fortune. If you want happiness for a lifetime — help someone else.',
    author: 'Chinese proverb',
  },
  {
    message:
      'The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change.',
    author: 'William Arthur Ward',
  },
  {
    message: 'There are no passengers on spaceship earth. We are all crew.',
    author: 'Marshall McLuhan',
  },
  {
    message: 'Forgiveness means letting go of the hope for a better past.',
    author: 'Lama Surya Das',
  },
  {
    message:
      'Most people spend more time and energy going around problems than in trying to solve them.',
    author: 'Henry Ford',
  },
  {
    message:
      'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
    author: 'Haruki Murakami',
  },
  {
    message:
      'I know this transformation is painful, but you’re not falling apart; you’re just falling into something different, with a new capacity to be beautiful.',
    author: 'William C. Hannan',
  },
  {
    message:
      'Even in poverty I lived like a king for I tell you that nobility is the thing that makes a king.',
    author: 'Ludwig van Beethoven',
  },
  {
    message:
      'Nothing is so fatiguing as the eternal hanging on of an uncompleted task.',
    author: 'William James',
  },
  {
    message:
      'We can speak and think only of what exists. And what exists is uncreated and imperishable for it is whole and unchanging and complete. It was not or nor shall be different since it is now, all at once, one and continuous.',
    author: 'Parmenides',
  },
  {
    message: 'The earth laughs in flowers.',
    author: 'Ralph Waldo Emerson',
  },
  {
    message: 'The most powerful weapon on earth is the human soul on fire.',
    author: 'Ferdinand Foch',
  },
  {
    message: '“When it hurts – observe. Life is trying to teach you something.',
    author: 'Anita Krizzan',
  },
  {
    message:
      'Believe those who are seeking the truth; doubt those who find it.',
    author: 'André Gide',
  },
  {
    message: 'Every man is the architect of his own fortune.',
    author: 'Unknown',
  },
  {
    message:
      'We find comfort among those who agree with us, and growth among those who don’t.',
    author: 'Frank A. Clark',
  },
  {
    message: 'Where there is ruin, there is hope for a treasure.',
    author: 'Rumi',
  },
  {
    message:
      'It’s true hard work never killed anybody, but I figure, why take the chance?',
    author: 'Ronald Reagan',
  },
  {
    message: 'If it doesn’t open, it’s not your door.',
    author: 'Unknown',
  },
  {
    message:
      'Tis better to have loved and lost than never to have loved at all.',
    author: 'Alfred Lord Tennyson',
  },
  {
    message: 'Love is a game that two can play and both win.',
    author: 'Eva Gabor',
  },
  {
    message: 'You always gain by giving love.',
    author: 'Reese Witherspoon',
  },
  {
    message: 'You must be the change you wish to see in the world.',
    author: 'Gandhi',
  },
  {
    message:
      'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
    author: 'Albert Einstein',
  },
  {
    message:
      'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.',
    author: 'George Bernhard Shaw',
  },
  {
    message: 'No act of kindness, no matter how small, is ever wasted.',
    author: 'Aesop',
  },
  {
    message:
      'Perfection is not attainable, but if we chase perfection we can catch excellence.',
    author: 'Vince Lombardi',
  },
  {
    message:
      'Keep your face always toward the sunshine – and shadows will fall behind you.',
    author: 'Walt Whitman',
  },
  {
    message: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    message: 'Always forgive your enemies; nothing annoys them so much.',
    author: 'Oscar Wilde',
  },
  {
    message: 'And remember, no matter where you go, there you are.',
    author: 'Confucius',
  },
  {
    message:
      'Be alone, that is the secret of invention; be alone, that is when ideas are born.',
    author: 'Nikola Tesla',
  },
  {
    message:
      'Doubt is an uncomfortable condition, but certainty is a ridiculous one.',
    author: 'Voltaire',
  },
  {
    message:
      'I don’t care that they stole my idea. I care that they don’t have any of their own.',
    author: 'Nikola Tesla',
  },
  {
    message:
      'If thou wilt make a man happy, add not unto his riches but take away from his desires.',
    author: 'Epicurus',
  },
  {
    message:
      'Learn from the mistakes of others. You can’t live long enough to make them all yourself.',
    author: 'Eleanor Roosevelt',
  },
  {
    message:
      'Music expresses that which cannot be put into words and that which cannot remain silent.',
    author: 'Victor Hugo',
  },
  {
    message:
      'Things may come to those who wait, but only the things left by those who hustle.',
    author: 'Abraham Lincoln',
  },
  {
    message:
      'We all have two lives. The second one starts when we realize we only have one.',
    author: 'Confucius',
  },
  {
    message:
      'You can’t depend on your eyes when your imagination is out of focus.',
    author: 'Mark Twain',
  },
  {
    message: 'As with stomachs, we should pity minds that do not eat.',
    author: 'Victor Hugo',
  },
  {
    message: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    message: '“Curiosity is gluttony. To see is to devour.',
    author: 'Victor Hugo',
  },
  {
    message: 'No one can make you feel inferior without your consent',
    author: 'Eleanor Roosevelt',
  },
  {
    message: 'To define is to limit.',
    author: 'Oscar Wilde',
  },
  {
    message: '“Victory is sweetest when you’ve known defeat.',
    author: 'Malcolm S. Forbes',
  },
  {
    message: '“When I let go of what I am, I become what I might be.',
    author: 'Lao Tzu',
  },
  {
    message:
      'It is a sad fate for a man to die too well known to everybody else, and still unknown to himself.',
    author: 'Francis Bacon',
  },
  {
    message:
      'Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.',
    author: 'Jose N. Harris',
  },
  {
    message:
      'The better you feel about yourself, the less you feel the need to show off.',
    author: 'Robert Hand',
  },
  {
    message: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    message:
      'I would rather die a meaningful death than to live a meaningless life.',
    author: 'Corazon Aquino',
  },
  {
    message:
      'Every man is a damn fool for at least five minutes every day; wisdom consists in not exceeding the limit.',
    author: 'Elbert Hubbard',
  },
  {
    message:
      'God knows, I prefer people with anxieties, whose tomorrow is threatened by uncertainty.',
    author: 'Albert Einstein',
  },
  {
    message:
      'We can see through others only when we can see through ourselves.',
    author: 'Bruce Lee',
  },
  {
    message: 'Think big thoughts but relish small pleasures.',
    author: 'Jackson Brown Jr.',
  },
  {
    message: 'The deeper thought is, the taller it becomes.',
    author: 'Dejan Stojanovic',
  },
  {
    message: '“You get in life what you have the courage to ask for.',
    author: 'Oprah Winfrey',
  },
  {
    message: 'What matters most in life is often invisible.',
    author: 'Duane Elgin',
  },
  {
    message:
      'One day your life will flash before your eyes. Make sure it’s worth watching.',
    author: 'Gerard Way',
  },
  {
    message:
      'There is always some madness in love. But there is also always some reason in madness.',
    author: 'Friedrich Nietzche',
  },
  {
    message: 'Our sweetest songs are those that tell of saddest thought.',
    author: 'Unknown',
  },
  {
    message: "Get them while they're young and bend their minds.",
    author: 'Spencer Dryden',
  },
  {
    message: 'When you get an idea into your head you find it in everything.',
    author: 'Victor Hugo',
  },
  {
    message: 'Faith is necessary to men; woe to him who believes in nothing!',
    author: 'Victor Hugo',
  },
];

export default quotes;
