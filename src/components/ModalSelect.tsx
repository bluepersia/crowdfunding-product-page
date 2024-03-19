import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styles from './ModalSelect.module.css';

const BAMBOO_MIN = 25;
const BLACK_MIN = 75;
const MAHOGANY_MIN = 200;

type FormData = {
  pledgeSelected: number;
  pledgeItem1: number;
  pledgeItem2: number;
  pledgeItem3: number;
};

export default function ModalSelect({
  pledgeSelector,
  setIsCompleted,
  isModalOpen,
}: {
  pledgeSelector: number;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    pledgeSelected: 0,
    pledgeItem1: 25,
    pledgeItem2: 75,
    pledgeItem3: 200,
  });

  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      pledgeSelected: pledgeSelector,
    }));
  }, [pledgeSelector]);

  useEffect(() => {}, [formData.pledgeSelected]);

  function handleInputChange(e: ChangeEvent): void {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  return (
    <div className={styles.overlay + ' ' + (isModalOpen && styles.open)}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.title}>Back this project</h2>
          <p className={styles.subtitle}>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in this world?
          </p>
        </header>

        <main className={styles.main}>
          <form className={styles.form}>
            <div
              className={
                styles.pledge +
                ' ' +
                (formData.pledgeSelected == 0 && styles.selected)
              }
            >
              <input
                className={styles.pledgeRadio}
                type='radio'
                name='pledgeSelected'
                value={0}
                checked={formData.pledgeSelected == 0}
                onChange={handleInputChange}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              />
              <h3 className={styles.pledgeTitle}>Pledge with no reward</h3>
              <p className={styles.pledgeBody}>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
              <div className={styles.pledgeEnter}>
                <div className={styles.pledgeEnterBtns}>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setIsCompleted(true);
                    }}
                    className={styles.btnContinue + ' btn-bluegreen'}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                styles.pledge +
                ' ' +
                (formData.pledgeSelected == 1 && styles.selected)
              }
            >
              <input
                className={styles.pledgeRadio}
                type='radio'
                name='pledgeSelected'
                value={1}
                checked={formData.pledgeSelected == 1}
                onChange={handleInputChange}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              />
              <h3 className={styles.pledgeTitle}>Bamboo Stand</h3>
              <p className={styles.pledgeAmount}>Pledge $25 or more</p>
              <p className={styles.pledgeBody}>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list. 101 left
              </p>
              <p className={styles.pledgeCount}>
                <span>101</span>left
              </p>
              <div className={styles.pledgeEnter}>
                <p className={styles.pledgeEnterText}>Enter your pledge</p>
                <div className={styles.pledgeEnterBtns}>
                  <div className={styles.inputPledgeWrapper}>
                    <input
                      type='number'
                      name='pledgeItem1'
                      value={formData.pledgeItem1}
                      onChange={handleInputChange}
                      className={styles.inputPledge}
                      min={BAMBOO_MIN}
                    />
                  </div>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      if (formData.pledgeItem1 >= BAMBOO_MIN)
                        setIsCompleted(true);
                    }}
                    className={styles.btnContinue + ' btn-bluegreen'}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                styles.pledge +
                ' ' +
                (formData.pledgeSelected == 2 && styles.selected)
              }
            >
              <input
                className={styles.pledgeRadio}
                type='radio'
                name='pledgeSelected'
                value={2}
                checked={formData.pledgeSelected == 2}
                onChange={handleInputChange}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              />
              <h3 className={styles.pledgeTitle}>Black Edition Stand</h3>
              <p className={styles.pledgeAmount}>Pledge $75 or more</p>
              <p className={styles.pledgeBody}>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <p className={styles.pledgeCount}>
                <span>64</span>left
              </p>
              <div className={styles.pledgeEnter}>
                <p className={styles.pledgeEnterText}>Enter your pledge</p>
                <div className={styles.pledgeEnterBtns}>
                  <div className={styles.inputPledgeWrapper}>
                    <input
                      type='number'
                      name='pledgeItem2'
                      value={formData.pledgeItem2}
                      onChange={handleInputChange}
                      min={BLACK_MIN}
                      className={styles.inputPledge}
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    />
                  </div>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      if (formData.pledgeItem2 >= BLACK_MIN)
                        setIsCompleted(true);
                    }}
                    className={styles.btnContinue + ' btn-bluegreen'}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.pledge + ' ' + styles.disabled}>
              <input
                className={styles.pledgeRadio}
                type='radio'
                name='pledgeSelected'
                value={3}
                checked={formData.pledgeSelected == 3}
                onChange={handleInputChange}
              />
              <h3 className={styles.pledgeTitle}>Mahogany Special Edition</h3>
              <p className={styles.pledgeAmount}>Pledge $200 or more</p>
              <p className={styles.pledgeBody}>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <p className={styles.pledgeCount}>
                <span>64</span>left
              </p>
              <div className={styles.pledgeEnter}>
                <p className={styles.pledgeEnterText}>Enter your pledge</p>
                <div className={styles.pledgeEnterBtns}>
                  <div className={styles.inputPledgeWrapper}>
                    <input
                      type='number'
                      name='pledgeItem3'
                      value={formData.pledgeItem3}
                      onChange={handleInputChange}
                      min={MAHOGANY_MIN}
                      className={styles.inputPledge}
                    />
                  </div>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      if (formData.pledgeItem3 >= MAHOGANY_MIN)
                        setIsCompleted(true);
                    }}
                    className={styles.btnContinue + ' btn-bluegreen'}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
