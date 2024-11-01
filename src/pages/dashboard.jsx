import MainLayout from "../components/layout/MainLayout";

const DashboardPage = () => {
  return (
    <div className="mb-4 sm:flex sm:gap-6">
    <div className="">
      <div className="text-lg text-gray-02 mb-2">Title1</div>
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
        <Card />
      </div>
    </div>
    <div className="mb-4 md:w-1/3">
      <div className="text-lg text-gray-02 mb-2">Title2</div>
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
        <Card />
      </div>
    </div>
    <div className="mb-4 md:w-1/3">
      <div className="text-lg text-gray-02 mb-2">Title3</div>
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
        <Card />
      </div>
    </div>
  </div>
  );
};

export default DashboardPage;