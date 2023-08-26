import { render, screen } from '@testing-library/react';
import Home from './Home';
import { postsListMock } from 'mocks/posts.mock';
import { store } from '../../state-management/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home', () => {
    test('renders Home', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <Home postsList={postsListMock} />
                </Router>
            </Provider>
        );
        const foundElements = await screen.queryAllByText(`${postsListMock[0].title}`);
        expect(foundElements.length).toBeGreaterThan(0);
    });

    test('renders Home with no posts', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <Home postsList={[]} />
                </Router>
            </Provider>
        );
        expect(screen.getByText(/No posts available/i)).toBeInTheDocument();
    });

    test('renders Home expected posts', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <Home postsList={postsListMock} />
                </Router>
            </Provider>
        );
        const renderedPosts = await screen.findAllByTestId(`post-test-id`);
        expect(renderedPosts).toHaveLength(postsListMock.length);
    });
});
