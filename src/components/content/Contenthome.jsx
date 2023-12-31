import React, { useEffect } from "react";
import AOS from "aos";
import Child1 from "../../assets/child1.jpg";

const Contenthome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="pt-10 pb-10 mx-auto ">
      <section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div data-aos="fade-right" className="p-5 m-auto lg:ml-0">
            {" "}
            {/* Margin diubah menjadi 0 */}
            <h1 className="mb-4 text-4xl text-black1 font-poppins">
              Stunting Is ?
            </h1>
            <p className="md:text-lg text-[16px] font-medium">
              Stunting adalah kondisi ketika anak tidak mencapai tinggi badan
              yang seharusnya karena kekurangan gizi selama masa pertumbuhan
              awal, terutama pada 1.000 hari pertama kehidupan. Orangtua perlu
              memberikan makanan bergizi sejak dini untuk mencegah stunting dan
              memastikan pertumbuhan optimal anak.
            </p>
          </div>
          <div
            data-aos="zoom-in-down"
            className="flex items-center justify-center p-5"
          >
            <div className="bg-black sm:h-[300px] sm:w-[500px] md:w-[500px] md:h-[300px] w-[300px] h-[222px] rounded-xl overflow-hidden">
              <img
                src={Child1}
                alt="child1"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2">
          <div className="flex items-center justify-center p-5">
            <div
              data-aos="zoom-in-down"
              className="bg-black sm:h-[300px] sm:w-[500px] md:w-[500px] md:h-[300px] w-[300px] h-[222px] rounded-xl overflow-hidden"
            >
              <img
                src={Child1}
                alt="child1"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="p-5 m-auto text-left lg:ml-0">
            <h1 className="mb-4 text-4xl text-black1 font-poppins">
              Stunting Is ?
            </h1>
            <p className="md:text-lg text-[16px] font-medium">
              Stunting adalah kondisi ketika anak tidak mencapai tinggi badan
              yang seharusnya karena kekurangan gizi selama masa pertumbuhan
              awal, terutama pada 1.000 hari pertama kehidupan. Orangtua perlu
              memberikan makanan bergizi sejak dini untuk mencegah stunting dan
              memastikan pertumbuhan optimal anak.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contenthome;
