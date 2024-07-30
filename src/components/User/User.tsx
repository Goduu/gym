import { FC } from 'react';
import { UserSettings } from './UserSettings';
import { UserLogoutButton } from './UserLogoutButton';
import { UserLoginButton } from './UserLoginButton';

export const User: FC = async () => {

  return (
    <div className='flex gap-1 items-end w-full justify-center place-content-center'>
      <UserLogoutButton />
      <UserLoginButton />
      <UserSettings />
    </div >
  );
}
