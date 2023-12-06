function Hours() {
  return (
    <div className="space-y-5">
      <h4 className="relative pb-2 text-xl font-semibold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red">
        Working hours
      </h4>
      <ul className="space-y-5 font-medium text-gray-300">
        <li>
          <span className="font-semibold">Monday – Friday: </span>7:00 - 21:00
        </li>
        <li>
          <span className="font-semibold">Saturday: </span>7:00 - 16:00
        </li>
        <li>
          <span className="font-semibold">Sunday: </span>Closed
        </li>
      </ul>
    </div>
  );
}

export default Hours;
