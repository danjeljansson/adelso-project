import ListItems from "@/app/components/ListItems";

const Header = ({
  buttonData,
}: {
  buttonData: { title?: string; hasCast?: boolean };
}) => {
  return (
    <header className="flex flex-col items-center justify-center bg-transparent">
      <nav>
        <ul className="hidden flex-row items-center justify-center sm:flex">
          <ListItems buttonData={buttonData} />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
