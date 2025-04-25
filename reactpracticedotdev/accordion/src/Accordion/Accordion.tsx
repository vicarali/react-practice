import styles from "./Accordion.module.css";

type AccordionItem = {
  title: string;
  content: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <ul className={styles.accordion}>
      {items.map(({ title, content }: AccordionItem) => (
        <li key={title}>
          <details>
            <summary className={styles.accordionTitle}>{title}</summary>
            <p>{content}</p>
          </details>
          <hr />
        </li>
      ))}
    </ul>
  );
}
