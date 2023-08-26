import { IComment } from "../../../modals/comments/modals";

export interface IEditDialogProps {
    isOpen: boolean;
    onClose: () => void;
    commentInitialContent: IComment;
};