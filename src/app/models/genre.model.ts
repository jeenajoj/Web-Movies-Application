export class Genre {
    constructor(
      public title: string,
      public description: string,
      public movies: Movie[]
    ) {}
  }
  
  export class Movie {
    constructor(
      public title: string,
      public description: string,
      public posterUrl: string
    ) {}
  }
  