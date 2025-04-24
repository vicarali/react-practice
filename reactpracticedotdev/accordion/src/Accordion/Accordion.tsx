import styles from "./Accordion.module.css";

type AccordionItem = {
  title: string;
  content: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <>
      {items.map(({ title, content }: AccordionItem) => (
        <>
          <details key={title}>
            <summary className={styles.accordionTitle}>{title}</summary>
            <p>{content}</p>
          </details>
          <hr />
        </>
      ))}
    </>
  );
}
