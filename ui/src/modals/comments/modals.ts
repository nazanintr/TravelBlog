export interface IComment {
    _id?: string,
    postId: string,
    authorId: string,
    creationDate: number,
    updateDate?: number,
    text: string,
    isReply: boolean,
    replies: IComment[]
}