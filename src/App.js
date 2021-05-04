import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Welcome from './pages/Welcome';

import Loading from './components/Loading';

import axios from 'axios';
import nprogress from 'nprogress';
import './style/main.scss';

function App() {
  // const [name, setName] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  // get user session on page load
  // useEffect(() => {
  //   // while fetiching user data, display loading page
  //   setisLoading(true);
  //   // loading bar start
  //   nprogress.start();
  //   axios({
  //     method: 'get',

  //     withCredentials: true,
  //     url: `${process.env.REACT_APP_BASE_URL}/authenticate`,
  //   }).then((res) => {
  //     console.log('server data: ', res.data);
  //     if (res.data.username !== undefined) {
  //       setCurrentUser(res.data);
  //       console.log('user data: ', res.data);
  //     }
  //     //after user data is fetched, remove loading page
  //     setisLoading(false);
  //     //loading bar end
  //     nprogress.done();
  //   });
  // }, []);

  // destroy user session
  const logOut = () => {
    axios({
      method: 'get',
      withCredentials: true,
      url: `${process.env.REACT_APP_BASE_URL}/logout`,
    }).then((res) => {
      setCurrentUser(null);
    });
  };

  // // display loading screen while user data is being fetched
  // if (isLoading) {
  //   return <Loading />;
  // }

  // // if user is not logged in, only allow access to welcome, register and log in pages
  // if (currentUser === null) {
  //   return <Welcome setCurrentUser={setCurrentUser} />;
  // }

  // user is logged in so render main app
  return (
    <div className="App">
      {/* <div>
        <h1>{currentUser.username}</h1>
        <br />
        <h2>Log Out</h2>

        <button onClick={logOut}>Submit</button>
      </div> */}
      <nav className="navbar">Navbar</nav>
      <div className="main-wrapper">
        <main className="layout">
          <nav className="layout__left-container">
            <div className="layout__left-content">sidebar</div>
          </nav>
          <section className="layout__main">Main Content</section>
          <section className="layout__right-sidebar-container">
            <div className="layout__right-sidebar">right sidebar</div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
