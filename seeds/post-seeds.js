const { Post } = require('../models');

const postdata = [
  {
    title: 'Bojack denies being in crossover episode with Mr. Peanutbutter',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: '10 Tips to get attention at parties like Erica',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Navy Seal Neal McBeal calls dibs on muffins ',
    post_url:
      'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title:
      'Newtopia Rising, Book 1: The Search for a New Utopia due for a sequel',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: '10 Reasons to go to Vietnam: A Girl Croosh Personal Travel Guide. ',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'WhiteWhale takes ownership of Girl Croosh',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Spronk!: the new face of Girl Croosh',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'The inside scoop on the new Untitled Princess Carolyn Project',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Bojack Horseman nominated for Oscar after release of Secretariat',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Ivy Tran: Food Court Detective hits shelves this weekend',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'Mr. Peanutbutter announces he is in support of Fracking!',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Bojack Memoir: "One Trick Pony" receives critical acclaim',
    post_url:
      'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title:
      'Daniel Radcliffe to guest star on this weeks "Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Lets Find Out!"',
    post_url: 'https://www.youtube.com/watch?v=e1g_wNPmOsg',
    user_id: 8
  },
  {
    title: 'WHAT TIME IS IT RIGHT NOW fires CEO Henry Fondle ',
    post_url: 'https://www.whattimeisitrightnow.com/',
    user_id: 3
  },
  {
    title: 'Wesleyan University seeking new Theater Professor',
    post_url: 'https://www.wesleyan.edu/',
    user_id: 3
  },
  {
    title: 'Sarah Lynns "Prickly Muffin" single reaches gold status',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'Sextina Aquafina: the face of modern feminism',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Birthday Dad: what is it really about?',
    post_url: 'https://nestflix.fun/birthday-dad/',
    user_id: 4
  },
  {
    title: 'Andrew Garfield hates mondays and loves lasagna',
    post_url: 'https://en.wikipedia.org/wiki/Garfield',
    user_id: 6
  },
  {
    title: 'Vincent Adultman named sexiest man alive',
    post_url: 'https://www.linkedin.com/in/vincent-adultman-87b6a0133/',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
