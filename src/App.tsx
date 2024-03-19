import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main';
import './Post.css';
import ModalSelect from './components/ModalSelect';

function App() {
  const [pledgeSelector, setPledgeSelector] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (pledgeSelector > -1) setIsModalOpen(true);
  }, [pledgeSelector]);

  useEffect(() => {
    document.addEventListener('click', handleBodyClick);

    return () => document.removeEventListener('click', handleBodyClick);
  }, []);

  useEffect(() => {
    if (!isModalOpen) setPledgeSelector(-1);
  }, [isModalOpen]);

  function handleBodyClick() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <Main setPledgeSelector={setPledgeSelector} />
      <ModalSelect
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pledgeSelector={pledgeSelector}
        setIsCompleted={setIsCompleted}
      />
    </>
  );
}

export default App;
