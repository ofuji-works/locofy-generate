import { FunctionComponent } from "react";
import Form from "./Form";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <form className={styles.form}>
      <Form title="氏名" placeholderPlaceholder="wentz" showRequired />
      <Form
        title="メールアドレス"
        placeholderPlaceholder="mail@wentz-design.com"
        showRequired
        titleAlignSelf="stretch"
        titleRowGap="20px"
        contentAlignSelf="unset"
      />
      <Form
        title="備考"
        placeholderPlaceholder="フリーテキスト"
        showRequired={false}
        titleAlignSelf="unset"
        titleRowGap="unset"
        contentAlignSelf="stretch"
      />
      <button className={styles.button}>
        <b className={styles.b}>送信</b>
      </button>
    </form>
  );
};

export default Component;
