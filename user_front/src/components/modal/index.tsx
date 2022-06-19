import Modal from "react-modal";

import styles from "./index.module.css";

export type HuntModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  recode: any;
};
const HuntModal = ({ modalIsOpen, closeModal, recode }: HuntModalProps) => {
  if (recode === {}) {
    return <div />;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
      overlayClassName={styles.overlay}
    >
      <div>
        <div className={styles.detail_title}>
          <div>捕獲動物の詳細</div>
          <span className={styles.batsu} onClick={closeModal}></span>
        </div>
        <div className={styles.animals_01_cnt_group}>
          <div className={styles.animals_01_flex}>
            <div className={styles.wana}>
              <img src={getTrapImage(recode?.trap_type?.value)} />
              <div className={styles.wana_type}>{recode?.trap_type?.value}</div>
            </div>
            <div className={styles.animals_01_block}>
              <div
                className={
                  recode?.trap_status?.value === "捕獲"
                    ? styles.state_get
                    : styles.state_stay
                }
              >
                {recode?.trap_status?.value}
              </div>
              <div className={styles.get_box}>
                <div className={styles.get_cnt}>
                  <span className={styles.icon}>
                    <img src="pets_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                  </span>
                  <span>動物の種類：</span>
                  <span className={styles.get_animals}>
                    {recode?.animal_name?.value}
                  </span>
                </div>
                <div className={styles.get_cnt}>
                  <span className={styles.icon}>
                    <img src="history_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                  </span>
                  <span>捕獲日時：</span>
                  <span className={styles.get_time}>
                    {recode?.caught_at?.value}
                  </span>
                </div>
              </div>
              <ul className={styles.basic}>
                <li>
                  <span>仕掛け日時：</span>
                  <span>{recode?.set_trap_at?.value}</span>
                </li>
                <li>
                  <span>場所：</span>
                  <span>{recode?.location?.value}</span>
                </li>
                <li>
                  <span>設置者</span>
                  <span>{recode?.establisher?.value}</span>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className={styles.detals_box}>
            <div>
              <span className={styles.detals_title}>推定の体長</span>
              <span>{recode?.height?.value}cm</span>
            </div>
            <div>
              <span className={styles.detals_title}>推定の体重</span>
              <span>{recode?.weight?.value}kg</span>
            </div>
            <div>
              <span className={styles.detals_title}>性別</span>
              <span> {recode?.sex?.value}</span>
            </div>
            <div>
              <span className={styles.detals_title}>メモ</span>
              <span> {recode?.memo?.value}</span>
            </div>
          </div>
          <div className={styles.contact}>
            <a href="#">所有者に連絡する</a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HuntModal;
const getTrapImage = (trap: string): string => {
  switch (trap) {
    case "落とし穴":
      return "wana_01.png";
    case "カゴ":
      return "wana_01.png";
    case "くくり罠":
      return "wana_02.png";
    default:
      return "";
  }
};
