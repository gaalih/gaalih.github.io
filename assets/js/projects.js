$(document).ready(function () {
  const projects = [
    {
      id: "modal-elisa",
      judul: "Elisa",
      deskripsi: "Aplikasi monitoring listrik dan Air",
      images: [
        "assets/img/projects/elisa/001.webp",
        "assets/img/projects/elisa/002.webp",
        "assets/img/projects/elisa/003.webp",
        "assets/img/projects/elisa/004.webp",
        "assets/img/projects/elisa/005.webp",
        "assets/img/projects/elisa/006.webp",
      ],
      teknologi: "ReactJS, NextJS, TailwindCSS, Typescript",
    },
    {
      id: "modal-microgrid",
      judul: "Microgrid",
      deskripsi:
        "Aplikasi monitoring distribusi energi dalam suatu area jaringan listrik",
      images: [
        "assets/img/projects/microgrid/001.webp",
        "assets/img/projects/microgrid/002a.webp",
        "assets/img/projects/microgrid/002b.webp",
        "assets/img/projects/microgrid/003a.webp",
        "assets/img/projects/microgrid/003b.webp",
        "assets/img/projects/microgrid/004a.webp",
      ],
      teknologi: "ReactJS, NextJS, TailwindCSS, Typescript",
    },
  ];

  $.each(projects, function (key, value) {
    $("#section-projects").append(`
    <card key="${key}" data-target="#${value.id}" class="btn-modal relative h-60 sm:h-52 w-full sm:w-1/4 rounded-xl bg-sky-400 p-1 shadow-xl shadow-sky-500/20 scale-95 hover:scale-100 transition-all ease-in-out duration-500">
            <img src="${value.images[0]}" class="object-cover w-full h-full rounded-xl" />
            <div class="absolute w-full h-full bg-transparent z-20 top-0 left-0 rounded-xl"></div>
            <div class="absolute z-10 w-full h-1/2 bottom-0 left-0 bg-sky-500/50 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center text-center rounded-t-none">
                <p class="text-sm sm:text-xs px-10 text-slate-700 mt-1 max-h-28 mb-2">
                  <b class="block text-2xl sm:text-sm font-semibold tracking-wider">${value.judul}</b>
                  <span>
                  ${value.deskripsi}
                  </span>
                  <span class="flex gap-2 flex-wrap text-xs text-slate-500 mt-1">
                  Teknologi : ${value.teknologi}
                  </span>
                </p>
            </div>
          </card>
              
              <div id="${value.id}" class="modal w-full h-full hidden">
                <div class="w-full h-full bg-sky-400/10 backdrop-blur-lg top-0 left-0 right-0 bottom-0 fixed z-40"></div>
                <div class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex-col items-center gap-2 -translate-y-1/2 p-6 bg-white shadow-2xl rounded-lg top-1/2 left-1/2 -translate-x-1/2 fixed flex z-50 animate-fadeIn">
                  <button class="close-modal w-10 h-10 rounded-full p-2 absolute z-40 -top-2 -right-2 bg-red-400 text-white font-bold shadow-md shadow-red-500/20 scale-95 hover:scale-100 transition-all ease-in-out duration-300">
                    X
                  </button>
                  <div class="flex flex-col justify-between min-h-[52vh]">
                    <div>
                      <img src="${value.images[1]}" class="object-cover w-full h-full rounded-xl mb-3" />
                      <span class="text-2xl font-medium text-left">${value.judul}</span>
                      <p class="text-left">Deskripsi : <br/>${value.deskripsi}</p>
                      <p class="text-left mt-3 text-sky-500">Teknologi : <br/>${value.teknologi}</p>
                    </div>
                    <button class="close-modal p-3 bg-red-400 rounded-lg w-1/2 text-white self-center sm:mt-5">close</button>
                  </div>
                </div>
              </div>
    `);
  });

  //   $("#section-projects .flex").html(`
  //     <card data-target="#modal-elisa" class="btn-modal relative h-60 sm:h-96 w-full rounded-xl bg-sky-400 p-1 shadow-xl shadow-sky-500/20 scale-95 hover:scale-100 transition-all ease-in-out duration-500">
  //             <img src="https://picsum.photos/seed/1840/1000/600" class="object-cover w-full h-full rounded-xl" />
  //             <div class="absolute w-full h-full bg-transparent z-20 top-0 left-0 rounded-xl"></div>
  //             <div class="absolute z-10 w-full h-1/2 bottom-0 left-0 bg-black/20 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center text-center rounded-t-none">
  //                 <p class="text-sm px-10 text-gray-300 mt-5 max-h-28 mb-2">
  //                   <b class="block text-2xl font-semibold tracking-wider">Elisa</b>
  //                   <span>
  //                     Aplikasi monitoring konsumsi listrik dan air
  //                   </span>
  //                 </p>
  //             </div>
  //           </card>

  //               <div id="modal-elisa" class="modal w-full h-full hidden">
  //                 <div class="w-full h-full bg-white/40 backdrop-blur-2xl top-0 left-0 right-0 bottom-0 fixed z-40"></div>
  //                 <div class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex-col items-center gap-2 -translate-y-1/2 p-6 bg-white shadow-2xl rounded-lg top-1/2 left-1/2 -translate-x-1/2 fixed flex z-50 animate-fadeIn">
  //                   <button class="close-modal w-10 h-10 rounded-full p-2 absolute z-40 -top-2 -right-2 bg-red-400 text-white font-bold shadow-md shadow-red-500/20 scale-95 hover:scale-100 transition-all ease-in-out duration-300">
  //                     X
  //                   </button>
  //                   <div class="flex flex-col justify-between h-[52vh]">
  //                     <div>
  //                       <svg xmlns="http://www.w3.org/2000/svg" class="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
  //                       </svg>
  //                       <span class="text-2xl font-medium">Payment Successful</span>
  //                       <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur?</p>
  //                     </div>
  //                     <button onclick="return closeModal(this, 'modal-elisa')" class="close-modal p-3 bg-red-400 rounded-lg w-1/2 text-white self-center">close</button>
  //                   </div>
  //                 </div>
  //               </div>
  //     `);
});
