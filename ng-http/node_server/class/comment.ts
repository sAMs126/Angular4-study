export class Comment {
    constructor (
        public id: number,
        public productId: number,
        public timestamp: string,
        public rating: number,
        public content: string,
        public user: string
    ) { }
}
