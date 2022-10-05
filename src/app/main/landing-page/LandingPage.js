
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
// import MainPage from 'app/content/MainPage';
// import DemoContent from '@fuse/core/DemoContent';
import DashboardContent from '@fuse/core/DashboardContent';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function LandingPage(props) {
  return (
    <Root
      header={
        <div className="p-36">
          <h1>Main Landing Page</h1>
        </div>
      }
      content={
        <div className="p-36">
          <DashboardContent />
        </div>
      }
    />
  );
}

export default LandingPage;
