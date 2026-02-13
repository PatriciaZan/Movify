import { useNavigate } from "react-router-dom";

import styles from "./banner.module.css";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner({ contentBanner, type }) {
  const navigate = useNavigate();

  const handleNavigate = (item, type) => {
    const dataToPass = {
      item: item,
      id: item.id === undefined ? item.mal_id : item.id,
      typeToPass: type,
    };

    navigate(`about/${item.id === undefined ? item.mal_id : item.id}`, {
      state: dataToPass,
    });

    console.log(item);
    console.log(type);
  };
  return (
    <div className={styles.bannerContainer}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade" // Efeito de transição suave
        slidesPerView={1} // Apenas 1 elemento por vez
        navigation={true}
        loop={true} // Infinito para os 3 elementos
        autoplay={{
          delay: 5000, // Troca sozinho a cada 5 segundos
          disableOnInteraction: false,
        }}
      >
        {contentBanner.map((item) => (
          <SwiperSlide>
            <div
              onClick={() => handleNavigate(item, type)}
              className={styles.bannerItem}
            >
              <img
                src={
                  type === "anime"
                    ? item.images.jpg.image_url
                    : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                }
                alt=""
              />
              <div className={styles.bannerContent}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button>Assistir Agora</button>
              </div>
              {/* <h3>{item.name ? item.name : item.title}</h3> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
