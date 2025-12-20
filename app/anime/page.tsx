"use client";
import AnimeVideoCard from "@/components/AnimeVideoCard";
import { useSidebar } from "@/context/SidebarContext";

const AnimePage = () => {
  const { isSidebarOpen } = useSidebar();

  const animeData = [
    {
      title: "Bleach",
      videoId: "bleach-anime_gtx188",
    },
    {
      title: "Naruto",
      videoId: "naruto_cv8vb3",
    },
    {
      title: "dragon ball super",
      videoId: "dbs_swuz6t",
    },
    {
      title: "dragon ball z",
      videoId: "dbz_ygttf6",
    },
    {
      title: "Attack on titan",
      videoId: "aot_estq7u",
    },
    {
      title: "demon slayer",
      videoId: "ds_ynbclv",
    },
    {
      title: "black clover",
      videoId: "bc_jz6jag",
    },
    {
      title: "jujutsu kaisen",
      videoId: "jjk_tkpen7",
    },
    {
      title: "one punch man",
      videoId: "opm_jll6bo",
    },
    {
      title: "hunter x hunter",
      videoId: "hxh_cdrl3u",
    },
    {
      title: "death note",
      videoId: "death-note_wigj2i",
    },
    {
      title: "vinland saga",
      videoId: "vinland_fehqh2",
    },
    {
      title: "Monster",
      videoId: "Johan_Liebert_zehrn9",
    },
    {
      title: "kaiju no. 8",
      videoId: "Kaiju_No_8_ebr3sh",
    },
    {
      title: "fire force",
      videoId: "Fire_Force_xn1dkc",
    },
    {
      title: "spy family",
      videoId: "spy-family_r0ned9",
    },

    {
      title: "solo leveling",
      videoId: "solo-leveling_ibnvuu",
    },
    {
      title: "chainsaw man",
      videoId: "chainsawmen_ghbnfo",
    },
    {
      title: "boruto",
      videoId: "boruto_ckes80",
    },
    {
      title: "blue lock",
      videoId: "bl_pibvza",
    },
    {
      title: "tokyo ghoul",
      videoId: "tg_emyau0",
    },
    {
      title: "that time i got reincarnated as a slime",
      videoId: "slime_unnhjt",
    },
    {
      title: "dandadan",
      videoId: "dandadan_ddsuvy",
    },
    {
      title: "dororo",
      videoId: "dororo_r1bfu0",
    },
    {
      title: "mushoku tensei",
      videoId: "mt_ttibzg",
    },
    {
      title: "haikyu",
      videoId: "haiyku_rftb5o",
    },
  ];
  return (
    <main
      className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}
    >
      <div className="mb-10">
        <h1 className="md:text-4xl text-3xl font-bold text-white mb-2 leading-normal">
          Living Between Reality and Anime
        </h1>
        <p className="text-sm">
          Whether its action, mystery, or heartwarming moments, anime has a way
          of capturing emotions like nothing else. Sometimes I watch, sometimes
          I rewatch—but I’m always part of this universe.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {animeData.map((anime) => (
          <CardBox key={anime.title} anime={anime} />
        ))} */}
        {animeData.map((anime) => (
          <AnimeVideoCard key={anime.title} {...anime} />
        ))}
      </div>
    </main>
  );
};

export default AnimePage;
