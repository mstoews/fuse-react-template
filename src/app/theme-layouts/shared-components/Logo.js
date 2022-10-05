import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      {/* <img className="w-32 h-32 logo-icon" src="assets/images/logo/logo.svg" alt="logo" /> */}

      <div className="flex items-center px-8 py-4 mx-8 rounded badge" style={{ color: '#DEE3E7' }}>
        <span className="mx-4 react-text text-18">Made-To</span>
      </div>
    </Root>
  );
}

export default Logo;
