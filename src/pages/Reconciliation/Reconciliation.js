
const Reconciliation = () => {
  return (
    <div className="flex w-full">
      <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
        <section className="flex flex-col justify-start antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
          <div className="h-full">
            <header className="flex items-center px-4 py-4 dark:text-gray-100">
              <i
                className="fa fa-bar-chart text-2xl"
                aria-hidden="true"
              ></i>
              <h2 className="pl-6 uppercase font-bold text-gray-800 dark:text-gray-100">
                Reconciliation
              </h2>
            </header>

            <div className="w-full mx-auto rounded-sm border-gray-200">
                <p className="text-gray-800 dark:text-gray-100 text-center">Report goes here</p>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
};

export default Reconciliation;
