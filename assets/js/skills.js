$(document).ready(function () {
  const skills = [
    {
      judul: "TailwindCSS",
      icon: "lni-tailwindcss",
      color: "text-sky-500",
    },
    {
      judul: "ReactJS",
      icon: "lni-react",
      color: "text-cyan-500",
    },
    {
      judul: "NextJS",
      icon: "lni-nextjs",
      color: "text-slate-600",
    },
    {
      judul: "PHP",
      icon: "lni-php",
      color: "text-indigo-500",
    },
    {
      judul: "Laravel",
      icon: "lni-laravel",
      color: "text-orange-500",
    },
    {
      judul: "Bootstrap",
      icon: "lni-bootstrap-5",
      color: "text-indigo-500",
    },
    {
      judul: "MySQL,Oracle",
      icon: "lni-mysql",
      color: "text-red-500",
    },
    {
      judul: "VueJS",
      icon: "lni-vuejs",
      color: "text-emerald-500",
    },
    {
      judul: "HTML,CSS,JS",
      icon: "lni-html5",
      color: "text-orange-500",
    },
    {
      judul: "PS,Lr,Ai,Pr",
      icon: "lni-adobe",
      color: "text-red-500",
    },
    {
      judul: "Figma",
      icon: "lni-figma",
      color: "text-slate-500",
    },
  ];

  $.each(skills, function (key, value) {
    $("#section-skills").append(`
    <div class="w-fit bg-slate-50 px-5 sm:px-10 py-2 h-fit grid content-center rounded-full shadow-xl shadow-slate-500/10">
    <div class="flex gap-2">
      <div class="text-4xl grid content-center">
        <i class="lni ${value.color} ${value.icon}"></i>
      </div>
      <div class="self-center">
        <h4 class="">${value.judul}</h4>
      </div>
    </div>
  </div>
      `);
  });
});
