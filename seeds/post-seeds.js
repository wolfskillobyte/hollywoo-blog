const { Post } = require('../models');

const postdata = [
  {
    title: 'Bojack denies being in crossover episode with Mr. Peanutbutter',
    post_body: 'Welcome to the Hollywoo Blog! Share your thoughts!',
    user_id: 10
  },
  {
    title: '10 Tips to get attention at parties like Erica',
    post_body:
      'Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.',
    user_id: 8
  },
  {
    title: 'Navy Seal Neal McBeal calls dibs on muffins ',
    post_body: 'Faucibus interdum posuere lorem ipsum. ',
    user_id: 1
  },
  {
    title:
      'Newtopia Rising, Book 1: The Search for a New Utopia due for a sequel',
    post_body:
      'Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.',
    user_id: 4
  },
  {
    title: '10 Reasons to go to Vietnam: A Girl Croosh Personal Travel Guide. ',
    post_body:
      'Suspendisse sed nisi lacus sed. Viverra adipiscing at in tellus integer.',
    user_id: 7
  },
  {
    title: 'Mr. Peanutbutters Alimony and Dianes Living Situation',
    post_body:
      'So, shouldnt Mr. Peanutbutter be paying alimony to Diane? she shouldnt have to live in such a crappy apartment. ',
    user_id: 4
  },
  {
    title: 'Spronk!: the new face of Girl Croosh',
    post_body: 'Lacinia at quis risus sed. ',
    user_id: 1
  },
  {
    title: 'The inside scoop on the new Untitled Princess Carolyn Project',
    post_body: 'Libero id faucibus nisl tincidunt eget nullam non nisi est. ',
    user_id: 1
  },
  {
    title: 'Bojack Horseman nominated for Oscar after release of Secretariat',
    post_body: 'Vestibulum lectus mauris ultrices eros in cursus. ',
    user_id: 9
  },
  {
    title: 'Ivy Tran: Food Court Detective hits shelves this weekend',
    post_body:
      'Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.',
    user_id: 5
  },
  {
    title: 'Mr. Peanutbutter announces he is in support of Fracking!',
    post_body: 'Cursus metus aliquam eleifend mi in nulla posuere.',
    user_id: 3
  },
  {
    title: 'Bojack Memoir: "One Trick Pony" receives critical acclaim',
    post_body: 'Faucibus interdum posuere lorem ipsum. ',
    user_id: 10
  },
  {
    title:
      "Daniel Radcliffe to guest star on this weeks 'Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Lets Find Out!'",
    post_body:
      'Suspendisse sed nisi lacus sed. Viverra adipiscing at in tellus integer.',
    user_id: 8
  },
  {
    title: 'WHAT TIME IS IT RIGHT NOW fires CEO Henry Fondle ',
    post_body:
      'Libero id faucibus nisl tincidunt eget nullam non nisi est. Vestibulum lectus mauris ultrices eros in cursus. ',
    user_id: 3
  },
  {
    title: 'Wesleyan University seeking new Theater Professor',
    post_body:
      'In this energetic and inclusive community, our talented faculty and staff foster a liberal arts educational experience characterized by boldness, rigor, and practical idealism. Genuinely open-minded, intellectually curious, and mission-driven, our employees invest their impressive talents in fulfilling careers.',
    user_id: 3
  },
  {
    title: "Sarah Lynns 'Prickly Muffin' single reaches gold status",
    post_body: 'Suspendisse sed nisi lacus sed. ',
    user_id: 7
  },
  {
    title: 'Sextina Aquafina: the face of modern feminism',
    post_body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    user_id: 6
  },
  {
    title: 'Birthday Dad: what is it really about?',
    post_body: 'Libero id faucibus nisl tincidunt eget nullam non nisi est. ',
    user_id: 4
  },
  {
    title: 'Andrew Garfield hates mondays and loves lasagna',
    post_body:
      'Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.',
    user_id: 6
  },
  {
    title: 'Vincent Adultman voted sexiest man alive',
    post_body:
      'Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. ',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
