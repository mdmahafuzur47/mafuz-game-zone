const ServicesItems = ({ Icon, header, title }) => {
  return (
    <div className="flex items-center gap-3 font-poppins font-medium">
      <span className="text-4xl p-3 border rounded-full border-gray-500">
        {Icon}
      </span>
      <div>
        <h1 className="text-xl mb-1">{header}</h1>
        <p className="text-md text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default ServicesItems;
