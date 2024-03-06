import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Form.module.css";

export type FormType = {
  title?: string;
  placeholderPlaceholder?: string;
  showRequired?: boolean;

  /** Style props */
  titleAlignSelf?: CSSProperties["alignSelf"];
  titleRowGap?: CSSProperties["rowGap"];
  contentAlignSelf?: CSSProperties["alignSelf"];
};

const Form: FunctionComponent<FormType> = ({
  title,
  placeholderPlaceholder,
  showRequired,
  titleAlignSelf,
  titleRowGap,
  contentAlignSelf,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: titleAlignSelf,
      rowGap: titleRowGap,
    };
  }, [titleAlignSelf, titleRowGap]);

  const requiredStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contentAlignSelf,
    };
  }, [contentAlignSelf]);

  return (
    <div className={styles.form}>
      <div className={styles.label} style={labelStyle}>
        <div className={styles.title}>{title}</div>
        {showRequired && (
          <div className={styles.required} style={requiredStyle}>
            （必須）
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.errormessage}>エラーテキスト</div>
        <div className={styles.input}>
          <input
            className={styles.placeholder}
            placeholder={placeholderPlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;

