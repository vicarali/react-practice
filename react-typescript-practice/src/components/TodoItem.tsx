type Props = {
  key: string;
  children: string;
};

export default function TodoItem({ key, children }: Props) {
  return <li key={key}>{children}</li>;
}
