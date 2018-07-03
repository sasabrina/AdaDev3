const self= {}

self.genres= ["All","Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Music", "Romance", "Science Fiction", "Thriller", "Mystery", "Fantasy"];

self.rates= ["All", "G", "PG", "PG-13", "R", "NC-17"];

self.movies= [
    {id: "1", movietitle: "A Bigger Splash", release: "2015", director: "Luca Guadagnino", poster: "bigger-splash.jpg", synopsis: "An American couple, Paul and Marianne, spend their vacation in Italy and experiences trouble when the wife invites a former lover and his teenage daughter to visit, which leads to jealousy and dangerous sexual scenarios.", genre: "Thriller", rate: "R"},

    {id: "2", movietitle: "Billy Elliot", release: "2000", director: "Stephen Daldry", poster: "billy-elliot.jpg", synopsis: "Set against the background of the 1984 Miner’s Strike, Billy Elliot is an 11 year old boy who stumbles out of the boxing ring and onto the ballet floor. He faces many trials and triumphs as he strives to conquer his family’s set ways, inner conflict, and standing on his toes!", genre: "Drama", rate: "G"},

    {id: "3", movietitle: "Black Panther", release: "2018", director: "Ryan Coogler", poster: "black-panther.jpg", synopsis: "King T´Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country´s new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje...", genre: "Action", rate: "PG-13"},

    {id: "4", movietitle: "Call Me By Your Name", release: "2017", director: "Luca Guadagnino", poster: "cmbyn.jpg", synopsis: "Elio Perlman is spending the summer with his family at their vacation home in Lombardy, Italy. When his father hires a handsome doctoral student, the curious 17-year-old finds himself developing a growing attraction to the young man.",genre: "Romance", rate: "PG-13"},

    {id: "5", movietitle: "Coco", release: "2017", director: "Lee Unkrich", poster: "coco.jpg", synopsis: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel’s family history.", genre: "Animation", rate: "G"},
    
    {id: "6", movietitle: "Donnie Darko", release: "2001", director: "Richard Kelly", poster: "donnie-darko.jpg", synopsis: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.", genre: "Drama", rate: "R"},
    
    {id: "7", movietitle: "Frances Ha", release: "2012", director: "Noah Baumbach", poster: "frances-ha.jpg", synopsis: "An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.", genre: "Comedy", rate: "PG-13"}
];

module.exports= self;