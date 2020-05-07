import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import styles from "./InfoContainer.module.css";

const InfoContainer = ({ room, users }) => (
  <div>
    <h1 className={styles.header}>Room {room}</h1>
    {users ? (
      <div className={styles.userContainer}>
        {users.map(({ name, color, status }) => (
          <div key={(name, color, status)} className={styles.infoContainer}>
            <div>{name}</div>
            <div>
              <EmojiPeopleIcon
                className={styles.colorIcon}
                style={{ color: color }}
              ></EmojiPeopleIcon>
            </div>
            <h1 className={styles.infoText}>{status}</h1>
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

export default InfoContainer;
