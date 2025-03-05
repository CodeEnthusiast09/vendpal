export const LinksCard = () => {
  return (
    <div className="py-4 px-4 lg:h-[151px] border border-primary-300 rounded-[24px]">
      <h1 className="font-semibold mb-2">LINKS</h1>
      <button className=" w-full flex items-start gap-4 font-semibold py-8 px-8 border border-primary-300 rounded-[12px]">
        <div className=" w-[24px] h-[24px]">
          <img src="/captive_portal.svg" alt="link" />
        </div>
        <p className="text-lg">LinkedIn</p>
      </button>
    </div>
  );
};
