export const getRole = (level) => {
  switch (level) {
    case 1:
      return (
        <span className="text-[#52B2B6] bg-[#e6f1f4] font-semibold rounded-lg px-4 py-1">
          Admin
        </span>
      );
    case 2:
      return (
        <span className="text-[#E69740] bg-[#f5eee7] font-semibold rounded-lg px-4 py-1">
          Leadership
        </span>
      );
    case 3:
      return (
        <span className="text-[#404353] bg-[#e4e6e9] font-semibold rounded-lg px-4 py-1">
          Manager
        </span>
      );

    default:
      return (
        <span className="text-teal-700 bg-teal-50 font-semibold rounded-lg px-4 py-1">
          Admin
        </span>
      );
  }
};
