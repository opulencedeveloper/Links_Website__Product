const BackDrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed inset-0 flex items-center z-30 justify-center backdrop-filter backdrop-blur-sm"
    ></div>
  );
};

export default BackDrop;
