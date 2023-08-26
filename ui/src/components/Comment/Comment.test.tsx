import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comment';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Comment', () => {
    test('render comment', () => {
        (useSelector as jest.Mock)
            .mockReturnValue({ commentsList: [] });

        (useDispatch as jest.Mock).mockReturnValue(jest.fn());
        const { getByTestId } = render(<Comments />);
        expect(getByTestId('commentHeader')).not.toBe(null);
        expect(getByTestId('commentInput')).not.toBe(null);
        expect(getByTestId('commentBox')).not.toBe(null);
    })
});



describe('Comment', () => {
    test('render comment', () => {
        (useSelector as jest.Mock)
            .mockReturnValue({ commentsList: [{ id: '1', creationDate: Date.now(), replies: [] }] });

        (useDispatch as jest.Mock).mockReturnValue(jest.fn())
        const { getByTestId, getAllByTestId } = render(<Comments />)
        expect(getByTestId('commentBody')).not.toBe(null);
        expect(getAllByTestId('commentBody')?.length).toBe(1)
    })
});

describe('Comment', () => {
    test('render comment', () => {
        (useSelector as jest.Mock)
            .mockReturnValue({ commentsList: [{ id: '1', creationDate: Date.now(), replies: [] }] });

        (useDispatch as jest.Mock).mockReturnValue(jest.fn())
        const { getAllByTestId } = render(<Comments />)
        expect(getAllByTestId('commentBody')?.length).toBe(1)
    })
});

describe('Comment', () => {
    test('render comment', () => {
        (useSelector as jest.Mock)
            .mockReturnValue({
                commentsList: [{
                    id: '1', creationDate: Date.now(), replies: [
                        { id: '2', creationDate: Date.now(), replies: [] },
                        { id: '3', creationDate: Date.now(), replies: [] }

                    ]
                }]
            });

        (useDispatch as jest.Mock).mockReturnValue(jest.fn())
        const { getAllByTestId } = render(<Comments />)
        expect(getAllByTestId('replyBody')?.length).toBe(2)
    })
});
