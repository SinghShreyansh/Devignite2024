"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [textResponse, setTextResponse] = useState(false);
  const [text, setText] = useState("");
  const [notesFile, setNotesFile] = useState(null);
  const [syllabusFile, setSyllabusFile] = useState(null);
  const [pyqsFile, setPyqsFile] = useState(null);
  const [audioSrc, setAudioSrc] = useState("");
  const [impQues, setImpQues] = useState([]);
  const [ytLink, setYtlink] = useState("");
  const [videoSummarizer, setYtSummarizer] = useState("");
  const [ytId, setYtId] = useState();
  const router = useRouter();

  const handleNotesFileChange = (e) => {
    setNotesFile(e.target.files[0]);
  };

  const handleSyllabusFileChange = (e) => {
    setSyllabusFile(e.target.files[0]);
  };

  const handlePyqsFileChange = (e) => {
    setPyqsFile(e.target.files[0]);
  };

  const handleAudioGet = async () => {
    setAudioSrc("http://127.0.0.1:5000/static/output.mp3");
    // setAudioSrc("../../../backend/output.mp3");
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("notes", notesFile);
    formData.append("syllabus", syllabusFile);
    formData.append("pyqs", pyqsFile);

    try {
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });
      await axios
        .get("http://127.0.0.1:5000/ai-tutor")
        .then(function (response) {
          console.log(response.data);
          setText(response.data);
        });

      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  const [summarizedText, setSummarizedText] = useState(false);
  // const [voice, setVoice ] = useState(false);

  return (
    <>
      <Breadcrumb
        pageName="Dashboard"
        description="Upload the below documents to help Intelliprep make your studies easier..."
      />

      <div className="mx-96 flex flex-col space-y-8">
        {/* upload notes */}
        <div>
          <label
            htmlFor="notes_input"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Notes
          </label>
          <input
            id="notes_input"
            type="file"
            onChange={handleNotesFileChange}
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
          />
        </div>

        {/* upload syllabus */}
        <div>
          <label
            htmlFor="syllabus_input"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Syllabus
          </label>
          <input
            id="syllabus_input"
            type="file"
            onChange={handleSyllabusFileChange}
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
          />
        </div>

        {/* upload PYQs */}
        <div>
          <label
            htmlFor="pyqs_input"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload PYQs
          </label>
          <input
            id="pyqs_input"
            type="file"
            onChange={handlePyqsFileChange}
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => {
            setTextResponse(true);
            handleSubmit();
          }}
          class="mb-2 me-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </div>

      {textResponse ? (
        <div>
          <div className="flex">
            <div className="ml-48 mr-12 mt-12 flex min-h-min w-full justify-center rounded-lg border-2 border-blue-900 p-4 tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg">
              {/* <p class="p-4 tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          itaque. A tenetur quod adipisci beatae cumque officiis sit accusamus
          magni, perferendis ducimus est quis exercitationem iure corporis eos
          dolorem nihil.
        </p> */}
              <Typewriter
                options={{
                  strings: [text],
                  autoStart: true,
                  loop: true,
                  delay: 1,
                  amount: 0,
                  deleteSpeed: 300000,
                }}
                //   className="p-4 tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg"
              />
            </div>

            <div className="mr-10 mt-12  w-36 flex-col">
              <Link
                href="http://localhost:3000/test"
                class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                //   onClick={() => {
                //     setTextResponse(true);
                //   }}
              >
                Create MCQs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </Link>
              <button
                class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                onClick={async () => {
                  await axios
                    .get("http://127.0.0.1:5000/pyqs-questions")
                    .then((res) => {
                      console.log(res);
                      setImpQues(res.data);
                    });
                }}
              >
                Important Topics
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </button>
              <Link
                href="/qna"
                target="_blank"
                class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
              >
                Ask Doubts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </Link>
              <Link
                href="/meeting"
                target="_blank"
                class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
              >
                Meet with teacher
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </Link>
              <Link
                href="http://127.0.0.1:5000/get-notes?filter={'email':{'contains':'hrishi@gmail.com'}}"
                class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
              >
                Download Notes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <div className=" my-10  flex ">
              <button
                type="button"
                class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                onClick={async () => {
                  let topic = prompt("Enter the topic name");
                  let data = {
                    content: text,
                    topic: topic,
                    email: "sarvesh2902@gmail.com",
                  };
                  await axios
                    .post("http://127.0.0.1:5000/store-notes", {
                      data: data,
                    })
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                Add to Notes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </button>
            </div>

            <div className="my-10 flex  ">
              {!audioSrc && (
                <button
                  type="button"
                  class="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                  onClick={handleAudioGet}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                </button>
              )}
              {audioSrc && (
                <audio controls>
                  <source src={audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>

            <div className=" my-10  flex ">
              <button
                type="button"
                class="mb-2 me-2 flex justify-around space-x-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                onClick={() => {
                  setSummarizedText(!summarizedText);
                }}
              >
                Summarize content
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {impQues.length > 0 && (
            <div className="px-20">
              <div className='font-bold align-middle text-lg mb-10'> Important Questions </div>
              {impQues.map((item, index) => (
                <div className="my-5" key={index}>
                  <p>{item}</p>
                  <div className="flex">

                    <button
                      className="mb-2 me-2 mr-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                      onClick={async () => {
                        // await axios
                        //   .post("http://127.0.0.1:5000/get-yt", {
                        //     ques: item,
                        //   })
                        //   .then((res) => {
                        //     console.log(res);
                        //     setYtlink(res.data.youtube_video_link);
                        //     setYtSummarizer(res.data.summary);
                        //     setYtId(index);
                        //   });

                          const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCAUBhMWXt8VSJbCI9tMo9K452YeoWUWxI&q=${encodeURIComponent(item)}&part=snippet&type=video&maxResults=1`);
                          const data = await response.json();
                          console.log(data);
                          const videoId = data.items[0].id.videoId;
                          setYtlink(`https://www.youtube.com/watch?v=${videoId}`);
                          setYtId(index);
                      }}
                    >
                      Get Youtube video
                    </button>
                    {ytLink && ytId == index && (
                      <Link
                        className="mb-2 me-2 flex justify-around rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
                        target="_blank"
                        href={ytLink}
                      >
                        Open Video on Youtube
                      </Link>
                    )}
                  </div>
                  {/* {ytLink && ytId == index && (
                    <div>
                      <div className="flex h-screen w-full flex-col items-center justify-center">
                        <iframe
                          width="720"
                          height="400"
                          src={ytLink}
                          title="YouTube video"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        {videoSummarizer &&
                         <div className="mt-8 p-4 text-center text-lg">
                          {videoSummarizer}
                         </div>
                        }

                      </div>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Dashboard;
