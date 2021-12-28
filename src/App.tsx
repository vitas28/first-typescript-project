import React, { FC, useEffect, useState } from 'react';
import { IUser } from './types';
import Users from './components/Users';

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json: IUser[]) => setUsers(json));
  }, []);
  return (
    <>
      <h1>Users list</h1>
      <div className="wrapper">
        <Users users={users} />
      </div>
    </>
  );
};

export default App;
