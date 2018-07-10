const self= {}

self.genres= ["All","Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Music", "Romance", "Science Fiction", "Thriller", "Mystery", "Fantasy", "Horror"];

self.rates= ["All", "G", "PG", "PG-13", "R", "NC-17"];

self.movies= [
    {id: "m01", movietitle: "A Bigger Splash", release: "2015", director: "Luca Guadagnino", poster: "bigger-splash.jpg", synopsis: "An American couple, Paul and Marianne, spend their vacation in Italy and experiences trouble when the wife invites a former lover and his teenage daughter to visit, which leads to jealousy and dangerous sexual scenarios.", genre: "Thriller", rate: "R", watched: false, fav: false},

    {id: "m02", movietitle: "Billy Elliot", release: "2000", director: "Stephen Daldry", poster: "billy-elliot.jpg", synopsis: "Set against the background of the 1984 Miner’s Strike, Billy Elliot is an 11 year old boy who stumbles out of the boxing ring and onto the ballet floor. He faces many trials and triumphs as he strives to conquer his family’s set ways, inner conflict, and standing on his toes!", genre: "Drama", rate: "G", watched: false, fav: false},

    {id: "m03", movietitle: "Black Panther", release: "2018", director: "Ryan Coogler", poster: "black-panther.jpg", synopsis: "King T´Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country´s new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje...", genre: "Action", rate: "PG-13", watched: false, fav: false},

    {id: "m04", movietitle: "Call Me By Your Name", release: "2017", director: "Luca Guadagnino", poster: "cmbyn.jpg", synopsis: "Elio Perlman is spending the summer with his family at their vacation home in Lombardy, Italy. When his father hires a handsome doctoral student, the curious 17-year-old finds himself developing a growing attraction to the young man.",genre: "Romance", rate: "PG-13", watched: false, fav: false},

    {id: "m05", movietitle: "Coco", release: "2017", director: "Lee Unkrich", poster: "coco.jpg", synopsis: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel’s family history.", genre: "Animation", rate: "G", watched: false, fav: false},
    
    {id: "m06", movietitle: "Donnie Darko", release: "2001", director: "Richard Kelly", poster: "donnie-darko.jpg", synopsis: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.", genre: "Drama", rate: "R", watched: false, fav: false},
    
    {id: "m07", movietitle: "Frances Ha", release: "2012", director: "Noah Baumbach", poster: "frances-ha.jpg", synopsis: "An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.", genre: "Comedy", rate: "PG-13", watched: false, fav: false},

    {id: "m08", movietitle: "Her", release: "2013", director: "Spike Jonze", poster: "her.jpg", synopsis: "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user’s every needs. To Theodore’s surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.", genre: "Science Fiction", rate: "PG-13", watched: false, fav: false},
    
    {id: "m09", movietitle: "I'm Here", release: "2010", director: "Spike Jonze", poster: "im-here.jpg", synopsis: "A library assistant plods through an ordinary life in LA until a chance meeting opens his eyes to a the power of creativity and ultimately, love. When this new life and love begin to fall apart, he discovers he has a lot to give. This short film proves that ordinary is no place to be.", genre: "Drama", rate: "G", watched: false, fav: false},
    
    {id: "m10", movietitle: "Inside Out", release: "2015", director: "Pete Docter", poster: "inside-out.jpg", synopsis: "Growing up can be a bumpy road, and it’s no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions – Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley’s mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley’s main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school. ", genre: "Animation", rate: "G", watched: false, fav: false},

    {id: "m11", movietitle: "Lady Bird", release: "2017", director: "Greta Gerwig", poster: "lady-bird.jpg", synopsis: "A California high school student plans to escape from her family and small town by going to college in New York.", genre: "Drama", rate: "R", watched: false, fav: false},
    
    {id: "m12", movietitle: "Thor: Ragnarok", release: "2017", director: "Taika Waititi", poster: "ragnarok.jpg", synopsis: "Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.", genre: "Action", rate: "PG-13", watched: false, fav: false},
    
    {id: "m13", movietitle: "Scenes from the Suburbs", release: "2011", director: "Spike Jonze", poster: "sfts.jpg", synopsis: "A resident of a suburban dystopia tries to reassemble his fragmented memories of life as a teen.", genre: "Drama", rate: "PG-13", watched: false, fav: false},

    {id: "m14", movietitle: "Suspiria", release: "2018", director: "Luca Guadagnino", poster: "suspiria.jpg", synopsis: "A young ballet dancer travels to a prestigious dance academy in Europe, only to discover it is a front for something far more sinister and supernatural amidst a series of increasingly grisly murders.", genre: "Horror", rate: "R", watched: false, fav: false},

    {id: "m15", movietitle: "Where the Wild Things Are", release: "2009", director: "Spike Jonze", poster: "wtwta.jpg", synopsis: "Max imagines running away from his mom and sailing to a far-off land where large talking beasts – Ira, Carol, Douglas, the Bull, Judith and Alexander – crown him as their king, play rumpus, build forts and discover secret hideaways.", genre: "Science Fiction", rate: "G", watched: false, fav: false},

    {id: "m16", movietitle: "What We Do in the Shadows", release: "2014", director: "Taika Waititi", poster: "wwdits.jpg", synopsis: "Vampire housemates try to cope with the complexities of modern life and show a newly turned hipster some of the perks of being undead.", genre: "Comedy", rate: "PG-13", watched: false, fav: false},
];

module.exports= self;