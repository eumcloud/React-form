import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import {Outlet, Link} from 'react-router-dom';

const BoardLayout = () => {
  let loginId = '';
  const cookie = window.localStorage.getItem("user")
  if(cookie){
    loginId = JSON.parse(cookie).userid
  }
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <nav>
        <ul className='tabs'>
          <Box sx={{ float:"right", margin:1 }}>
            <Button component={Link} to="/board/page/1" variant="contained">글 목록</Button>
          </Box>
          {
            loginId &&
            <Box sx={{ float:"right", margin:1 }}>
              <Button component={Link} to="/board/write" variant="contained">글 쓰기</Button>
            </Box>
          }
        </ul>
      </nav>
      <br />
      <Outlet />
    </>
    );
}

export default BoardLayout;