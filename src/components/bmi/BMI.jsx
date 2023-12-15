import Calculator from "./Calculator";
import Title from "./Title";

function BMI() {
  return (
    <section className="overflow-x-clip bg-gray-600 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/bmi/bg.webp')] bg-cover bg-right bg-no-repeat px-6 py-14">
      <div className="container space-y-6">
        <Title />

        <Calculator />
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default BMI;
