const CurrentDelivery = () => {
  return (
    <div class="cityBox flex flex-col justify-center">
      <div class="cityArea">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Currently Delivering in
        </h2>
        <div class="deliveryCity flex items-center justify-center">
          <div class="cityContainer">Dhaka</div>
          <div class="cityContainer">Chattogram</div>
          <div class="cityContainer">Jashore</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDelivery;
