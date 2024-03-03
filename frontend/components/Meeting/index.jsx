"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Meeting = () => {
  const router = useRouter();
  const handleMeet = async () => {
    console.log("first");
    await axios
      .post("http://127.0.0.1:5000/meet", {
        type: "teacher",
      })
      .then(async function (response) {
        console.log(response);
        router.push(response.data.guest_url.href);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Talk to teachers and fellow students
              </h2>
              {/* <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p> */}

              <div className="flex w-full px-4">
                <button
                  onClick={() => handleMeet()}
                  className="mr-4 rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  Meet with teacher
                </button>
                <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  Meet with fellow students
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
