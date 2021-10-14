import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import './style/styles.scss';

const CVApp = () => {
  return (
    <div className='app-container'>
      <div className='app'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default CVApp;
