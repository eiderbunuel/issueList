export class Issue{
    constructor(
        public title: string,
        public avatar_url: string,
        public id: string,
        public login: string,
        public created_at: number,
    ){}
}