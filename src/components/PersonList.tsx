import { PersonProps } from "./Person";

type PersonListProps = {
  persons: PersonProps[];
};

export const PersonList = ({ persons }: PersonListProps) => {
  return (
    <div>
      {persons.map((p: PersonProps) => {
        return (
          <span key={p.name.first}>
            {p.name.first} {p.name.last} <br />
          </span>
        );
      })}
    </div>
  );
};
