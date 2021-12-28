import React, { FC } from 'react';
import { IUser, UserProps } from '../types';

const Users: FC<UserProps> = ({ users }) => {
  return (
    <>
      {users.map((user: IUser) => (
        <div key={user.id} className="user-item">
          <h3>{user.name}</h3>
          <h6>{user.email}</h6>
          <div>
            <strong>Address:</strong> {user.address.city} {user.address.street}{' '}
            {user.address.suite} {user.address.zipcode}
          </div>
          <div>
            <strong>GEO:</strong> {user.address.geo.lat} {user.address.geo.lng}
          </div>
          <div>
            <strong>Company:</strong> {user.company.name}{' '}
            {user.company.catchPhrase} {user.company.bs}
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
