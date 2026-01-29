type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto max-md:px-2 max-xl:px-4">{children}</div>
  );
};

export default Container;
