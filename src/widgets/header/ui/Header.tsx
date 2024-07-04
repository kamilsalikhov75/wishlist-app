import { Avatar } from "@nextui-org/react";

export const Header = () => {
  return (
    <header className="flex items-start gap-3 p-3">
      <Avatar
        size="lg"
        src="https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg"
      />
      <div className="flex flex-col gap-2"> 
        <span>Привет :)</span>
        <span>Name</span>
      </div>
    </header>
  );
};
