import { Sun, Moon } from 'lucide-react';
import { Button } from '.';

const TogglerButton = ({ themeToggler }) => {
  return (
    <div className='theme__container'>
      <Button onClick={themeToggler} className='btn'>
        {window.localStorage.getItem('theme') !== 'light' ? (
          <>
            <Sun />
            <span className='sr-only'>Set light mode</span>
          </>
        ) : (
          <>
            <Moon />
            <span className='sr-only'>Set dark mode</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default TogglerButton;
