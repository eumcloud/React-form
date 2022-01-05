import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className='tabs'>
                    <li>
                        <Link to="/board/list">글목록</Link>
                    </li>
                    <li>
                        <Link to="/board/write">글쓰기</Link>
                    </li>
                </ul>
            </nav>
            <br />
            <Outlet />
        </>
    );
}

export default Layout;