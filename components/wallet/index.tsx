const Wallet = ({ open }: { open: boolean }) => {
  if (!open) return <></>;
  return (
    <aside className="z-30 bg-white border-l p-2 fixed right-0 h-full w-full lg:w-96 overflow-y-auto overscroll-none">
      <h2>wallet</h2>
    </aside>
  );
};

export default Wallet;
