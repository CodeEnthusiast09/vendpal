import { useDispatch, useSelector } from "react-redux";
import { GetDepartmentData } from "../../../src/redux/slices/departmentSlice";
import { useEffect } from "react";

export const DepartmentCard = () => {
  const dispatch = useDispatch();

  const { departments, loading } = useSelector((state) => state.department);

  useEffect(() => {
    dispatch(GetDepartmentData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className={`bg-gray-100 rounded-3xl w-[310px] h-[271px] p-4`}
          >
            <p className={`bg-gray-200 w-[280px] h-[161px] rounded-xl p-4`}></p>
            <div className="flex items-center justify-between p-4">
              <div className="w-[145px] h-[46px] bg-gray-200"></div>
              <div className="bg-gray-200 w-[40px] h-[40px] rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {departments.map((department) => (
        <div
          key={department.id}
          className={`rounded-3xl w-[310px] h-[271px] p-4`}
          style={{ backgroundColor: department.bg_color_1 }}
        >
          <p
            className={`text-lg rounded-xl py-3 px-4 w-[280px] h-[161px] leading-[24px]`}
            style={{ backgroundColor: department.bg_color_2 }}
          >
            {department.about}
          </p>
          <div className="flex items-center justify-between p-4 mt-3">
            <div>
              <p className="text-lg font-semibold text-[#191C1A]">
                {department.name}
              </p>
              <p className="text-[#3A3C3A] text-sm font-normal">
                {department.department} Department • {department.unit} Unit
              </p>
            </div>
            {department.avatar && (
              <img
                src={department.avatar}
                alt={`${department.name} avatar`}
                className="w-10 h-10 rounded-full"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
