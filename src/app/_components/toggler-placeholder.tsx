const TogglerPlaceholder = () => (
  <label
    htmlFor="AcceptConditions"
    className="relative h-8 w-14 rounded-full bg-gray-300 cursor-not-allowed opacity-50"
  >
    <input
      type="checkbox"
      id="AcceptConditions"
      className="peer sr-only"
      disabled
    />

    <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all"></span>
  </label>
);

export default TogglerPlaceholder;
