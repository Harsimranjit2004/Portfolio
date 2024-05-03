import React from "react";
import myImage from "../../assets/myImg.png";
// const About = () => {
//   const content = (
//     <div className="h-screen">
//       <div className=" p-10 text-white  overflow-hidden flex flex-col align-center justify-center">
//         <div className="mb-5 text-5xl">
//           About <span className="text-green-500">Me</span>
//         </div>
//         <div className="md:grid md:grid-cols-2 sm:py-16">
//           <div className="mt-4 md:mt-0 text-left flex ">
//             <div className="my-auto mx-6">
//               {/* <h2 className="text-4xl font-bold mb-4 text-white">About me</h2> */}
//               <p className="text-base lg:text-lg">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ad
//                 sint voluptatum adipisci fuga sunt minus voluptate
//                 reprehenderit? Et voluptatum quae dicta corrupti optio tempora
//                 officiis officia, exercitationem, debitis, asperiores nisi.
//                 Distinctio magnam ducimus magni iusto quod dolores, consequuntur
//                 ullam!
//               </p>
//             </div>
//           </div>
//           <img
//             className="mx-auto rounded-3xl py-8 py-0"
//             src={myImage}
//             width={300}
//             height={300}
//           />
//         </div>
//       </div>
//       <div className=" p-10 text-white">kida fa</div>
//     </div>
//   );
//   return content;
// };

const About = () => {
  return (
    <div className="text-white h-auto w-max-[1200px] pb-5" id="about">
      <div className="">
        <h1 className="p-4 text-center text-5xl">
          About <span className="text-green-500">Me</span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex ">
          <div className="my-auto mx-6 pl-[10vw]">
            <h2 className="text-4xl font-bold mb-4 text-white">
              I'm Harsimranjit Singh
            </h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ad
              sint voluptatum adipisci fuga sunt minus voluptate reprehenderit?
              Et voluptatum quae dicta corrupti optio tempora officiis officia,
              exercitationem, debitis, asperiores nisi. Distinctio magnam
              ducimus magni iusto quod dolores, consequuntur ullam!
            </p>
            <div className="pt-5">
              <div className="">Project competed 10</div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 py-0"
          src={myImage}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
