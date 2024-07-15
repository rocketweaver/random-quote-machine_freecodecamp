const Spinner = () => {
  return (
    <div className="w-full">
      <div
        className="mx-auto spinner-border animate-spin block w-14 h-14 border-4 border-t-amber-600 rounded-full"
        role="status"
      />
    </div>
  );
};

export default Spinner;
