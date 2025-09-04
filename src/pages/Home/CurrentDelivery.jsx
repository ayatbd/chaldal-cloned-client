const CurrentDelivery = () => {
  return (
    <div className="cityBox flex flex-col justify-center">
      <div className="cityArea">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Currently Delivering in
        </h2>
        <div className="deliveryCity flex items-center justify-center">
          <div className="cityContainer">Dhaka</div>
          <div className="cityContainer">Chattogram</div>
          <div className="cityContainer">Jashore</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDelivery;
